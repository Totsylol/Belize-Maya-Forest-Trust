# How to start the application locally

Once you have cloned the repository, in your terminal, cd AppArch/frontend/BMFT then [npm start]() to launch the frontend.

To run the backend concurrently, split your terminal and cd AppArch/backend then [npm start](). Ensure that you have your IP address configured in MONGODB, otherwise the backend will not launch.

# Pages for text edits

For anyone modifying text with no experience using JSX, please look for the return statement in the frontend/BMFT/src/components folder. It will usually be followed by a <div> tag.

## Where to make edits:

### [BIOPages](https://github.com/IvanMK518/Belize-Maya-Forest-Trust/tree/main/AppArch/frontend/BMFT/src/components/BIOPages)

    - Board.js
    - Ourteam.js
    - Staff.js
    - Supporters.js

### [GeneralFeatures](https://github.com/IvanMK518/Belize-Maya-Forest-Trust/tree/main/AppArch/frontend/BMFT/src/components/GeneralFeatures)

    - Biography

### [MainPages](https://github.com/IvanMK518/Belize-Maya-Forest-Trust/tree/main/AppArch/frontend/BMFT/src/components/MainPages)
    
All files except Newsfeed.js. That component renders text from the backend. Please refer to the backend documentation.

### [WWDFeatures](https://github.com/IvanMK518/Belize-Maya-Forest-Trust/tree/main/AppArch/frontend/BMFT/src/components/WWDFeatures)

    - AgroProj.js
    - Building Stewards.js
    - Communitystewards.js
    - Outreach.js
    - WWDinfo.js

# Backend Interactions

For any backend interacting components, please refer to the [API](https://github.com/IvanMK518/Belize-Maya-Forest-Trust/tree/main/AppArch/frontend/BMFT/src/components/API) folder. Any backend interacting additions should be added to this folder.

## Notes on API components:

## AdminNews.js

This component makes an API call to the backend to pull any relevant news articles with the tags 'news' or 'annual report'. 

## Setting.js

This component handles user deletion and password changes for those with admin access. Please refer to each specific subcomponent for functional changes [delete](https://github.com/IvanMK518/Belize-Maya-Forest-Trust/blob/main/AppArch/frontend/BMFT/src/components/API/DeleteUser.js) and [password change](https://github.com/IvanMK518/Belize-Maya-Forest-Trust/blob/main/AppArch/frontend/BMFT/src/components/API/UpdatePassword.js). Beware: Once you delete the account, there is no recovery. You must be logged in to access this.

## NewsPages.js

This component creates a new page for every news article seen on the newsfeed. Please avoid giving articles the same title to prevent routing conflicts.

## Post.js

This is where you can post news articles to the database. You must be logged in to access this component.

# CSS 

For any CSS changes, please look for the [styles](https://github.com/IvanMK518/Belize-Maya-Forest-Trust/tree/main/AppArch/frontend/BMFT/src/components/styles)
folder. Import statements in each component will prompt you to the corresponding CSS module.



