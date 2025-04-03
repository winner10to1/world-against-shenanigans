
# Deploying Truth Beacon to Heroku

This guide will walk you through the process of deploying the Truth Beacon application to Heroku.

## Prerequisites

1. A Heroku account (sign up at [heroku.com](https://heroku.com) if you don't have one)
2. Heroku CLI installed on your computer ([installation guide](https://devcenter.heroku.com/articles/heroku-cli))
3. Git installed on your computer

## Deployment Steps

### 1. Login to Heroku CLI

Open your terminal and run:

```bash
heroku login
```

Follow the prompts to log in to your Heroku account.

### 2. Create a new Heroku app

```bash
heroku create truth-beacon
```

This will create a new Heroku app named "truth-beacon" (or choose a different name if this one is taken).

### 3. Add the Heroku buildpack for static sites

```bash
heroku buildpacks:set heroku/nodejs
```

### 4. Add the package.json start script

Make sure your package.json has the following scripts:

```json
"scripts": {
  "dev": "vite",
  "build": "tsc && vite build",
  "start": "node server.js"
}
```

### 5. Deploy to Heroku

Commit all your changes and push to Heroku:

```bash
git add .
git commit -m "Prepare for Heroku deployment"
git push heroku main
```

If your default branch is named differently (like "master"), use that instead of "main".

### 6. Open your app

```bash
heroku open
```

## Troubleshooting

If you encounter any issues:

1. Check the Heroku logs:
   ```bash
   heroku logs --tail
   ```

2. Make sure all dependencies are correctly listed in package.json

3. Verify that the Procfile and static.json are correctly formatted

4. Ensure your server.js file is correctly configured to serve static files

## Additional Resources

- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Deploying Static Sites to Heroku](https://devcenter.heroku.com/articles/deploying-nodejs)
