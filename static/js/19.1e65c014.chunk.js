"use strict";(self.webpackChunkcode_deck=self.webpackChunkcode_deck||[]).push([[19],{2019:function(e,l,n){n.r(l),n.d(l,{default:function(){return g}});var s=n(2791),r=n(6760),t=n(5263),a=n(184);var o=function(){var e=(0,s.useContext)(t.t).openModal;return(0,a.jsx)("div",{className:"border-2 w-[100%] border-[black] h-screen bg-[black] flex justify-end",children:(0,a.jsxs)("div",{className:"mx-auto w-[100%] flex flex-col items-center justify-center gap-3",children:[(0,a.jsx)("img",{src:n(51),alt:"Logo",width:"200px",height:"auto"}),(0,a.jsx)("h3",{className:"font-semibold text-white text-green-600",children:"Code Deck"}),(0,a.jsx)("h3",{className:"font-semibold text-white",children:"Code... Compile... Debug..."}),(0,a.jsx)("button",{className:" p-4 w-[60%] font-semibold bg-white shadow-lg rounded-lg drop-shadow-2xl",onClick:function(){console.log("button clicked"),e({show:!0,modalType:3,identifiers:{folderId:"",cardID:""}})},children:"+ Create New Playground"})]})})},d=n(9439),i=n(3728),c=n(7692),u=n(71);var x=function(e){var l=e.children;return(0,a.jsx)("div",{className:"hover:scale-105 bg-white h-auto drop-shadow-xl rounded-lg p-6 ease-in-out duration-500",children:l})},h=n(5350),m=n(7689);var f=function(){var e=(0,m.s0)(),l=(0,s.useContext)(t.t).openModal,r=(0,s.useContext)(h.xm),o=r.folders,f=r.deleteFolder,g=r.deleteCard;return(0,a.jsxs)("div",{className:"border-2 border-black h-screen p-8",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsxs)("h2",{children:["My ",(0,a.jsx)("span",{className:"font-semibold text-2xl",children:"Playground"})]}),(0,a.jsxs)("h4",{onClick:function(){return l({show:!0,modalType:1,identifiers:{folderId:"",cardID:""}})},children:[(0,a.jsx)("span",{className:"font-semibold text-2xl",children:"+"})," New Folder"]})]}),(0,a.jsx)("hr",{className:"mb-12 mt-4 bg-black"}),Object.entries(o).map((function(s,r){var t=(0,d.Z)(s,2),o=t[0],h=t[1];return(0,a.jsxs)("div",{className:"flex flex-col my-8",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("div",{className:"flex items-center"}),(0,a.jsx)(i.FYx,{size:"2em"}),(0,a.jsx)("h3",{className:"font-semibold",children:h.title})]}),(0,a.jsxs)("div",{className:"flex gap-4 items-center",children:[(0,a.jsx)(c.vpV,{size:"1.5em",onClick:function(){l({show:!0,modalType:4,identifiers:{folderId:o,cardID:""}})}}),(0,a.jsx)(u.BFV,{size:"1.5em",onClick:function(){return f(o)}}),(0,a.jsx)("h4",{onClick:function(){l({show:!0,modalType:2,identifiers:{folderId:o,cardID:""}})},children:"+ New Playground"})]})]}),(0,a.jsx)("hr",{className:"mb-12 mt-4 bg-black"}),(0,a.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4",children:Object.entries(h.playgrounds).map((function(s){var r=(0,d.Z)(s,2),t=r[0],i=r[1];return(0,a.jsx)(x,{children:(0,a.jsxs)("div",{className:"flex items-center justify-between",onClick:function(){e("/code/".concat(o,"/").concat(t))},children:[(0,a.jsxs)("div",{className:"flex gap-4",children:[(0,a.jsx)("img",{src:n(8982),alt:"small-logo",width:"30px"}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h4",{children:i.title}),(0,a.jsxs)("h4",{children:["language: ",i.language]})]})]}),(0,a.jsxs)("div",{className:"flex gap-4 items-center",children:[(0,a.jsx)(c.vpV,{size:"1.5em",onClick:function(){return l({show:!0,modalType:5,identifiers:{folderId:o,cardID:t}})}}),(0,a.jsx)(u.BFV,{size:"1.5em",onClick:function(){return g(o,t)}})]})]})},t)}))})]})}))]})};var g=function(){var e=(0,s.useContext)(t.t).isOpenModal;return(0,a.jsxs)("div",{className:"flex flex-row w-[100%]",children:[(0,a.jsx)("div",{className:"w-[30%]",children:(0,a.jsx)(o,{})}),(0,a.jsx)("div",{className:"w-[70%]",children:(0,a.jsx)(f,{})}),e.show&&(0,a.jsx)(r.Z,{})]})}},6760:function(e,l,n){n.d(l,{Z:function(){return g}});var s=n(2791),r=n(5263),t=n(9439),a=n(1213),o=n(5350),d=n(184);var i=function(){var e=(0,s.useContext)(r.t).closeModal,l=(0,s.useContext)(o.xm).addFolder,n=(0,s.useState)(""),i=(0,t.Z)(n,2),c=i[0],u=i[1];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:"flex flex-row justify-end p-4",children:(0,d.jsx)(a.ySC,{className:"cursor-pointer",onClick:function(){return e()}})}),(0,d.jsxs)("div",{className:"px-6 py-4 mb-8 flex flex-col items-center justify-center gap-6",children:[(0,d.jsx)("h2",{children:"Create a New Folder"}),(0,d.jsx)("input",{type:"text",onChange:function(e){return u(e.target.value)},value:c,placeholder:"please enter folder title",className:"border-[.5px] text-sm border-gray-50 rounded-lg shadow-sm p-2 w-full"}),(0,d.jsx)("button",{onClick:function(){l(c),e()},className:"p-3 w-36 text-black bg-white rounded-lg font-semibold border-[.5px] border-gray-50 shadow-lg",children:"Create Folder"})]})]})};var c=function(){return(0,d.jsx)("div",{children:"Loading"})};var u=function(){var e=(0,s.useContext)(r.t),l=e.closeModal,n=e.isOpenModal,i=(0,s.useContext)(o.xm),c=i.editFolderTitle,u=i.folders,x=n.identifiers.folderId,h=(0,s.useState)(u[x].title),m=(0,t.Z)(h,2),f=m[0],g=m[1];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:"flex flex-row justify-end p-4",children:(0,d.jsx)(a.ySC,{className:"cursor-pointer",onClick:function(){return l()}})}),(0,d.jsxs)("div",{className:"px-6 my-4 mb-8 flex flex-col items-center justify-center gap-6",children:[(0,d.jsx)("h2",{children:"Edit Folder"}),(0,d.jsx)("input",{type:"text",value:f,onChange:function(e){return g(e.target.value)},className:"border-[.5px] text-sm border-gray-50 rounded-lg shadow-sm p-2 w-full"}),(0,d.jsx)("button",{onClick:function(){c(x,f),l()},className:"p-3 w-36 text-black bg-white rounded-lg font-semibold border-[.5px] border-gray-50 shadow-lg",children:"Proceed"})]})]})};var x=function(){var e=(0,s.useContext)(r.t),l=e.closeModal,n=e.isOpenModal,i=(0,s.useContext)(o.xm),c=i.editCardTitle,u=i.folders,x=n.identifiers.cardID,h=n.identifiers.folderId,m=(0,s.useState)(u[h].playgrounds[x].title),f=(0,t.Z)(m,2),g=f[0],p=f[1];return console.log("cc",g),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:"flex flex-row justify-end p-4",children:(0,d.jsx)(a.ySC,{className:"cursor-pointer",onClick:function(){return l()}})}),(0,d.jsxs)("div",{className:"px-6 my-4 mb-8 flex flex-col items-center justify-center gap-6",children:[(0,d.jsx)("h2",{children:"Edit Folder"}),(0,d.jsx)("input",{type:"text",value:g,onChange:function(e){return p(e.target.value)},className:"border-[.5px] text-sm border-gray-50 rounded-lg shadow-sm p-2 w-full"}),(0,d.jsx)("button",{onClick:function(){c(h,x,g),l()},className:"p-3 w-36 text-black bg-white rounded-lg font-semibold border-[.5px] border-gray-50 shadow-lg",children:"Proceed"})]})]})},h=n(2769);var m=function(){var e=(0,s.useContext)(r.t),l=e.isOpenModal,n=e.closeModal,i=(0,s.useContext)(o.xm).addPlayground,c=[{value:"javascript",label:"javascript"},{value:"python",label:"python"},{value:"java",label:"java"},{value:"cpp",label:"cpp"}],u=l.identifiers.folderId,x=(0,s.useState)(""),m=(0,t.Z)(x,2),f=m[0],g=m[1],p=(0,s.useState)(c[0]),j=(0,t.Z)(p,2),b=j[0],v=j[1];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:"flex flex-row justify-end p-4",children:(0,d.jsx)(a.ySC,{className:"cursor-pointer",onClick:function(){return n()}})}),(0,d.jsxs)("div",{className:"px-6 my-4 mb-8 flex flex-col items-center justify-center gap-6",children:[(0,d.jsx)("h2",{children:"Create A New Playground"}),(0,d.jsx)("input",{type:"text",value:f,onChange:function(e){return g(e.target.value)},className:"border-[.5px] text-sm border-gray-50 rounded-lg shadow-sm p-2 w-full"}),(0,d.jsx)(h.ZP,{options:c,value:b,onChange:function(e){v(e)}}),(0,d.jsx)("button",{onClick:function(){i(u,f,b.value),n()},className:"p-3 w-36 text-black bg-white rounded-lg font-semibold border-[.5px] border-gray-50 shadow-lg",children:"Create Playground"})]})]})};var f=function(){var e=(0,s.useContext)(r.t).closeModal,l=(0,s.useContext)(o.xm).addPlaygroundAndFolder,n=[{value:"javascript",label:"javascript"},{value:"python",label:"python"},{value:"java",label:"java"},{value:"cpp",label:"cpp"}],i=(0,s.useState)(""),c=(0,t.Z)(i,2),u=c[0],x=c[1],m=(0,s.useState)(""),f=(0,t.Z)(m,2),g=f[0],p=f[1],j=(0,s.useState)(n[0]),b=(0,t.Z)(j,2),v=b[0],N=b[1];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:"flex flex-row justify-end p-4",children:(0,d.jsx)(a.ySC,{className:"cursor-pointer",onClick:function(){return e()}})}),(0,d.jsxs)("div",{className:"px-6 my-4 mb-8 flex flex-col items-center justify-center gap-6",children:[(0,d.jsx)("h2",{children:"Create A New Playground & New Folder"}),(0,d.jsx)("span",{children:"Folder Name"}),(0,d.jsx)("input",{type:"text",value:g,onChange:function(e){return p(e.target.value)},className:"border-[.5px] text-sm border-gray-50 rounded-lg shadow-sm p-2 w-full"}),(0,d.jsx)("span",{children:"Card Name"}),(0,d.jsx)("input",{type:"text",value:u,onChange:function(e){return x(e.target.value)},className:"border-[.5px] text-sm border-gray-50 rounded-lg shadow-sm p-2 w-full"}),(0,d.jsx)(h.ZP,{options:n,value:v,onChange:function(e){N(e)}}),(0,d.jsx)("button",{onClick:function(){l(g,u,v.value),e()},className:"p-3 w-36 text-black bg-white rounded-lg font-semibold border-[.5px] border-gray-50 shadow-lg",children:"Create Playground"})]})]})};var g=function(){var e=(0,s.useContext)(r.t).isOpenModal.modalType;return(0,d.jsx)("div",{className:"flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",children:(0,d.jsx)("div",{className:"relative w-auto my-6 mx-auto max-w-3xl",onClick:function(e){e.stopPropagation()},children:(0,d.jsxs)("div",{className:"border-0 rounded-lg shadow-lg relative flex flex-col w-[30rem] bg-white focus:outline-none",children:[1===e&&(0,d.jsx)(i,{}),2===e&&(0,d.jsx)(m,{}),3===e&&(0,d.jsx)(f,{}),4===e&&(0,d.jsx)(u,{}),5===e&&(0,d.jsx)(x,{}),6===e&&(0,d.jsx)(c,{})]})})})}},51:function(e,l,n){e.exports=n.p+"static/media/Visual_Studio_Code_1.35_icon.svg.e66400756ccbdbfc0b31.png"},8982:function(e){e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=19.1e65c014.chunk.js.map