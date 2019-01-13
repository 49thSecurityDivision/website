# 49sd Website

To setup this project locally, first clone the repository.

    git clone https://github.com/49thSecurityDivision/website.git
    or
    git clone git@github.com:49thSecurityDivision/website.git

Move into the root folder of the repository.

    cd website

Next, you will need to create the keys.json file and add the appropriate data.

    cp src/lib/keys.example.json src/lib/keys.json

Now you can install the necessary dependencies and run the application.

    npm install
    npm start

Once you are ready to move to production, you will first need to run a new build which will output to the `build` folder.

    npm build

Finally, deploy the build to the production server.