(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6972],{3388:(e,l,a)=>{Promise.resolve().then(a.bind(a,2077))},2077:(e,l,a)=>{"use strict";a.d(l,{StepForm:()=>s});var n=a(5155),r=a(4035),t=a(5398),i=a(5494),o=a(3391),c=a(6724),u=a(287),d=a(7025);function s(){let{lead_id:e,incomePaymentFrequency:l}=(0,o.d4)(e=>{var l;let{leadData:a,leadResponse:n}=e.appData;return{lead_id:null==a?void 0:a.lead_id,incomePaymentFrequency:null!==(l=null==a?void 0:a.incomePaymentFrequency)&&void 0!==l?l:null==n?void 0:n.income_payment_frequency}},o.bN),{form:a,dispatch:s,nextStep:m,currentStep:_,loading:v}=(0,u.s)(t.pW,{incomePaymentFrequency:null!=l?l:""});async function y(l){s((0,c.AQ)({lead_id:e,step:_,...l})).unwrap().then(()=>m()).catch(()=>console.error("Failed to submit lead"))}return(0,n.jsx)(r.lV,{...a,children:(0,n.jsx)("form",{onSubmit:a.handleSubmit(y),className:"w-full flex flex-col gap-3",children:i.O2.map(e=>(0,n.jsx)(d.A,{label:e.label,value:e.value,active:l===e.value,onClick:()=>{a.setValue("incomePaymentFrequency",e.value)},loading:v&&a.watch("incomePaymentFrequency")===e.value},e.value))})})}},7025:(e,l,a)=>{"use strict";a.d(l,{A:()=>i});var n=a(5155),r=a(4085),t=a(9602);let i=e=>{let{label:l,value:a,active:i=!1,onClick:o,loading:c=!1,disabled:u=!1}=e;return(0,n.jsx)(r.$,{variant:"primary",loading:c,disabled:u,className:(0,t.cn)("text-md",i?"border-yellow bg-lightYellow [text-shadow:_0_2px_4px_rgb(99_102_241_/_0.8)]":"bg-white text-gray-700 border-gray-300 hover:border-yellow"),onClick:()=>o(a),children:l})}}},e=>{var l=l=>e(e.s=l);e.O(0,[3852,8181,9442,9341,9602,7995,8441,1517,7358],()=>l(3388)),_N_E=e.O()}]);