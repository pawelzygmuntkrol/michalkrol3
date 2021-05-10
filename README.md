<h3>michalkrol3 / https://pawelzygmuntkrol.github.io/michalkrol3</h3>

Third attempt to create a page for a contemporary artist Michał Król. 

After making previous versions of this website I felt that my code is getting too messy and repetitive and I needed to organise it a little bit. The cure was React (somehow 
recruiters are looking for it as well :)). This time the differences in design was quite significant.

<b>Main changes comparing to previous version (and my thoughts on that):</b>

- <b>React (as a whole concept)</b> - now I understand why cutting UI pieces into small reusable chunks must have been a game changer. Using React makes you think completely 
different.
After while I was looking how I could find common thread between sections of my page to write the less code that I could. I even thought how important it is going to be to talk
to designers how some stuff is done from developer perspective and how they can help make it a little bit easier. Using components like a bricks is a great feeling.

- <b>Hooks</b> - useState makes managing the state fun and when combined with useContext lets you do some UI updates pretty easy even from components that are not in parrent-child 
relation. I did not have many features where I could use useEffect so it needs more of my attention. 

- <b>Router</b> - making some parts of UI like cookie banner or navbar appear in every subpage and others appear when they are needed is so easy with React-Router that I would say it 
pleasant. I remember in the previous versions I had to use .htaccess files in order to ie. redirect nonexistent link to home page but with Router no need for that.

- <b>Styled Components</b> - I am all in for idea that styles should be in the same component as logic. If we want to abandon separation of concerns then we should do this
completely. Also changing styles through logic is some much easier when they are in the same component yet I agree that when the component is getting too big it should be cut and
kept in the same directory. I love a lot of things in Styled Components but I think that it is quite harder to get into existing project that uses Styled Components than to one 
using SASS+BEM (because of incomprehensible classnames). Anthoer thing that I was missing was SASS Mixins. I tried other things like variables but they lack Mixins flexibility.

- <b>ES6</b> - I tried some ES6 in previous project (without React) but with React it really shines. Arrow functions, ternary operators, map() and other features work perfectly 
with React.

- <b>Other packages like LazyLoadImage or Fade In</b> - earlier I did not use third party packages at all but know when I see some feature on Github with simple, comprehensive 
documentation I am all in and I am very excited to try many other packages/libraries that spare us reinventing the wheel.
