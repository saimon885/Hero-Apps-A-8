![My GitHub Banner](https://i.ibb.co.com/gL4xG1mz/Screenshot-2025-11-19-161952.png)
<h1>Project Name : Apps Store</h1>
<h3>Live URL : https://moonlit-hummingbird-b1410b.netlify.app/</h3>

<p><h3>description :</h3> This app is basically a dynamic app. It shows the data of various software to the user. On my homepage, there is a button on the right side of the navbar, clicking on that button will take you directly to my github account. Then I have two buttons in the banner, with some images and some titles. When those two buttons are clicked, the one with Google Play will take me to the apps option in the Google Play Store, and the button with the name App Store will take me to my direct app store. Normally, eight data are shown on my homepage, along with a banner and a footer. This is basically a React Router app. This app is basically responsive and can be viewed beautifully on all types of devices. There is a see all button below the eight data on the homepage. When you click on this button, all 20 of my data are shown to the user and at the same time it is in the React Router apps selection state. When I refresh, the loading screen will show on both my homepage and apps page and then my data will be shown. When I click on any of those data, all the details of that data will be taken to another page and shown to me. On that page, the single data of my apps such as the image title of the apps, download reviews, and then the install button is given in a chart. Below the chart, a description about that app is given. Now, let's take the install button, when I click on the install button, the said app is being stored in my local storage and my button is automatically disabled and it is being disabled using a toast. Then I have shown the data that is in my local storage to the user in a route called installation. There, a length of how many apps I normally have is given along with the image title download uninstall button of that app. When the uninstall button is clicked, the app is automatically deleted from my local storage. Another thing is that there is a dropdown menu named sort by, the main purpose of showing it is to show my most downloaded apps from the most to the least and the least downloaded apps from the most. Let's discuss the last photo, it is basically some examples about my app, here I have given the logo of one of my apps and below it some paragraphs about the app, then on my right side there is something written under the name of service, something written under the name of company and I have given some links under the name of social links.</p>

<h3>Technologies :</h3> react,react router,toastify,tailwind css, daisy ui,font awesome,rechart,


{
  "version": 2,
  "builds": [
    {
     
      "src": "index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "index.js",
      "methods": ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"]
    }
  ]
}
