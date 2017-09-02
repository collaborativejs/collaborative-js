# Collaborative.js - Collaborative software for any project
[![npm version](https://badge.fury.io/js/collaborative.svg)](https://www.npmjs.com/package/collaborative) 
[![CircleCI](https://circleci.com/gh/collaborativejs/collaborative-js.svg?style=shield)](https://circleci.com/gh/collaborativejs/collaborative-js)
[![github issues](https://img.shields.io/github/issues/collaborativejs/collaborative-js.svg)](https://github.com/collaborativejs/collaborative-js/issues) 

Collaborative.js is a JavaScript library to build applications and web-services with collaborative access to the data (live data editing).
  
Our mission is to completely solve the issue of implementing collaborative access to the data for all kind of web services and applications. We examine this topic in a comprehensive manner, scrupulously gathering use cases and feedback to provide a consistent solution for all popular programming languages and platforms. This repository is about JavaScript.

## Download

#### Using Package Mangers
You can install Collaborative.js using any of popular package managers.
  
| npm | Bower | Yarn |
| ------------- | ------------- | ------------- |
| ```npm install collaborative```  | ```bower install collaborative```  | ```yarn add collaborative```  |

#### Using CDN
Collaborative.js is available as a ready-to-include CDN resource.
  
* jsDeliver CDN - `https://cdn.jsdelivr.net/npm/collaborative/dist/collaborative.min.js`
* unpkg CDN - `https://unpkg.com/collaborative/dist/collaborative.min.js`

#### Direct Download
All Collaborative.js binary files can be found in [dist directory](https://github.com/collaborativejs/collaborative-js/tree/master/dist) of the master github branch or
[collaborative-js.zip](https://github.com/collaborativejs/collaborative-js/archive/master.zip) archive.
 
 
## Getting Started
[Getting Started guide](http://collaborativejs.org/docs/getting-started) leads through the most basic tasks of the 
collaborative access topic. During this guide we will build a simple Node.js application with collaborative access 
to a plain text (text live editing).

Note: If you prefere to run getting started example first, visit [getting-started-example repo](https://github.com/collaborativejs/getting-started-example)
 
## Features
<table>
    <tr>
        <td>
            <h4>Arbitrary JSON</h4>
            Complete set of operations (CRUD) allows to building applications of any complexity.
        </td>
        <td>
            <h4>Plain Text</h4>
            An exhaustive set of functionality to implement collaborative access to text documents.
        </td>
    </tr>
    <tr>
        <td>
            <h4>Cursor Management</h4>
            The position of the cursor during the string or JSON operation is completely under control.
        </td>
        <td>
            <h4>Undo/Redo operations</h4>
            Undo/Redo operations are supported out of the box, you don't need to implement complex algorithms to get them work.
        </td>
    </tr>
    <tr>
        <td>
            <h4>Operations History</h4>
            The Collaborative.js engine supports Operations History on a native level, all you need is to build good looking UI based on our API.
        </td>
        <td>
            <h4>Offline Operations</h4>
            Offline Operations feature allows you to build an application or web-service that is able to work in offline mode, with no stable network connection.
        </td>
    </tr>
    <tr>
        <td>
            <h4>WebSocket and AJAX</h4>
            There are no network protocol restrictions, Collaborative.js supports with both WebSocket and AJAX protocols.
        </td>
        <td>
            <h4>Legacy Browsers Support</h4>
            All major browsers including legacy versions e.g IE 6 are supported.
        </td>
    </tr>
</table> 


## Demo
| Rich Text Editor Demo | JSON Structure Demo|
| ------------- | ------------- |
| [<img src="http://collaborativejs.org/img/landing/rich-text-demo.png" alt="Rich Text demo with collaborative access (text live editing) \| Collaborative.js">](http://collaborativejs.org/demos/rich-text-editor-demo)  | [<img src="http://collaborativejs.org/img/landing/json-structure-demo.png" alt="JSON structure demo with collaborative access (data live editing) \| Collaborative.js">](http://collaborativejs.org/)  |
| [View Source](https://github.com/collaborativejs/rich-text-editor-demo) | Coming soon...  |


## Further Learning
* [Documentation](http://collaborativejs.org/docs)
* [API Reference](http://collaborativejs.org/api)
* [Technical Support](http://collaborativejs.org/support)


## License
The [Collaborative.js](http://collaborativejs.org) library is available under different licenses depending on whether it is intended for commercial/government use, or for a personal or non-profit project.
Visit [license page](http://collaborativejs.org/buy) to learn more about licensing policy.
