Fresh hello-world Gatsby build.
https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-hello-world

Dev Notes

- Viewing the assets, I see that I'll need a homepage, a contact page, and a products page.

- Starting to build the homepage. Using the Mobile layout.
- I'll need a header - no navigation present, I may add one anyway. Or not to show a point ;).
- Next is the Hero section.
  - I'm glad there's a without-text bob picture option
  - Hero image is 1.61 MB as a png. Reduced file size by over 1905% (down to 84.5 KB) by saving as a jpg. Will have to re-optimize all image assets. ugh.
  - All pictures will have to be renamed as well. They can't have spaces.
    - Juice Head - 5k - Watermelon Lime - PNG should be juicehead-5k-Watermelon_lime or juice_head-5k-Watermelon_lime-png
  - Trim the pictures if they are a png!
  - Don't worry about saving any svgs. Turns out I'm not using them. Also, I don't need images/svgs of any text.
- Homepage is done. He gon' learn today!

- Starting on Products page

  - The product pictures should be resized to all be the same height after being trimmed.
    - If saving as a jpg, add a 100px-200px height padding. Make the width match. Square images!
  - May need to rework the mobile layout.

- Starting on Contact page

  - Photoshopped the vaporz club logo out of the background image.
  - UX Tip: Contact pages should have a contact form (or some way to contact the business directly through the website).
    - The lack of a fast and direct communication option may cost you some business.
    - In general, the more you require the user to do, the less willing they are to do it.
    - In this case, they can either click the email and have the OS native mail app open (that no one is signed into, involving even more steps), or they can copy the email, sign into their email provider, paste the email, and then type their message. Too many steps when it could all be handled by a contact form on the website instead.

- Starting to add responsiveness

  - Had to remove all Mobile background images. Replaced them with the full-width Desktop variants.
    - Optimized the Desktop images for huge file size savings.
    - Only use png if the image needs a transparent background. Otherwise, the image should be a jpg - file size can be thousands of times bigger than it needs to be if it's a png. Bad UX.
    - If your software only allows you to save images as png, RUN!

- Can't add fonts.

  - Don't know what they are. Adobe Acrobat gives me font names, but they are not the same when I look them up.
  - Too many fonts.
    - Arimo
    - Lora
    - Athiti Medium
    - Alice - Don't use a font like this - first letter is one font, the rest of the word is a different one.
      - Especially if this technique is used on only one title on a single page. Graphic design principle #736: Consistency - If you only do something once, either repeat it elsewhere or don't do it at all.
  - In code, I have to load in every font and its variant (thin, medium, bold, etc..) used in the design. Websites should only use 2, MAYBE 3 fonts, with only 1-3 variants of each font.
  - It's usually unnecessary to include every variant of a font. Some fonts can have 20+ variants. That's a looot of extra data being loaded in that's not even being used. Bad UX.
  - If you want my life to be easier, find fonts here: [Google Fonts](https://fonts.google.com/)
  - If you use fontsquirrel, daFont, or similar font sharing sites, I'll need the font file(s) used in the design. I'll need to include them into the website's file directory or else they won't be usable at all.
    - I don't like this approach. I'd rather be able to load a font in using a <link> tag like this: `<link href="https://fonts.googleapis.com/css2?family=Arimo&display=swap" rel="stylesheet">`
    - The <link> tag above allows me to use a font from google without needing to download it and include it in the website directory.
  - You should always assume that no one can access the fonts you use in your design.
    - Each computer OS comes with a set of pre-downloaded fonts. The only way to get more is to download and install font files. Just because it's on your machine doesn't mean it's on everyones!
    - If a font is not on a user's computer, the site will use a plain jane serif or sans-serif default.
    - All of this can be prevented by loading a font from a server like Google's.

- My issue with full-page background images
  - Might look fine on mobile, but they turn into pixel soup on big screens.
    - One way to prevent this is to keep the image at an unreasonably high resolution such as 4000x\_\_\_\_.
      - This of course will result in a terribly big file size that isn't meant for web consumption.
    - Another way is to use a smaller image that can be repeated without causing design clashes
      - explanation - [W3 Schools](https://www.w3schools.com/cssref/pr_background-image.asp)
      - example - [W3 Schools Try it Yourself Editor](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_background_multiple)
  - Nearly impossible to accomodate for overlapping text.
    - I personally hate having to put text on a semi-transparent background box.
    - This can be overcome by either:
      - Using a very carefully chosen image that has an open area for text placement.
      - Placing the text on a solid background and adding some flair to make up for the hidden imagery.
      - Not using a background image.
  - Images are not responsive by default. They have to be forced to match the width of the screen. The image's height will scale with the width.
    - This can cause weirdness with any content placed on it.
    - explanation - [W3 Schools](https://www.w3schools.com/howto/howto_css_image_responsive.asp)
    - full screen width example - [W3 Schools Try it Yourself Editor](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_image_responsive)
    - full image width example - [W3 Schools Try it Yourself Editor](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_image_responsive2)
  - You are able to easily place content on an artboard layout, but the reality of the situation on the web is much different.
    - Example, the home page - The cool ring that outlines Bob's picture works on mobile, but the full-page image needs to fit the full page, so the ring will start to expand (~1000px+) to a point that doesn't make sense anymore.
