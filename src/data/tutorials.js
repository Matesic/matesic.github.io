export const loadedTutorials = [];
const locale = navigator.languages !== undefined ? navigator.languages[0] : navigator.language;

//TODO change data structure
// loadedTutorials -> category -> tutorial

export const loadTutorials = () => {
    const all = require.context('../tutorials', true, /\.\/(?!template).*/);

    //const context = require.context('../tutorials', false, /\.md$/);

    all.keys().forEach(fileName => {
        const moduleName = fileName.replace(/(\.)/, '');
        const category = fileName.match(/\/(.*?)\/.*\.md/);

        if (loadedTutorials.findIndex(t => t.fileName === fileName) !== -1) {
            return;
        }

        import('../tutorials' + moduleName)
            .then(module => {
                fetch(module.default)
                    .then(res => res.text())
                    .then(md => {
                        const title = md.match(/\[title]:\s*#\s*\((.*?)\)/)[1];
                        const description = md.match(/\[description]:\s*#\s*\((.*?)\)/)[1];
                        const thumbnail = md.match(/\[thumbnail]:\s*#\s*\((.*?)\)/)[1];
                        const publishedDate = md.match(/\[published]:\s*#\s*\((.*?)\)/)[1];
                        const content = md.replace(/'/, '\\\'')
                            .replace(/TITLE/, title)
                            .replace(/DESCRIPTION/, description)
                            .replace(/THUMBNAIL/, thumbnail)
                            .replace(/PUBLISHED_DATE/, new Date(publishedDate).toLocaleDateString(locale))
                        loadedTutorials.push({
                            fileName: fileName,
                            category: category === null ? null : category[1],
                            title: title,
                            description: description,
                            thumbnail: thumbnail,
                            publishedDate: new Date(publishedDate),
                            content: content
                        });
                        loadedTutorials.sort((t1, t2) => t2.publishedDate - t1.publishedDate);
                    });
            });
    });
}