import * as React from 'react';

export const tutorialData = new Map();
export const latestTutorials = [];
const locale = navigator.languages !== undefined ? navigator.languages[0] : navigator.language;

export const loadTutorialData = () => {
    const allMarkdowns = require.context('../tutorials', true, /\.\/(?!template|workinprogress).*\.md/i);

    allMarkdowns.keys().forEach(markdownName => {
        const moduleName = markdownName.replace(/(\.)/, '');
        const category = markdownName.match(/\/(.*?)\/.*\.md/);

        const realCategory = category == null ? 'Other' : category[1];
        const pathCategory = realCategory.toLowerCase();

        if (tutorialData.has(pathCategory) && tutorialData.get(pathCategory).tutorials.findIndex(t => t.fileName === markdownName) !== -1) {
            return;
        }

        if (!tutorialData.has(pathCategory)) {
            tutorialData.set(pathCategory, {
                description: '',
                tutorials: []
            });
            loadCategoryDescription(markdownName, realCategory, pathCategory);
        }

        loadMarkdown(markdownName, moduleName, realCategory, pathCategory);
    });
}

const loadCategoryDescription = (fileName, category, pathCategory) => {
    import(`../tutorials/${category}/category.txt`)
        .then(module => {
            fetch(module.default)
                .then(res => res.text())
                .then(md => {
                    tutorialData.get(pathCategory).description = md;
                });
        })
        .catch(err => err);
}

const loadMarkdown = (fileName, moduleName, category, pathCategory) => {
    import(`../tutorials${moduleName}`)
        .then(module => {
            fetch(module.default)
                .then(res => res.text())
                .then(md => {
                    const title = md.match(/\[title]:\s*#\s*\((.*?)\)/)[1];
                    const description = md.match(/\[description]:\s*#\s*\((.*?)\)/)[1];
                    const thumbnail = md.match(/\[thumbnail]:\s*#\s*\((.*?)\)/)[1];
                    const author = md.match(/\[author]:\s*#\s*\((.*?)\)/)[1];
                    const publishedDate = md.match(/\[published]:\s*#\s*\((.*?)\)/)[1];

                    const directory = `/images/tutorials/${moduleName.replace(category, '').replace('.md', '').replace('//', '')}`;

                    const content = md.replace(/'/, '\\\'')
                        .replace(/TITLE/, title)
                        .replace(/DESCRIPTION/, description)
                        .replace(/DIR/g, directory)
                        .replace(/THUMBNAIL/, `/${thumbnail}`)
                        .replace(/AUTHOR/, author)
                        .replace(/PUBLISHED_DATE/, new Date(publishedDate).toLocaleDateString(locale));

                    const tutorial = {
                        fileName: fileName,
                        category: category,
                        title: title,
                        description: description,
                        thumbnail: `${directory}/${thumbnail}`,
                        author: author,
                        publishedDate: new Date(publishedDate),
                        content: content
                    };
                    tutorialData.get(pathCategory).tutorials.push(tutorial);
                    tutorialData.get(pathCategory).tutorials.sort((t1, t2) => t1.publishedDate - t2.publishedDate);

                    latestTutorials.push(tutorial);
                    latestTutorials.sort((t1, t2) => t2.publishedDate - t1.publishedDate);
                });
        });
}