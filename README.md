<h3>michalkrol3 / http://www.michalkrol.eu</h3>

Third attempt to create a page for a contemporary artist Michał Król. 

After having a little bit more experience with using JavaScript there was a time to learn React and make my page faster and more modular. The original plan was to also 
implement Contentful CMS but the free versiton only supported two locales and I needed three so for now, as it used to be in previous versions, I have to edit files in "data" 
directory.

<b>Main changes comparing to previous version (and my thoughts on that):</b>

- <b>React</b> - after a little bit harsh beginning I felt more and more confident in using React. After a while I was all in it and I tried as much as I could to make parts of
page as reusable as they can be which sometimes led to changes in design. Reusability of components makes you think completely different about the steps you need to take to 
make your website as simple as possible. Another thing that I understood is that it can be very important to have good communication with designers to let them know how we 
operate in React and how some little changes in their vision can make developers life a lot easier.

- <b>Hooks</b> - at first concept of state was quite odd but with help of Hooks it is no longer such a threat. The useState hook make modyfing data easy, useContext is awesome 
when you have to use some data in non parent-child related components (I did not have a lot of nesting but I know it would be good in this case either) and useEffect helps keep 
track of changes happening dynamically. 

- <b>Router</b> - I was encharmed by Router until build. It worked well on local server but it does not help in every situation. I needed to
use HashRouter to make my website work in every situation yet still some Router features are great. In future I want to learn more about BrowserRouter. 

- <b>Styled Components</b> - having all code in one place is great. Because of how React works we have HTML+JS in one place, Style Components is a step further that brings CSS
to the stack. I like using Styled Components yet I think SASS has advantage in debugging because of lack of incomprehensive IDs and MIXINS with arguments are graat tool when you 
have to use Flexbox a lot with different aligns etc..

- <b>ES6</b> - React is a technology where ES6 can really shine. Methods like map(), ternary operators and arrow functions act like they were created for React.

- <b>Third Party Packages</b> - In this version I started using some packages like ie. Lazy Load Images. I tried some more, but in the end only one was used in production yet 
it was quite plesant not have to think how to deal with something just to install, import and use in code.
  
After having to work with React for a while I want to know more about this technology. I want to learn other technologies created for React like Jest or Redus and 
based on React like  Next.js. React learned me how important it is to have a good look at project before coding, because you can make the work as hard or as easy (when you make
reusable components) as you want.
