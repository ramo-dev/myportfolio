(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8310:function(e,t,a){Promise.resolve().then(a.bind(a,7154))},4398:function(e,t,a){"use strict";a.d(t,{N:function(){return r}});let r=(0,a(2265).createContext)({theme:!1,toggleTheme:()=>{}})},7154:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return eg}});var r=a(7437),s=a(2265),n=a(8646),l=a(4839),i=a(6164);function o(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,i.m6)((0,l.W)(t))}var d=a(5282),c=a(4924),m=a(248),h=a(5127);let x=e=>{let{words:t,duration:a=3e3,className:n}=e,[l,i]=(0,s.useState)(t[0]),[d,c]=(0,s.useState)(!1),x=(0,s.useCallback)(()=>{i(t[t.indexOf(l)+1]||t[0]),c(!0)},[l,t]);return(0,s.useEffect)(()=>{d||setTimeout(()=>{x()},a)},[d,a,x]),(0,r.jsx)(h.M,{onExitComplete:()=>{c(!1)},children:(0,r.jsx)(m.E.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:100,damping:10},exit:{opacity:0,y:-40,x:40,filter:"blur(8px)",scale:2,position:"absolute"},className:o("z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2",n),children:l.split("").map((e,t)=>(0,r.jsxs)(m.E.span,{initial:{opacity:0,y:10,filter:"blur(8px)"},animate:{opacity:1,y:0,filter:"blur(0px)"},transition:{delay:.08*t,duration:.4},className:"inline-block",children:[" "===e?"\xa0":e," "]},l+t))},l)})},u=["I am a Developer","I am a Designer","I am a Chef","I am an Article-Writer","I use Arch and Nvim btw","I am a Software-Engineer","I am a Front-end Developer"];function f(){let e=(0,n._)(["\n    radial-gradient(\n      200px circle at ","px ","px,\n      black 0%,\n      transparent 100%\n    )\n  "]);return f=function(){return e},e}let p=e=>{let{children:t,className:a,containerClassName:s}=e,n=(0,d.c)(0),l=(0,d.c)(0),i=(0,c.Y)(f(),n,l);return(0,r.jsxs)("div",{className:o("relative h-screen flex items-center bg-white dark:bg-black justify-center w-full group overflow-x-hidden",s),onMouseMove:function(e){let{currentTarget:t,clientX:a,clientY:r}=e;if(!t)return;let{left:s,top:i}=t.getBoundingClientRect();n.set(a-s),l.set(r-i)},children:[(0,r.jsx)("div",{className:"absolute inset-0 bg-dot-thick-neutral-300 dark:bg-dot-thick-neutral-800 pointer-events-none"}),(0,r.jsx)(m.E.div,{className:"pointer-events-none bg-dot-thick-red-500 dark:bg-dot-thick-blue-500 absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100",style:{WebkitMaskImage:i,maskImage:i}}),(0,r.jsx)("div",{className:o("relative z-20",a),children:t})]})};function g(){return(0,r.jsxs)(p,{containerClassName:"R",className:"text-center",children:[(0,r.jsx)("h1",{className:"sm:text-4xl text-xl font-bold relative z-20 bg-clip-text text-transparent dark:bg-gradient-to-b dark:from-gray-100 dark:to-gray-400 bg-gradient-to-b from-neutral-900 to-neutral-700",children:"Hello there"}),(0,r.jsxs)("h1",{className:"md:my-4 my-1 md:text-8xl text-6xl font-bold relative z-20 bg-clip-text text-transparent dark:bg-gradient-to-b dark:from-gray-100 dark:to-gray-400 bg-gradient-to-b from-neutral-900 to-neutral-700",children:["It's"," ","Annuar"]}),(0,r.jsx)("div",{className:"min-w-[400px] max-w-[500px] text-2xl font-bold text-gray-900 dark:text-white md:my-3",children:(0,r.jsx)(x,{words:u,className:"md:text-2xl text-lg md:my-4 my-2"})})]})}var b=a(9754),v=a(6179),y=a(8296),w=a(2699),j=a(7138),k=a(4398);let N=e=>{let{navItems:t,className:a}=e,{scrollYProgress:n}=(0,b.v)(),[l,i]=(0,s.useState)(!0),{theme:d,toggleTheme:c}=(0,s.useContext)(k.N);return(0,v.W)(n,"change",e=>{if("number"==typeof e){let t=e-n.getPrevious();.1>n.get()?i(!0):t<0?i(!0):i(!1)}}),(0,r.jsx)(h.M,{mode:"wait",children:(0,r.jsxs)(m.E.div,{initial:{opacity:1,y:-100},animate:{y:l?0:-100,opacity:l?1:0},transition:{duration:.6},className:o(" md:min-w-[60vh] min-w-[40vh] flex max-w-fit  fixed top-10 inset-x-0 mx-auto border border-zinc-300 dark:border-white/[0.2] rounded-full dark:bg-black/80 backdrop-filter backdrop-blur-sm bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-between space-x-4",a),children:[t.map((e,t)=>(0,r.jsxs)(j.default,{href:e.link,className:o("relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"),children:[(0,r.jsx)("span",{className:"block sm:hidden",children:e.icon}),(0,r.jsx)("span",{className:"hidden sm:block text-sm",children:e.name})]},"link=".concat(t))),(0,r.jsx)(m.E.button,{whileTap:{scale:.8},className:"text-foreground",onClick:c,children:d?(0,r.jsx)(y.Z,{}):(0,r.jsx)(w.Z,{})}),(0,r.jsxs)("button",{className:"w-20 border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full",children:[(0,r.jsx)("span",{children:"Blog"}),(0,r.jsx)("span",{className:"absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px"})]})]})})};var C=a(2218);let T=(0,C.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function F(e){let{className:t,variant:a,...s}=e;return(0,r.jsx)("div",{className:o(T({variant:a}),t),...s})}var S=a(3787);let D=[{href:"https://blog.annuar.site/how-to-stay-focused-while-programming-top-strategies",src:"https://blog.annuar.site/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fstock%2Funsplash%2FBTzLUhq4z0U%2Fupload%2Fa04430bb4c712e353663957504e5cda2.jpeg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75",alt:"How to Stay Focused While Programming: Top Strategies",title:"How to Stay Focused While Programming: Top Strategies",description:"In the fast-paced world of software development, efficiency and focus are paramount. Microtasking, a strategy that breaks down larger tasks into smaller, manageable units, has emerged as a powerful technique to enhance productivity and streamline workflow. Here’s how microtasking can benefit developers"},{href:"https://blog.annuar.site/bridging-the-skill-gap-in-kenya-challenges-and-solutions",src:"https://blog.annuar.site/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1720300134433%2Ff92a5be8-5cbd-40da-9ff3-137e8f2f016b.jpeg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75",alt:"Bridging the Skill Gap in Kenya: Challenges and Solutions",title:"Bridging the Skill Gap in Kenya: Challenges and Solutions",description:"Kenya, a growing center of innovation and tech in East Africa, has an important challenge: the skill gap. This gap between what employers need and what job seekers have is a big hurdle for economic growth. Bridging this gap is key to unlocking the potential of Kenya’s youth and ensuring long-term economic progress."}];var I=()=>(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{className:"leading font-bold text-3xl my-4",children:"About Me"}),(0,r.jsxs)("div",{className:"text-lg my-6",children:["Hey, I'm ","Annuar"," \uD83D\uDC4B, a ","frontend developer",", optimist, and community builder. ","I am currently work at Space ya Tech, where I help develop web apps. SYT is an open-source web platform for the youths built with React.",(0,r.jsx)(F,{variant:"secondary",children:"React"})]}),(0,r.jsxs)("p",{className:"text-lg",children:["Throughout the years, I've shared content on my blog, striving for simplicity. You'll discover articles about the technologies that capture my interest, insights into my career growth, and the knowledge I've gained along the way."," "]}),(0,r.jsx)("div",{className:"flex flex-wrap gap-4 my-8 mt-14",children:D.map((e,t)=>(0,r.jsxs)("a",{href:e.href,className:"flex flex-col min-w-[250px] h-84 p-3 flex-1 w-full md:w-1/2 rounded-lg text-foreground border bg-transparent",children:[(0,r.jsx)("img",{src:e.src,alt:e.alt,className:"w-full h-40 object-cover rounded-lg"}),(0,r.jsxs)("div",{className:"flex-1 flex flex-col pt-3",children:[(0,r.jsx)("h1",{className:"text-xl font-bold text-foreground-background hover:text-blue-600 dark:hover:text-blue-500/70 mb-2",children:e.title}),(0,r.jsx)("p",{className:"text-foreground-background line-clamp-3",children:e.description})]})]},t))}),(0,r.jsxs)("a",{href:"https://blog.annuar.site",className:"hover:animate-pulse text-blue-500 dark:hover:text-blue-500/70 flex items-center gap-1",children:["Explore articles"," ",(0,r.jsx)(S.Z,{className:"h-5"})]})]}),_=a(1538);let A=(0,C.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),B=s.forwardRef((e,t)=>{let{className:a,variant:s,size:n,asChild:l=!1,...i}=e,d=l?_.g7:"button";return(0,r.jsx)(d,{className:o(A({variant:s,size:n,className:a})),ref:t,...i})});B.displayName="Button";var z=a(1281),E=a(4697);let Z=z.fC;z.xz;let M=z.h_;z.x8;let P=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(z.aV,{ref:t,className:o("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...s})});P.displayName=z.aV.displayName;let R=s.forwardRef((e,t)=>{let{className:a,children:s,...n}=e;return(0,r.jsxs)(M,{children:[(0,r.jsx)(P,{}),(0,r.jsxs)(z.VY,{ref:t,className:o("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a),...n,children:[s,(0,r.jsxs)(z.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,r.jsx)(E.Z,{className:"h-4 w-4"}),(0,r.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});R.displayName=z.VY.displayName;let L=e=>{let{className:t,...a}=e;return(0,r.jsx)("div",{className:o("flex flex-col space-y-1.5 text-center sm:text-left",t),...a})};L.displayName="DialogHeader";let H=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(z.Dx,{ref:t,className:o("text-lg font-semibold leading-none tracking-tight",a),...s})});H.displayName=z.Dx.displayName,s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(z.dk,{ref:t,className:o("text-sm text-muted-foreground",a),...s})}).displayName=z.dk.displayName;let O=s.forwardRef((e,t)=>{let{className:a,type:s,...n}=e;return(0,r.jsx)("input",{type:s,className:o("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",a),ref:t,...n})});O.displayName="Input";var W=a(8364);let q=(0,C.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),V=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(W.f,{ref:t,className:o(q(),a),...s})});V.displayName=W.f.displayName;let Y=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("textarea",{className:o("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",a),ref:t,...s})});Y.displayName="Textarea";var J=a(7776),K=a(3274);let U=e=>{let{isOpen:t,onClose:a}=e,[n,l]=(0,s.useState)({fullName:"",email:"",message:""}),[i,o]=(0,s.useState)(!1),d=e=>{let{id:t,value:a}=e.target;l(e=>({...e,[t]:a}))},c=async()=>{o(!0);try{var e;let t=(e="https://mailserver-cetl.onrender.com/",void 0!==e)?e:"";if(!t)throw Error("The API URL is not defined");let a=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!a.ok)throw Error("Network response was not ok");let r=await a.text();J.Am.success(r)}catch(e){console.error("Failed to send email:",e),J.Am.error("Failed to send email")}finally{o(!1)}},m=async e=>{e.preventDefault(),await c(),a&&a()};return(0,r.jsx)(Z,{open:t,onOpenChange:a,children:(0,r.jsxs)(R,{className:"sm:max-w-[425px] bg-background",children:[(0,r.jsx)(L,{children:(0,r.jsx)(H,{children:"Send a Message"})}),(0,r.jsxs)("form",{onSubmit:m,className:"grid gap-4 py-4",children:[(0,r.jsxs)("div",{className:"grid gap-2",children:[(0,r.jsx)(V,{htmlFor:"name",children:"Full Name"}),(0,r.jsx)(O,{id:"name",type:"text",placeholder:"John Doe",value:n.fullName,onChange:d,required:!0})]}),(0,r.jsxs)("div",{className:"grid gap-2",children:[(0,r.jsx)(V,{htmlFor:"email",children:"Email"}),(0,r.jsx)(O,{id:"email",type:"email",placeholder:"m@example.com",value:n.email,onChange:d,required:!0})]}),(0,r.jsxs)("div",{className:"grid gap-2",children:[(0,r.jsx)(V,{htmlFor:"message",children:"Your Message:"}),(0,r.jsx)(Y,{required:!0,id:"message",value:n.message,onChange:d})]}),(0,r.jsxs)(B,{type:"submit",className:"w-full flex items-center justify-center",children:[i&&(0,r.jsx)(K.Z,{className:"animate-spin mr-2"}),"Send a Message"]}),(0,r.jsxs)("div",{className:"mt-4 text-center text-sm",children:["Want to talk to my AI bot?"," ",(0,r.jsx)(j.default,{href:"#",className:"underline",children:"Try it"})]})]})]})})};var G=()=>{let[e,t]=(0,s.useState)(!1);return(0,r.jsxs)("div",{className:"mt-20 h-[20rem] flex flex-col",children:[(0,r.jsx)("h1",{className:"leading font-bold text-3xl my-4 self-start",children:"Contact Me"}),(0,r.jsxs)("p",{className:"text-lg self-start my-4 w-full",children:["Want to chat? Just send me a message and I'll respond as soon as possible.",(0,r.jsx)("br",{}),"Or reach out from the socials on the floating panel"]}),(0,r.jsx)(B,{onClick:()=>t(!0),className:"self-start my-5",children:"Contact Me"}),(0,r.jsx)(U,{isOpen:e,onClose:()=>{t(!1)}})]})},Q=a(6648);let X=[{href:"https://www.github.com/ramo-dev/brightspend",src:"/projects/BrightspendLandingPage.png",alt:"BrightSpend Landing Page",title:"BrightSpend Landing Page",description:"The landing page for BrightSpend, an AI-powered financial education platform built with material tailwind, react and zustand for state management.",width:800,height:400},{href:"https://www.github.com/ramo-dev",src:"/projects/CLIChatBot.png",alt:"CLI ChatBot",title:"CLI ChatBot",description:"A command-line interface chatbot for interactive user interactions.",width:800,height:400},{href:"https://www.github.com/ramo-dev",src:"/projects/Tees&Stuffs.png",alt:"Tees & Stuffs",title:"Tees & Stuffs",description:"An e-commerce store specializing in selling T-shirts and related merchandise. Built with NextJs, Shadcn, Prisma, MongoDB, and NextAuth.",width:800,height:400},{href:"https://www.github.com/ramo-dev",src:"/projects/Bizna-Dashboard.png",alt:"Bizna Dashboard",title:"Bizna Dashboard",description:"A dashboard application for managing business analytics and insights from their clients while selling digital goods conveniently.",width:800,height:400}];var $=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h1",{className:"leading font-bold text-3xl mt-14",children:"My Latest Projects"}),(0,r.jsx)("p",{className:"text-lg my-5",children:"I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my latest."}),(0,r.jsx)("div",{className:"flex flex-wrap gap-4 my-8",children:X.map((e,t)=>(0,r.jsxs)("a",{href:e.href,className:"flex flex-col h-84 p-3 min-w-[250px] flex-1 w-full md:w-1/2 rounded-lg text-foreground border bg-transparent",children:[(0,r.jsx)(Q.default,{src:e.src,alt:e.alt,width:e.width,height:e.height,className:"w-full h-40 object-cover rounded-lg",loading:"lazy"}),(0,r.jsxs)("div",{className:"flex-1 flex flex-col pt-3",children:[(0,r.jsx)("h1",{className:"text-xl font-bold text-foreground-background hover:text-blue-300 mb-2",children:e.title}),(0,r.jsx)("p",{className:"text-foreground-background line-clamp-3",children:e.description})]})]},t))}),(0,r.jsxs)("a",{href:"https://www.github.com/ramo-dev",className:"hover:animate-pulse text-blue-500 dark:hover:text-blue-500/70 flex items-center gap-1",children:["Explore other Projects ",(0,r.jsx)(S.Z,{className:"h-5"})]})]}),ee=a(7218),et=a(7419),ea=a(7164),er=a(8948);let es=[{href:"https://www.linkedin.com/in/annuar-ndungu",label:"LinkedIn",icon:(0,r.jsx)(ee.Z,{className:"w-6 h-6 mr-2"}),target:"_blank",rel:"noopener noreferrer",hoverColor:"text-blue-500"},{href:"https://github.com/ramo-dev",label:"GitHub",icon:(0,r.jsx)(et.Z,{className:"w-6 h-6 mr-2"}),target:"_blank",rel:"noopener noreferrer",hoverColor:"text-gray-400"},{href:"/cv/annuar-ndungu-cv.pdf",label:"Download CV",icon:(0,r.jsx)(ea.Z,{className:"w-6 h-6 mr-2"}),download:!0,hoverColor:"text-green-500"},{href:"https://blog.annuar.site",label:"Blog",icon:(0,r.jsx)(er.Z,{className:"w-6 h-6 mr-2"}),target:"_blank",rel:"noopener noreferrer",hoverColor:"text-yellow-500"}];var en=()=>(0,r.jsx)("footer",{className:"bg-transparent text-foreground pb-8",children:(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("h1",{className:"text-2xl font-bold mb-2 self-start",children:"Annuar"}),(0,r.jsx)("p",{className:"text-lg mb-6 self-start",children:"Useful Links"}),(0,r.jsx)("div",{className:"flex space-x-6 flex-wrap",children:es.map((e,t)=>(0,r.jsx)(j.default,{href:e.href,passHref:!0,legacyBehavior:!0,children:(0,r.jsxs)("a",{target:e.target,rel:e.rel,download:!!e.download||void 0,className:"flex items-center text-foreground hover:".concat(e.hoverColor),children:[e.icon,e.label]})},t))})]})}),el=a(4086);let ei=[{href:"https://www.linkedin.com/in/annuar-ndungu/",icon:(0,r.jsx)(ee.Z,{className:"text-foreground hover:text-blue-300"})},{href:"https://github.com/ramo-dev",icon:(0,r.jsx)(et.Z,{className:"text-foreground hover:text-blue-300"})},{href:"mailto:hello@annuar.site",icon:(0,r.jsx)(el.Z,{className:"text-foreground hover:text-blue-300"})}];var eo=()=>(0,r.jsx)("div",{className:"fixed bottom-0 right-0 mb-4 mr-4 flex flex-col items-center gap-2 md:gap-4 md:mb-6 md:mr-6",children:ei.map((e,t)=>(0,r.jsx)("a",{href:e.href,className:"p-2 rounded-full bg-gray-200 dark:bg-gray-800",children:e.icon},t))});let ed=e=>{let{skillType:t}=e;return(0,r.jsx)(F,{children:t})},ec=[{skillType:"React"},{skillType:"NextJs"},{skillType:"TailwindCSS"},{skillType:"Nodejs"},{skillType:"Typescript"},{skillType:"Python"},{skillType:"AntDesign"},{skillType:"Bash"},{skillType:"Expressjs"},{skillType:"FastAPI"},{skillType:"Firebase"}];var em=()=>(0,r.jsxs)("div",{className:"mt-20 h-[10rem]",children:[(0,r.jsx)("h1",{className:"leading font-bold text-3xl my-5",children:"Skills"}),(0,r.jsx)("div",{className:"flex gap-4 flex-wrap my-3",children:ec.map((e,t)=>(0,r.jsx)(ed,{skillType:e.skillType},t))})]}),eh=a(3852),ex=a(2022),eu=a(7583),ef=a(8954);let ep=[{name:"Home",link:"/",icon:(0,r.jsx)(eh.Z,{className:"text-neutral-500 dark:text-white"})},{name:"About",link:"/about",icon:(0,r.jsx)(ex.Z,{className:"text-neutral-500 dark:text-white"})},{name:"Contact",link:"/contact",icon:(0,r.jsx)(eu.Z,{className:"text-neutral-500 dark:text-white"})},{name:"Ai",link:"/chat",icon:(0,r.jsx)(ef.Z,{className:"text-neutral-500 dark:text-white"})}];var eg=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(N,{navItems:ep}),(0,r.jsx)(g,{}),(0,r.jsxs)("div",{className:"h-full w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center flex-col",children:[(0,r.jsx)("div",{className:"absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"}),(0,r.jsxs)("div",{className:"md:max-w-2xl w-11/12 mx-auto antialiased pt-7 relative dark:text-white",children:[(0,r.jsx)(I,{}),(0,r.jsx)(em,{}),(0,r.jsx)($,{}),(0,r.jsx)(G,{}),(0,r.jsx)(eo,{}),(0,r.jsx)(en,{})]})]})]})}},function(e){e.O(0,[588,58,971,23,744],function(){return e(e.s=8310)}),_N_E=e.O()}]);