# Insight Studio

## Express API Template

A template for starting Express / Node projects. This codebase acts as an API ONLY - no views will be rendered (just data responses). Intended to be used with [Client Template](http://10.25.34.113:4700/bberzellini/client-template) or another Front-End framework.

### Tooling
-   Node / express
-   Forever

### Installation

1.  [Download](../../archive/master.zip) this template.
1.  Unzip and rename the template directory.
1.  Empty [`README.md`](README.md) and fill with your own content.
1.  Move into the new project and `git init`.
1.  Install dependencies with `npm install`.

### Commands
-   Open a terminal windown and run `npm start` - will launch Node server with Nodemon incorporated.

### File Structure

-   `server.js` houses the server code which nodemon uses on launch.
-   `app/` houses controllers and procedures. The controllers are the logic behind the request. Procedures will be the script for the data call to be executed in the database.
-   `config/` houses database configurations and routes to interact with the applications controllers in `app/controllers/`.
