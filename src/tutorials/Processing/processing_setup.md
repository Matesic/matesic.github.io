[title]:# (Processing Setup)
[description]:# (Setup processing on your computer)
[thumbnail]:# (images/tutorials/processing-logo.png)
[published]:# (2022-05-30)

<!-- DO NOT CHANGE UNDER -->
<div align="center">
    <h1>TITLE</h1>
    <img src="../../THUMBNAIL" alt="thumbnail"/>
    <p>DESCRIPTION</p>
</div>

***

<div align="end">
    <i>Published on</i> PUBLISHED_DATE
</div>

### Table of contents

([`remark-toc`](https://github.com/remarkjs/remark-toc)).

<!-- DO NOT CHANGE ABOVE -->
### Download Processing

1. Go to the <a href="https://processing.org/download" target="_blank">Processing download page</a> and download the latest version.

2. Extract the contents to desired location. `E.g. C:\ProgramFiles\Processing`

3. Start Processing application

<div align="center">
    <img src="/images/tutorials/processing-window.png" width="50%" alt="Processing window"/>
    <p>Processing window</p>
</div>

### Setup Processing

You can open Processing settings by going to `File > Preferences`.

Here you can set sketch (project) location, font used and more.
            
<div align="center">
    <img src="/images/tutorials/processing-settings.png" width="30%" alt="Processing preferences"/>
    <p>Processing preferences</p>
</div>

#### Libraries

You can install Processing libraries by going to `Sketch > Import Library > Add Library`.
Here you can install libraries you want. (They are installed locally, so you can use them in any sketch)

When you want to import a library in your sketch, go to `Sketch > Import Library` and it should be listed there to choose and import.
If it isn't listed here as a library, try reloading the application.

<div align="center">
    <img src="/images/tutorials/processing-import-library.png" width="30%" alt="Processing libraries"/>
    <p>Processing libraries</p>
</div>

#### Tools and Modes

You can install Processing tools and modes by going to `Tools > Add Tool`.
On `Tools` tab you can install different tools that modify Processing application and help you in your developing.
On `Modes` tab you can install different modes that allow you to write code in different languages inside Processing editor.

<div align="center">
    <img src="/images/tutorials/processing-tools.png" width="50%" alt="Processing tools"/>
    <p>Processing tools</p>
</div>

### Using Processing as a library

#### Local library

Go to Processing installed location. `E.g. C:\ProgramFiles\Processing`

Inside `/core/library/` should be a file called `core.jar`.
Copy that file and import it into your project.

#### Maven

You can include Processing library in your project by adding this code to your `pom.xml` file.

Remember to replace `[your version]` with version of processing you need.

```xml
<dependency>
    <groupId>org.processing</groupId>
    <artifactId>core</artifactId>
    <version>[your version]</version>
</dependency>
```

#### Gradle

You can include Processing library in your project by adding this code to dependencies in your `build.gradle` file.

Remember to replace `[your version]` with version of processing you need.

```
implementation group: 'org.processing', name: 'core', version: '[your version]'
```

<br/>
<div align="center">
    <a href="#top">Back to the top</a>
</div>
<br/>
