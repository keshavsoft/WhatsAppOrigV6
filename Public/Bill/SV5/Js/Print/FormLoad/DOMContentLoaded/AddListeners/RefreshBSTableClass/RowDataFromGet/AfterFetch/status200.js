import { StartFunc as StartFuncFromFetchAsGet } from "./FetchAsGet/entryFile.js";

let StartFunc = ({ inResponse }) => {
   StartFuncFromFetchAsGet();
   // debugger
   console.log("aaaaaaaaaa : ", inResponse.BuyerGST);
   jFLocalToInputBillNumberId(inResponse.pk);
   jFLocalToInputInvoiceDateId(inResponse.InvoiceDate);
   jFLocalToInputBuyerNameId(inResponse.BuyerName);
   jFLocalToInputBuyerAddressId(inResponse.BuyerAddress);
   jFLocalToInputBuyerGSTId(inResponse.BuyerGST);
   jFLocalToInputBuyerPhoneId(inResponse.BuyerMobile);

   Object.entries(inResponse).forEach(([key, value]) => {
      let inputElement = document.getElementById(`HtmlId-${key}`);
      if (inputElement !== null) {
         inputElement.value = value;
      }
   });
};

let jFLocalToInputBuyerPhoneId = (inValue) => {
   let jVarLocalHtmlId = 'BuyerPhoneId';
   let jVarLocalBuyerPhoneId = document.getElementById(jVarLocalHtmlId);

   if (jVarLocalBuyerPhoneId === null === false) {
      jVarLocalBuyerPhoneId.innerHTML = inValue;
   };
};

let jFLocalToInputBuyerAddressId = (inValue) => {
   let jVarLocalHtmlId = 'BuyerAddressId';
   let jVarLocalBuyerAddressId = document.getElementById(jVarLocalHtmlId);

   if (jVarLocalBuyerAddressId === null === false) {
      jVarLocalBuyerAddressId.innerHTML = inValue;
   };
};

let jFLocalToInputBuyerGSTId = (inValue) => {
   let jVarLocalHtmlId = 'BuyerGSTId';
   let jVarLocalBuyerGSTId = document.getElementById(jVarLocalHtmlId);

   if (jVarLocalBuyerGSTId === null === false) {
      jVarLocalBuyerGSTId.innerHTML = inValue;
   };
};

let jFLocalToInputBuyerNameId = (inValue) => {
   let jVarLocalHtmlId = 'BuyerNameId';
   let jVarLocalBuyerNameId = document.getElementById(jVarLocalHtmlId);

   if (jVarLocalBuyerNameId === null === false) {
      jVarLocalBuyerNameId.innerHTML = inValue;
   };
};

let jFLocalToInputInvoiceDateId = (inValue) => {
   let jVarLocalHtmlId = 'InvoiceDateId';
   let jVarLocalInvoiceDateId = document.getElementById(jVarLocalHtmlId);

   if (jVarLocalInvoiceDateId === null === false) {
      jVarLocalInvoiceDateId.innerHTML = inValue;
   };
};

let jFLocalToInputBillNumberId = (inValue) => {
   let jVarLocalHtmlId = 'BillNumberId';
   let jVarLocalBillNumberId = document.getElementById(jVarLocalHtmlId);

   if (jVarLocalBillNumberId === null === false) {
      jVarLocalBillNumberId.innerHTML = inValue;
   };
};

export { StartFunc };
