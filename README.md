# Bot Info

Delta is a simple to use bot. It specialises in Animal and Reddit Commands, making the bot suitable for a young audience.

Go to [Delta's Documentation](https://unieo.gitbook.io/delta-docs/) to learn more about it.

# Running on Bot

It is possible to run Delta on a local computer with a few minor changes, but due to hosting the bot on repl.it this makes it much harder (for you) to change everything and have a hard time, so just to make it easier I feel it's much better for you as well to run you bot on repl.it.

Though, you will need to have this stuff to run the bot:

-   [Repl.it Account](https://repl.it/signup)
-   [Discord Account](https://discord.com/register)
-   [Github Account](https://github.com/join)

## Getting Started

1. First go to Delta's Repo on Github
2. Fork it
3. Go to [Repl.it](https://repl.it/)
4. Click on the **+** button in the top right corner
5. Click on the **Import from Github** tab
6. Select the Forked Repo and then Import from Github

## Getting Ready

Ok now we have successfully setup the repo (called repls on repl.it) on repl.it and now you only have to rename the `.example.env` file to `.env` and inside it replace `YOUR_BOT_TOKEN_HERE` with your bot's token from [Discord Dev Portal](https://discord.com/developers/applications). After that rename `config.example.json` to `config.json` and inside it, fill in all the details or the bot might throw an error.

## Starting the bot

Now you simply start the bot using the green **Run** Button and if all goes well the bot should be online!

## Bugs

There is a bug node.js where it doesn't recognise the **got** dependence and so the bot doesnt run, to counter this go to the **Shell** tab on the right of the console, type `npm i got` and after that is done, try running the bot again.

# Note

-   Keep on updating the dependencies using npm.
-   Yes, you need to create an application and a bot on you own.
