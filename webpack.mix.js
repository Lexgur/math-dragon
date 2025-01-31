const mix = require('laravel-mix');

mix
  .js('src/app.js', 'public') // Output JS directly to public
  .sass('src/style.scss', 'public/style.css') // Output CSS directly to public
  .copy('src/index.html', 'public') // Copy HTML directly to public
  .copyDirectory('src/pics', 'public/pics') // Copy images to public/pics
  .copyDirectory('src/snd', 'public/snd') // Copy snd to public/snd
  .options({
    processCssUrls: false, // Avoid processing CSS URLs
  });
