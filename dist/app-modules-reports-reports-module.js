(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-reports-reports-module"],{

/***/ "./src/app/modules/reports/adm-app-summary-report/adm-app-summary-report.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/reports/adm-app-summary-report/adm-app-summary-report.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-custom-card *ngIf=\"((resultApplicationReports) && !(resultApplicationReports?.admissionApplictionSummaryView?.length))\"\n  [inputMessage]=\"'No Record Found'\">\n</app-custom-card>\n\n<div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"px-32 py-12\" *ngIf=\"resultApplicationReports?.admissionApplictionSummaryView?.length > 0\">\n  <button mat-stroked-button class=\"mr-12\" (click)=\"generateReport('generatePdfReport')\">\n    <mat-icon class=\"mr-4\">save_alt</mat-icon>Download PDF\n  </button>\n  <button mat-stroked-button (click)=\"generateReport('generateExcelReport')\">\n    <mat-icon class=\"mr-4\">save_alt</mat-icon> Download EXCEL\n  </button>\n</div>\n<div class='invoice-container' id=\"adm-app-summary\" *ngIf=\"resultApplicationReports?.admissionApplictionSummaryView?.length > 0\" style=\"padding: 25px; padding-top: 0px;\">\n  <span class=\"dark-theme-color\" style=\"color:#fff\">A</span>\n  <div class='b flex-d-c invoice-body' style='overflow: hidden; '>\n    <h3 class=\"text-center text-uppercase\">Admission Applications Summary Report</h3>\n    <div class=\"p-10 mb-20 main-title\">\n      <div class=\"left-align\">Report Generated On : {{ date }}</div>\n      <div class=\"right-align flex\" *ngIf=\"acadmicSession\">\n        {{acadmicSession?.name}} ({{acadmicSession?.startDate | date: 'MMM d, y'}} - {{acadmicSession?.endDate | date: 'MMM d, y'}})\n      </div>\n    </div>\n    <div style=\"font-size: 18px;\" class=\"px-20 pt-20\">Admission Applications Summary Details</div>\n    <div *ngIf=\"resultApplicationReports\">\n      <app-af-report-table [inputData]=\"resultApplicationReports?.admissionApplictionSummaryView\" [tableId]=\"'adm-report'\" [columns]=\"columns\"></app-af-report-table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/reports/adm-app-summary-report/adm-app-summary-report.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/reports/adm-app-summary-report/adm-app-summary-report.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invoice-container {\n  padding: 0px 25px;\n  margin: 0px auto; }\n\n.b {\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.b-b {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.b-t {\n  border-top: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.b-r {\n  border-right: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.flex {\n  display: -webkit-box;\n  display: flex;\n  display: -webkit-flex; }\n\n.flex-d-c {\n  flex-direction: -webkit-column;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n\n.flex-d-r {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row; }\n\n.flex-a {\n  -webkit-place-content: center center;\n  place-content: center center;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.align-item-center {\n  -webkit-box-align: center;\n          align-items: center; }\n\n.w-50-p {\n  width: 50%; }\n\n.w-100-p {\n  width: 100%; }\n\n.p-20 {\n  padding: 20px; }\n\n.py-4 {\n  padding: 4px 0px; }\n\n.px-20 {\n  padding: 0px 20px; }\n\n.pt-30 {\n  padding-top: 30px; }\n\n.pt-20 {\n  padding-top: 20px; }\n\n.text-left {\n  text-align: left; }\n\n.text-right {\n  text-align: right; }\n\n.text-center {\n  text-align: center; }\n\n.text-uppercase {\n  text-transform: uppercase; }\n\n.result-h {\n  font-size: 20px;\n  padding: 20px;\n  margin: 2px; }\n\n.result-h span {\n  width: 80px;\n  display: inline-block; }\n\n.h2-c {\n  font-size: 20px; }\n\n.pr-8 {\n  padding-right: 8px; }\n\n.pb-20 {\n  padding-bottom: 20px; }\n\n.mb-20 {\n  margin-bottom: 20px; }\n\n.p-10 {\n  padding: 10px; }\n\n.pr-4rem {\n  padding-right: 4rem; }\n\n.right-align {\n  float: right; }\n\n.left-align {\n  float: left; }\n\n.logo-img {\n  max-width: 200px;\n  max-height: 100px; }\n\n.text-lg {\n  font-size: 25px; }\n\n.school-stamp {\n  width: 130px;\n  min-width: 130px;\n  max-width: 130px;\n  height: 130px;\n  border: 1px solid;\n  border-radius: 100%;\n  position: relative; }\n\n.school-stamp::after {\n  position: absolute;\n  top: 36%;\n  left: 0;\n  width: 100%;\n  content: \"School seal Logo\"; }\n\n.top-space {\n  padding-top: 1.4rem; }\n\n.order-list .list {\n  /* display:flex; \n        display: -webkit-flex; */\n  padding-right: 20px;\n  padding-bottom: 25px;\n  font-size: 18px;\n  list-style-type: decimal;\n  display: inline-block; }\n\n.order-list .list .text {\n  white-space: pre;\n  overflow: hidden; }\n\n.order-list .list .title {\n  white-space: nowrap;\n  margin-right: 20px;\n  display: inline-block; }\n\n.single-line {\n  width: 1050px;\n  white-space: nowrap;\n  overflow: hidden;\n  padding-top: 15px; }\n\n.order-list .list .in-words {\n  padding-right: 5px; }\n\n.main-title {\n  background: #5f5f5f;\n  display: list-item;\n  color: #fff; }\n\n.attendance {\n  width: 100%;\n  border-spacing: 0;\n  border-collapse: collapse; }\n\n.attendance thead {\n  background: #5f5f5f;\n  color: #fff; }\n\n.attendance tr th,\n.attendance tr td {\n  padding: 15px 0px;\n  text-align: center; }\n\n.attendance2 {\n  width: 100%;\n  border-spacing: 0;\n  border-collapse: collapse; }\n\n.attendance2 thead {\n  background: #5f5f5f;\n  color: #fff; }\n\n.attendance2 tr th {\n  padding: 15px 0px;\n  text-align: center; }\n\n.attendance2 tr td {\n  padding: 5px 0px; }\n\n.attendance2 tr td:first-child {\n  padding-left: 10px; }\n\n.attendance2 tr td:not(:first-child) {\n  text-align: center; }\n\n.attendance2 tr:nth-child(3n) {\n  border-bottom: 1px solid; }\n\n.outer-line {\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  margin: 5px 30px; }\n\n.outer-line .helper-table:first-child {\n  margin-top: 0px;\n  border-top: none; }\n\n.helper-table {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n  margin-bottom: 0px;\n  margin-top: 20px;\n  padding: 9px;\n  width: 100%;\n  border-top: 1px solid rgba(0, 0, 0, 0.3); }\n\n.total-table {\n  width: 100%;\n  border-top: 1px solid rgba(0, 0, 0, 0.3);\n  padding: 13px;\n  margin-top: 20px; }\n\n.total-table th:first-child {\n  text-align: left;\n  padding-left: 20px;\n  max-width: 55px; }\n\n.total-table th:last-child {\n  text-align: right;\n  padding-right: 20px; }\n\n.marks {\n  width: 100%;\n  border-spacing: 0; }\n\n.marks thead tr th {\n  padding: 10px 10px;\n  background: #dedede; }\n\n.marks tbody tr td {\n  padding: 8px 10px; }\n\n.marks.border-tr th,\n.marks.border-tr td {\n  border-right: 1px solid rgba(0, 0, 0, 0.3);\n  text-align: center;\n  font-size: 18px;\n  word-break: break-word;\n  /* text-transform: uppercase */ }\n\n.marks.border-tr td .content {\n  width: 12px;\n  margin: auto;\n  overflow: visible; }\n\n.m-w-200 {\n  /* width: 200px;\n        max-width: 200px; */\n  min-width: 200px; }\n\n.marks.border-tr th:last-child,\n.marks.border-tr td:last-child {\n  border-right: none; }\n\n.header-title2 {\n  background-color: #dedede;\n  padding: 8px;\n  font-size: 18px;\n  font-weight: bold; }\n\n.terms {\n  padding: 20px 55px 5px; }\n\n.tem-table {\n  padding: 0px 13%; }\n\n.fee-recipt tr th, .fee-recipt tr td {\n  max-width: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvcmVwb3J0cy9jb21tb24tcmVwb3J0cy5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3JlcG9ydHMvYWRtLWFwcC1zdW1tYXJ5LXJlcG9ydC9hZG0tYXBwLXN1bW1hcnktcmVwb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUlwQjtFQUNJLG9DQUFvQztFQUNwQyx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSwyQ0FBMkM7RUFDM0MseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksd0NBQXdDO0VBQ3hDLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLDBDQUEwQztFQUMxQyx5QkFDSixFQUFBOztBQUVBO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksOEJBQThCO0VBQzlCLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksOEJBQW1CO0VBQW5CLDZCQUFtQjtVQUFuQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxvQ0FBb0M7RUFDcEMsNEJBQTRCO0VBRTVCLHlCQUFtQjtVQUFuQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSx5QkFBbUI7VUFBbkIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksVUFBVSxFQUFBOztBQUdkO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJ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Z0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3JlcG9ydHMvYWRtLWFwcC1zdW1tYXJ5LXJlcG9ydC9hZG0tYXBwLXN1bW1hcnktcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmludm9pY2UtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwcHggMjVweDtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgXG59XG5cbi5iIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zMCk7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxuLmItYiB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMwKTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG4uYi10IHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzApO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbi5iLXIge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMwKTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlXG59XG5cbi5mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbn1cblxuLmZsZXgtZC1jIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogLXdlYmtpdC1jb2x1bW47XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmZsZXgtZC1yIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uZmxleC1hIHtcbiAgICAtd2Via2l0LXBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFsaWduLWl0ZW0tY2VudGVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udy01MC1wIHtcbiAgICB3aWR0aDogNTAlO1xufVxuXG4udy0xMDAtcCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5wLTIwIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG4ucHktNCB7XG4gICAgcGFkZGluZzogNHB4IDBweDtcbn1cblxuLnB4LTIwIHtcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcbn1cblxuLnB0LTMwIHtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbn1cbi5wdC0yMHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLnRleHQtbGVmdCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnRleHQtcmlnaHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4udGV4dC1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRleHQtdXBwZXJjYXNlIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ucmVzdWx0LWgge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG1hcmdpbjogMnB4O1xufVxuXG4ucmVzdWx0LWggc3BhbiB7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uaDItYyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ucHItOCB7XG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xuICAgIDtcbn1cblxuLnBiLTIwIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICA7XG59XG5cbi5tYi0yMCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnAtMTAge1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5wci00cmVtIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cmVtO1xufVxuXG4ucmlnaHQtYWxpZ24ge1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuLmxlZnQtYWxpZ24ge1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4ubG9nby1pbWcge1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgbWF4LWhlaWdodDogMTAwcHhcbn1cblxuLnRleHQtbGcge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLnNjaG9vbC1zdGFtcCB7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIG1pbi13aWR0aDogMTMwcHg7XG4gICAgbWF4LXdpZHRoOiAxMzBweDtcbiAgICBoZWlnaHQ6IDEzMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2Nob29sLXN0YW1wOjphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzYlO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29udGVudDogXCJTY2hvb2wgc2VhbCBMb2dvXCI7XG59XG5cbi50b3Atc3BhY2Uge1xuICAgIHBhZGRpbmctdG9wOiAxLjRyZW07XG59XG5cbi5vcmRlci1saXN0IC5saXN0IHtcbiAgICAvKiBkaXNwbGF5OmZsZXg7IFxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7ICovXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBkZWNpbWFsO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLm9yZGVyLWxpc3QgLmxpc3QgLnRleHQge1xuICAgIHdoaXRlLXNwYWNlOiBwcmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlblxufVxuXG4ub3JkZXItbGlzdCAubGlzdCAudGl0bGUge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrXG59XG5cbi5zaW5nbGUtbGluZSB7XG4gICAgd2lkdGg6IDEwNTBweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZy10b3A6IDE1cHhcbn1cblxuLm9yZGVyLWxpc3QgLmxpc3QgLmluLXdvcmRzIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5tYWluLXRpdGxlIHtcbiAgICBiYWNrZ3JvdW5kOiAjNWY1ZjVmO1xuICAgIGRpc3BsYXk6IGxpc3QtaXRlbTtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLmF0dGVuZGFuY2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2Vcbn1cblxuLmF0dGVuZGFuY2UgdGhlYWQge1xuICAgIGJhY2tncm91bmQ6ICM1ZjVmNWY7XG4gICAgY29sb3I6ICNmZmY7XG59XG4uYXR0ZW5kYW5jZSB0ciB0aCxcbi5hdHRlbmRhbmNlIHRyIHRkIHtcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYXR0ZW5kYW5jZTIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2Vcbn1cblxuLmF0dGVuZGFuY2UyIHRoZWFkIHtcbiAgICBiYWNrZ3JvdW5kOiAjNWY1ZjVmO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuLmF0dGVuZGFuY2UyIHRyIHRoe1xuICAgIHBhZGRpbmc6IDE1cHggMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hdHRlbmRhbmNlMiB0ciB0ZCB7XG4gICAgcGFkZGluZzogNXB4IDBweDsgICAgICAgICBcbn1cbi5hdHRlbmRhbmNlMiB0ciB0ZDpmaXJzdC1jaGlsZCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4OyAgICAgIFxufVxuLmF0dGVuZGFuY2UyIHRyIHRkOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYXR0ZW5kYW5jZTIgdHI6bnRoLWNoaWxkKDNuKSB7IFxuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkO1xuICAgfVxuXG4gICAub3V0ZXItbGluZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzApO1xuICAgIG1hcmdpbjogNXB4IDMwcHg7XG59XG4ub3V0ZXItbGluZSAuaGVscGVyLXRhYmxlOmZpcnN0LWNoaWxke1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBib3JkZXItdG9wOiBub25lO1xufVxuXG4uaGVscGVyLXRhYmxlIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzApO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHBhZGRpbmc6IDlweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzApO1xufVxuXG4udG90YWwtdGFibGV7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMwKTsgXG4gICAgcGFkZGluZzogMTNweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4OyAgXG59XG4udG90YWwtdGFibGUgdGg6Zmlyc3QtY2hpbGR7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgbWF4LXdpZHRoOiA1NXB4O1xufVxuLnRvdGFsLXRhYmxlIHRoOmxhc3QtY2hpbGR7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cbiAubWFya3Mge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gICAgfVxuICAgIFxuICAgIC5tYXJrcyB0aGVhZCB0ciB0aCB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICAgICAgO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZGVkZWRlO1xuICAgIH1cbiAgICBcbiAgICAubWFya3MgdGJvZHkgdHIgdGQge1xuICAgICAgICBwYWRkaW5nOiA4cHggMTBweFxuICAgIH1cbiAgICBcbiAgICAubWFya3MuYm9yZGVyLXRyIHRoLFxuICAgIC5tYXJrcy5ib3JkZXItdHIgdGQge1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zMCk7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgICAgICAvKiB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICovXG4gICAgfVxuICAgIFxuICAgIC5tYXJrcy5ib3JkZXItdHIgdGQgLmNvbnRlbnQge1xuICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZVxuICAgIH1cbiAgICBcbiAgICAubS13LTIwMCB7XG4gICAgICAgIC8qIHdpZHRoOiAyMDBweDtcbiAgICAgICAgbWF4LXdpZHRoOiAyMDBweDsgKi9cbiAgICAgICAgbWluLXdpZHRoOiAyMDBweFxuICAgIH0gXG4gICAgXG4gICAgLm1hcmtzLmJvcmRlci10ciB0aDpsYXN0LWNoaWxkLFxuICAgIC5tYXJrcy5ib3JkZXItdHIgdGQ6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZVxuICAgIH1cbiAgICAuaGVhZGVyLXRpdGxlMiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RlZGVkZTtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkXG59XG4udGVybXN7XG4gICAgcGFkZGluZzogMjBweCA1NXB4IDVweDtcbn1cbiAgICAudGVtLXRhYmxle1xuICAgICAgICBwYWRkaW5nOiAwcHggMTMlO1xuICAgIH1cblxuICAgIC5mZWUtcmVjaXB0IHRyIHRoLCAuZmVlLXJlY2lwdCB0ciB0ZHtcbiAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICB9IiwiLmludm9pY2UtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMHB4IDI1cHg7XG4gIG1hcmdpbjogMHB4IGF1dG87IH1cblxuLmIge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IH1cblxuLmItYiB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IH1cblxuLmItdCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IH1cblxuLmItciB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgfVxuXG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDsgfVxuXG4uZmxleC1kLWMge1xuICBmbGV4LWRpcmVjdGlvbjogLXdlYmtpdC1jb2x1bW47XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cblxuLmZsZXgtZC1yIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdzsgfVxuXG4uZmxleC1hIHtcbiAgLXdlYmtpdC1wbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cblxuLmFsaWduLWl0ZW0tY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuXG4udy01MC1wIHtcbiAgd2lkdGg6IDUwJTsgfVxuXG4udy0xMDAtcCB7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi5wLTIwIHtcbiAgcGFkZGluZzogMjBweDsgfVxuXG4ucHktNCB7XG4gIHBhZGRpbmc6IDRweCAwcHg7IH1cblxuLnB4LTIwIHtcbiAgcGFkZGluZzogMHB4IDIwcHg7IH1cblxuLnB0LTMwIHtcbiAgcGFkZGluZy10b3A6IDMwcHg7IH1cblxuLnB0LTIwIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7IH1cblxuLnRleHQtbGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cblxuLnRleHQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDsgfVxuXG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLnRleHQtdXBwZXJjYXNlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuXG4ucmVzdWx0LWgge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogMnB4OyB9XG5cbi5yZXN1bHQtaCBzcGFuIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuXG4uaDItYyB7XG4gIGZvbnQtc2l6ZTogMjBweDsgfVxuXG4ucHItOCB7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDsgfVxuXG4ucGItMjAge1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDsgfVxuXG4ubWItMjAge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XG5cbi5wLTEwIHtcbiAgcGFkZGluZzogMTBweDsgfVxuXG4ucHItNHJlbSB7XG4gIHBhZGRpbmctcmlnaHQ6IDRyZW07IH1cblxuLnJpZ2h0LWFsaWduIHtcbiAgZmxvYXQ6IHJpZ2h0OyB9XG5cbi5sZWZ0LWFsaWduIHtcbiAgZmxvYXQ6IGxlZnQ7IH1cblxuLmxvZ28taW1nIHtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgbWF4LWhlaWdodDogMTAwcHg7IH1cblxuLnRleHQtbGcge1xuICBmb250LXNpemU6IDI1cHg7IH1cblxuLnNjaG9vbC1zdGFtcCB7XG4gIHdpZHRoOiAxMzBweDtcbiAgbWluLXdpZHRoOiAxMzBweDtcbiAgbWF4LXdpZHRoOiAxMzBweDtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuXG4uc2Nob29sLXN0YW1wOjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNiU7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBjb250ZW50OiBcIlNjaG9vbCBzZWFsIExvZ29cIjsgfVxuXG4udG9wLXNwYWNlIHtcbiAgcGFkZGluZy10b3A6IDEuNHJlbTsgfVxuXG4ub3JkZXItbGlzdCAubGlzdCB7XG4gIC8qIGRpc3BsYXk6ZmxleDsgXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDsgKi9cbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGlzdC1zdHlsZS10eXBlOiBkZWNpbWFsO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cblxuLm9yZGVyLWxpc3QgLmxpc3QgLnRleHQge1xuICB3aGl0ZS1zcGFjZTogcHJlO1xuICBvdmVyZmxvdzogaGlkZGVuOyB9XG5cbi5vcmRlci1saXN0IC5saXN0IC50aXRsZSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG5cbi5zaW5nbGUtbGluZSB7XG4gIHdpZHRoOiAxMDUwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmctdG9wOiAxNXB4OyB9XG5cbi5vcmRlci1saXN0IC5saXN0IC5pbi13b3JkcyB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDsgfVxuXG4ubWFpbi10aXRsZSB7XG4gIGJhY2tncm91bmQ6ICM1ZjVmNWY7XG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcbiAgY29sb3I6ICNmZmY7IH1cblxuLmF0dGVuZGFuY2Uge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IH1cblxuLmF0dGVuZGFuY2UgdGhlYWQge1xuICBiYWNrZ3JvdW5kOiAjNWY1ZjVmO1xuICBjb2xvcjogI2ZmZjsgfVxuXG4uYXR0ZW5kYW5jZSB0ciB0aCxcbi5hdHRlbmRhbmNlIHRyIHRkIHtcbiAgcGFkZGluZzogMTVweCAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4uYXR0ZW5kYW5jZTIge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IH1cblxuLmF0dGVuZGFuY2UyIHRoZWFkIHtcbiAgYmFja2dyb3VuZDogIzVmNWY1ZjtcbiAgY29sb3I6ICNmZmY7IH1cblxuLmF0dGVuZGFuY2UyIHRyIHRoIHtcbiAgcGFkZGluZzogMTVweCAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4uYXR0ZW5kYW5jZTIgdHIgdGQge1xuICBwYWRkaW5nOiA1cHggMHB4OyB9XG5cbi5hdHRlbmRhbmNlMiB0ciB0ZDpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctbGVmdDogMTBweDsgfVxuXG4uYXR0ZW5kYW5jZTIgdHIgdGQ6bm90KDpmaXJzdC1jaGlsZCkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLmF0dGVuZGFuY2UyIHRyOm50aC1jaGlsZCgzbikge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7IH1cblxuLm91dGVyLWxpbmUge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIG1hcmdpbjogNXB4IDMwcHg7IH1cblxuLm91dGVyLWxpbmUgLmhlbHBlci10YWJsZTpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgYm9yZGVyLXRvcDogbm9uZTsgfVxuXG4uaGVscGVyLXRhYmxlIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwYWRkaW5nOiA5cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpOyB9XG5cbi50b3RhbC10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBwYWRkaW5nOiAxM3B4O1xuICBtYXJnaW4tdG9wOiAyMHB4OyB9XG5cbi50b3RhbC10YWJsZSB0aDpmaXJzdC1jaGlsZCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgbWF4LXdpZHRoOiA1NXB4OyB9XG5cbi50b3RhbC10YWJsZSB0aDpsYXN0LWNoaWxkIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7IH1cblxuLm1hcmtzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1zcGFjaW5nOiAwOyB9XG5cbi5tYXJrcyB0aGVhZCB0ciB0aCB7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgYmFja2dyb3VuZDogI2RlZGVkZTsgfVxuXG4ubWFya3MgdGJvZHkgdHIgdGQge1xuICBwYWRkaW5nOiA4cHggMTBweDsgfVxuXG4ubWFya3MuYm9yZGVyLXRyIHRoLFxuLm1hcmtzLmJvcmRlci10ciB0ZCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIC8qIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgKi8gfVxuXG4ubWFya3MuYm9yZGVyLXRyIHRkIC5jb250ZW50IHtcbiAgd2lkdGg6IDEycHg7XG4gIG1hcmdpbjogYXV0bztcbiAgb3ZlcmZsb3c6IHZpc2libGU7IH1cblxuLm0tdy0yMDAge1xuICAvKiB3aWR0aDogMjAwcHg7XG4gICAgICAgIG1heC13aWR0aDogMjAwcHg7ICovXG4gIG1pbi13aWR0aDogMjAwcHg7IH1cblxuLm1hcmtzLmJvcmRlci10ciB0aDpsYXN0LWNoaWxkLFxuLm1hcmtzLmJvcmRlci10ciB0ZDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXJpZ2h0OiBub25lOyB9XG5cbi5oZWFkZXItdGl0bGUyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZGVkZTtcbiAgcGFkZGluZzogOHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XG5cbi50ZXJtcyB7XG4gIHBhZGRpbmc6IDIwcHggNTVweCA1cHg7IH1cblxuLnRlbS10YWJsZSB7XG4gIHBhZGRpbmc6IDBweCAxMyU7IH1cblxuLmZlZS1yZWNpcHQgdHIgdGgsIC5mZWUtcmVjaXB0IHRyIHRkIHtcbiAgbWF4LXdpZHRoOiAyMDBweDsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/reports/adm-app-summary-report/adm-app-summary-report.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/reports/adm-app-summary-report/adm-app-summary-report.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AdmAppSummaryReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmAppSummaryReportComponent", function() { return AdmAppSummaryReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_service_reports_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/service/reports/reports.service */ "./src/app/service/reports/reports.service.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");





var AdmAppSummaryReportComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AdmAppSummaryReportComponent, _super);
    function AdmAppSummaryReportComponent(schoolReportsService) {
        var _this = _super.call(this) || this;
        _this.schoolReportsService = schoolReportsService;
        _this.columns = [];
        return _this;
    }
    AdmAppSummaryReportComponent.prototype.ngOnInit = function () {
        this.setColumns();
        this.getAdmAppSummaryReport();
    };
    AdmAppSummaryReportComponent.prototype.setColumns = function () {
        this.columns = [
            { field: 'class', header: 'Class', sort: false, dataKey: 'class' },
            { field: 'totalApplicants', header: 'Total Applications', sort: false, dataKey: 'totalApplicants' },
            { field: 'approved', header: 'Approved Applications', sort: false, dataKey: 'approved' },
            { field: 'rejected', header: 'Pending Applications', sort: false, dataKey: 'rejected' },
            { field: 'pending', header: 'Rejected Applications', sort: false, dataKey: 'pending' },
            { field: 'feeCollected', header: 'Fee Collected', sort: false, dataKey: 'feeCollected' }
        ];
    };
    AdmAppSummaryReportComponent.prototype.getAdmAppSummaryReport = function () {
        var _this = this;
        this.schoolReportsService.studentsApplicationSummary().subscribe(function (res) {
            _this.resultApplicationReports = res;
        });
    };
    AdmAppSummaryReportComponent.prototype.generateReport = function (rp) {
        if (rp === 'generatePdfReport') {
            this.schoolReportsService.generatePdf(document.getElementById('adm-app-summary'), app_app_constants__WEBPACK_IMPORTED_MODULE_4__["Messages"].COMMON_TABLE_CSS);
        }
        if (rp === 'generateExcelReport') {
            this.schoolReportsService.exportToExcel('adm-report', 'adm_sum_report');
        }
    };
    AdmAppSummaryReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adm-app-summary-report',
            template: __webpack_require__(/*! ./adm-app-summary-report.component.html */ "./src/app/modules/reports/adm-app-summary-report/adm-app-summary-report.component.html"),
            styles: [__webpack_require__(/*! ./adm-app-summary-report.component.scss */ "./src/app/modules/reports/adm-app-summary-report/adm-app-summary-report.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_reports_reports_service__WEBPACK_IMPORTED_MODULE_2__["SchoolReportsService"]])
    ], AdmAppSummaryReportComponent);
    return AdmAppSummaryReportComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/reports/adm-std-report/adm-std-report.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/modules/reports/adm-std-report/adm-std-report.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayout.gt-sm=\"row wrap\" fxLayoutAlign=\"center center\" class=\"px-24 pt-20 pb-12\">\n  <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"32\" class=\"pr-sm-12\">\n    <mat-label translate #class>Class</mat-label>\n    <mat-select [formControl]=\"classId\">\n      <mat-option *ngFor=\"let class of availableClasses\" [value]=\"class.value\">\n        {{ class.label }}</mat-option>\n    </mat-select>\n  </mat-form-field>\n  <button mat-raised-button translate color=\"primary\" class=\"text-uppercase ml-12 mb-20\" (click)=\"reset()\" type=\"reset\">\n    Reset\n  </button>\n  <button mat-raised-button translate color=\"accent\" class=\"text-uppercase ml-12 mb-20\"\n    (click)=\"getAdmittedStudentSummary()\">\n    {{'Search' | translate}}\n  </button>\n</div>\n\n<app-custom-card *ngIf=\"((resultApplicationReports) && !(resultApplicationReports?.students?.length))\"\n  [inputMessage]=\"'No Record Found'\">\n</app-custom-card>\n<div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"px-32 py-12\" *ngIf=\"resultApplicationReports && (resultApplicationReports?.students?.length)\">\n  <button mat-stroked-button class=\"mr-12\" (click)=\"generateReport('generatePdfReport')\">\n    <mat-icon class=\"mr-4\">save_alt</mat-icon>Download PDF\n  </button>\n  <button mat-stroked-button (click)=\"generateReport('generateExcelReport')\">\n    <mat-icon class=\"mr-4\">save_alt</mat-icon> Download EXCEL\n  </button>\n</div>\n<div class='invoice-container' id=\"admitted-std\" *ngIf=\"resultApplicationReports && (resultApplicationReports?.students?.length)\" style=\"padding: 25px; padding-top: 0px;\">\n  <span class=\"dark-theme-color\" style=\"color:#fff\">A</span>\n  <div class='b flex-d-c invoice-body' style='overflow: hidden; '>\n    <h3 class=\"text-center text-uppercase\">Admitted student Applicatons Report</h3>\n    <div class=\"p-10 mb-20 main-title\">\n      <div class=\"left-align\">Report Generated On : {{ date }}</div>\n      <div class=\"right-align flex\" *ngIf=\"acadmicSession\">\n        {{acadmicSession?.name}} ({{acadmicSession?.startDate | date: 'MMM d, y'}} -\n        {{acadmicSession?.endDate | date: 'MMM d, y'}})\n      </div>\n    </div>\n    <div style=\"font-size: 18px;\" class=\"px-20 pt-20\">Admitted Students</div>\n    <div *ngIf=\"resultApplicationReports\">\n      <app-af-report-table [inputData]=\"resultApplicationReports?.students\" [tableId]=\"'adm-report'\"\n        [columns]=\"columns\"></app-af-report-table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/reports/adm-std-report/adm-std-report.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/modules/reports/adm-std-report/adm-std-report.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invoice-container {\n  padding: 0px 25px;\n  margin: 0px auto; }\n\n.b {\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.b-b {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.b-t {\n  border-top: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.b-r {\n  border-right: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.flex {\n  display: -webkit-box;\n  display: flex;\n  display: -webkit-flex; }\n\n.flex-d-c {\n  flex-direction: -webkit-column;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n\n.flex-d-r {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row; }\n\n.flex-a {\n  -webkit-place-content: center center;\n  place-content: center center;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.align-item-center {\n  -webkit-box-align: center;\n          align-items: center; }\n\n.w-50-p {\n  width: 50%; }\n\n.w-100-p {\n  width: 100%; }\n\n.p-20 {\n  padding: 20px; }\n\n.py-4 {\n  padding: 4px 0px; }\n\n.px-20 {\n  padding: 0px 20px; }\n\n.pt-30 {\n  padding-top: 30px; }\n\n.pt-20 {\n  padding-top: 20px; }\n\n.text-left {\n  text-align: left; }\n\n.text-right {\n  text-align: right; }\n\n.text-center {\n  text-align: center; }\n\n.text-uppercase {\n  text-transform: uppercase; }\n\n.result-h {\n  font-size: 20px;\n  padding: 20px;\n  margin: 2px; }\n\n.result-h span {\n  width: 80px;\n  display: inline-block; }\n\n.h2-c {\n  font-size: 20px; }\n\n.pr-8 {\n  padding-right: 8px; }\n\n.pb-20 {\n  padding-bottom: 20px; }\n\n.mb-20 {\n  margin-bottom: 20px; }\n\n.p-10 {\n  padding: 10px; }\n\n.pr-4rem {\n  padding-right: 4rem; }\n\n.right-align {\n  float: right; }\n\n.left-align {\n  float: left; }\n\n.logo-img {\n  max-width: 200px;\n  max-height: 100px; }\n\n.text-lg {\n  font-size: 25px; }\n\n.school-stamp {\n  width: 130px;\n  min-width: 130px;\n  max-width: 130px;\n  height: 130px;\n  border: 1px solid;\n  border-radius: 100%;\n  position: relative; }\n\n.school-stamp::after {\n  position: absolute;\n  top: 36%;\n  left: 0;\n  width: 100%;\n  content: \"School seal Logo\"; }\n\n.top-space {\n  padding-top: 1.4rem; }\n\n.order-list .list {\n  /* display:flex; \n        display: -webkit-flex; */\n  padding-right: 20px;\n  padding-bottom: 25px;\n  font-size: 18px;\n  list-style-type: decimal;\n  display: inline-block; }\n\n.order-list .list .text {\n  white-space: pre;\n  overflow: hidden; }\n\n.order-list .list .title {\n  white-space: nowrap;\n  margin-right: 20px;\n  display: inline-block; }\n\n.single-line {\n  width: 1050px;\n  white-space: nowrap;\n  overflow: hidden;\n  padding-top: 15px; }\n\n.order-list .list .in-words {\n  padding-right: 5px; }\n\n.main-title {\n  background: #5f5f5f;\n  display: list-item;\n  color: #fff; }\n\n.attendance {\n  width: 100%;\n  border-spacing: 0;\n  border-collapse: collapse; }\n\n.attendance thead {\n  background: #5f5f5f;\n  color: #fff; }\n\n.attendance tr th,\n.attendance tr td {\n  padding: 15px 0px;\n  text-align: center; }\n\n.attendance2 {\n  width: 100%;\n  border-spacing: 0;\n  border-collapse: collapse; }\n\n.attendance2 thead {\n  background: #5f5f5f;\n  color: #fff; }\n\n.attendance2 tr th {\n  padding: 15px 0px;\n  text-align: center; }\n\n.attendance2 tr td {\n  padding: 5px 0px; }\n\n.attendance2 tr td:first-child {\n  padding-left: 10px; }\n\n.attendance2 tr td:not(:first-child) {\n  text-align: center; }\n\n.attendance2 tr:nth-child(3n) {\n  border-bottom: 1px solid; }\n\n.outer-line {\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  margin: 5px 30px; }\n\n.outer-line .helper-table:first-child {\n  margin-top: 0px;\n  border-top: none; }\n\n.helper-table {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n  margin-bottom: 0px;\n  margin-top: 20px;\n  padding: 9px;\n  width: 100%;\n  border-top: 1px solid rgba(0, 0, 0, 0.3); }\n\n.total-table {\n  width: 100%;\n  border-top: 1px solid rgba(0, 0, 0, 0.3);\n  padding: 13px;\n  margin-top: 20px; }\n\n.total-table th:first-child {\n  text-align: left;\n  padding-left: 20px;\n  max-width: 55px; }\n\n.total-table th:last-child {\n  text-align: right;\n  padding-right: 20px; }\n\n.marks {\n  width: 100%;\n  border-spacing: 0; }\n\n.marks thead tr th {\n  padding: 10px 10px;\n  background: #dedede; }\n\n.marks tbody tr td {\n  padding: 8px 10px; }\n\n.marks.border-tr th,\n.marks.border-tr td {\n  border-right: 1px solid rgba(0, 0, 0, 0.3);\n  text-align: center;\n  font-size: 18px;\n  word-break: break-word;\n  /* text-transform: uppercase */ }\n\n.marks.border-tr td .content {\n  width: 12px;\n  margin: auto;\n  overflow: visible; }\n\n.m-w-200 {\n  /* width: 200px;\n        max-width: 200px; */\n  min-width: 200px; }\n\n.marks.border-tr th:last-child,\n.marks.border-tr td:last-child {\n  border-right: none; }\n\n.header-title2 {\n  background-color: #dedede;\n  padding: 8px;\n  font-size: 18px;\n  font-weight: bold; }\n\n.terms {\n  padding: 20px 55px 5px; }\n\n.tem-table {\n  padding: 0px 13%; }\n\n.fee-recipt tr th, .fee-recipt tr td {\n  max-width: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvcmVwb3J0cy9jb21tb24tcmVwb3J0cy5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3JlcG9ydHMvYWRtLXN0ZC1yZXBvcnQvYWRtLXN0ZC1yZXBvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBSXBCO0VBQ0ksb0NBQW9DO0VBQ3BDLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLDJDQUEyQztFQUMzQyx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSx3Q0FBd0M7RUFDeEMseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksMENBQTBDO0VBQzFDLHlCQUNKLEVBQUE7O0FBRUE7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYixxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSw4QkFBOEI7RUFDOUIsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSw4QkFBbUI7RUFBbkIsNkJBQW1CO1VBQW5CLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLG9DQUFvQztFQUNwQyw0QkFBNEI7RUFFNUIseUJBQW1CO1VBQW5CLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLHlCQUFtQjtVQUFuQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxVQUFVLEVBQUE7O0FBR2Q7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0kseUJBQXlCLEVBQUE7O0FB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cEI7RUFDSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVwb3J0cy9hZG0tc3RkLXJlcG9ydC9hZG0tc3RkLXJlcG9ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnZvaWNlLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMHB4IDI1cHg7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgIFxufVxuXG4uYiB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzApO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbi5iLWIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zMCk7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxuLmItdCB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMwKTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG4uYi1yIHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zMCk7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZVxufVxuXG4uZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG59XG5cbi5mbGV4LWQtYyB7XG4gICAgZmxleC1kaXJlY3Rpb246IC13ZWJraXQtY29sdW1uO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5mbGV4LWQtciB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmZsZXgtYSB7XG4gICAgLXdlYmtpdC1wbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hbGlnbi1pdGVtLWNlbnRlciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnctNTAtcCB7XG4gICAgd2lkdGg6IDUwJTtcbn1cblxuLnctMTAwLXAge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ucC0yMCB7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLnB5LTQge1xuICAgIHBhZGRpbmc6IDRweCAwcHg7XG59XG5cbi5weC0yMCB7XG4gICAgcGFkZGluZzogMHB4IDIwcHg7XG59XG5cbi5wdC0zMCB7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG59XG4ucHQtMjB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi50ZXh0LWxlZnQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi50ZXh0LXJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnRleHQtY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50ZXh0LXVwcGVyY2FzZSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnJlc3VsdC1oIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBtYXJnaW46IDJweDtcbn1cblxuLnJlc3VsdC1oIHNwYW4ge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmgyLWMge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnByLTgge1xuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICA7XG59XG5cbi5wYi0yMCB7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgO1xufVxuXG4ubWItMjAge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5wLTEwIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ucHItNHJlbSB7XG4gICAgcGFkZGluZy1yaWdodDogNHJlbTtcbn1cblxuLnJpZ2h0LWFsaWduIHtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbi5sZWZ0LWFsaWduIHtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuLmxvZ28taW1nIHtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDEwMHB4XG59XG5cbi50ZXh0LWxnIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5zY2hvb2wtc3RhbXAge1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBtaW4td2lkdGg6IDEzMHB4O1xuICAgIG1heC13aWR0aDogMTMwcHg7XG4gICAgaGVpZ2h0OiAxMzBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNjaG9vbC1zdGFtcDo6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDM2JTtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbnRlbnQ6IFwiU2Nob29sIHNlYWwgTG9nb1wiO1xufVxuXG4udG9wLXNwYWNlIHtcbiAgICBwYWRkaW5nLXRvcDogMS40cmVtO1xufVxuXG4ub3JkZXItbGlzdCAubGlzdCB7XG4gICAgLyogZGlzcGxheTpmbGV4OyBcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4OyAqL1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogZGVjaW1hbDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5vcmRlci1saXN0IC5saXN0IC50ZXh0IHtcbiAgICB3aGl0ZS1zcGFjZTogcHJlO1xuICAgIG92ZXJmbG93OiBoaWRkZW5cbn1cblxuLm9yZGVyLWxpc3QgLmxpc3QgLnRpdGxlIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xufVxuXG4uc2luZ2xlLWxpbmUge1xuICAgIHdpZHRoOiAxMDUwcHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmctdG9wOiAxNXB4XG59XG5cbi5vcmRlci1saXN0IC5saXN0IC5pbi13b3JkcyB7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4ubWFpbi10aXRsZSB7XG4gICAgYmFja2dyb3VuZDogIzVmNWY1ZjtcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5hdHRlbmRhbmNlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlXG59XG5cbi5hdHRlbmRhbmNlIHRoZWFkIHtcbiAgICBiYWNrZ3JvdW5kOiAjNWY1ZjVmO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuLmF0dGVuZGFuY2UgdHIgdGgsXG4uYXR0ZW5kYW5jZSB0ciB0ZCB7XG4gICAgcGFkZGluZzogMTVweCAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmF0dGVuZGFuY2UyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlXG59XG5cbi5hdHRlbmRhbmNlMiB0aGVhZCB7XG4gICAgYmFja2dyb3VuZDogIzVmNWY1ZjtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi5hdHRlbmRhbmNlMiB0ciB0aHtcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYXR0ZW5kYW5jZTIgdHIgdGQge1xuICAgIHBhZGRpbmc6IDVweCAwcHg7ICAgICAgICAgXG59XG4uYXR0ZW5kYW5jZTIgdHIgdGQ6Zmlyc3QtY2hpbGQge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDsgICAgICBcbn1cbi5hdHRlbmRhbmNlMiB0ciB0ZDpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmF0dGVuZGFuY2UyIHRyOm50aC1jaGlsZCgzbikgeyBcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZDtcbiAgIH1cblxuICAgLm91dGVyLWxpbmUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMwKTtcbiAgICBtYXJnaW46IDVweCAzMHB4O1xufVxuLm91dGVyLWxpbmUgLmhlbHBlci10YWJsZTpmaXJzdC1jaGlsZHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbn1cblxuLmhlbHBlci10YWJsZSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMwKTtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBwYWRkaW5nOiA5cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMwKTtcbn1cblxuLnRvdGFsLXRhYmxle1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zMCk7IFxuICAgIHBhZGRpbmc6IDEzcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDsgIFxufVxuLnRvdGFsLXRhYmxlIHRoOmZpcnN0LWNoaWxke1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIG1heC13aWR0aDogNTVweDtcbn1cbi50b3RhbC10YWJsZSB0aDpsYXN0LWNoaWxke1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG4gLm1hcmtzIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICAgIH1cbiAgICBcbiAgICAubWFya3MgdGhlYWQgdHIgdGgge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgICAgIDtcbiAgICAgICAgYmFja2dyb3VuZDogI2RlZGVkZTtcbiAgICB9XG4gICAgXG4gICAgLm1hcmtzIHRib2R5IHRyIHRkIHtcbiAgICAgICAgcGFkZGluZzogOHB4IDEwcHhcbiAgICB9XG4gICAgXG4gICAgLm1hcmtzLmJvcmRlci10ciB0aCxcbiAgICAubWFya3MuYm9yZGVyLXRyIHRkIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzApO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICAgICAgLyogdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAqL1xuICAgIH1cbiAgICBcbiAgICAubWFya3MuYm9yZGVyLXRyIHRkIC5jb250ZW50IHtcbiAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGVcbiAgICB9XG4gICAgXG4gICAgLm0tdy0yMDAge1xuICAgICAgICAvKiB3aWR0aDogMjAwcHg7XG4gICAgICAgIG1heC13aWR0aDogMjAwcHg7ICovXG4gICAgICAgIG1pbi13aWR0aDogMjAwcHhcbiAgICB9IFxuICAgIFxuICAgIC5tYXJrcy5ib3JkZXItdHIgdGg6bGFzdC1jaGlsZCxcbiAgICAubWFya3MuYm9yZGVyLXRyIHRkOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmVcbiAgICB9XG4gICAgLmhlYWRlci10aXRsZTIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZWRlZGU7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogYm9sZFxufVxuLnRlcm1ze1xuICAgIHBhZGRpbmc6IDIwcHggNTVweCA1cHg7XG59XG4gICAgLnRlbS10YWJsZXtcbiAgICAgICAgcGFkZGluZzogMHB4IDEzJTtcbiAgICB9XG5cbiAgICAuZmVlLXJlY2lwdCB0ciB0aCwgLmZlZS1yZWNpcHQgdHIgdGR7XG4gICAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgfSIsIi5pbnZvaWNlLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDBweCAyNXB4O1xuICBtYXJnaW46IDBweCBhdXRvOyB9XG5cbi5iIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyB9XG5cbi5iLWIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyB9XG5cbi5iLXQge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyB9XG5cbi5iLXIge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IH1cblxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7IH1cblxuLmZsZXgtZC1jIHtcbiAgZmxleC1kaXJlY3Rpb246IC13ZWJraXQtY29sdW1uO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG5cbi5mbGV4LWQtciB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cblxuLmZsZXgtYSB7XG4gIC13ZWJraXQtcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcbiAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG5cbi5hbGlnbi1pdGVtLWNlbnRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cblxuLnctNTAtcCB7XG4gIHdpZHRoOiA1MCU7IH1cblxuLnctMTAwLXAge1xuICB3aWR0aDogMTAwJTsgfVxuXG4ucC0yMCB7XG4gIHBhZGRpbmc6IDIwcHg7IH1cblxuLnB5LTQge1xuICBwYWRkaW5nOiA0cHggMHB4OyB9XG5cbi5weC0yMCB7XG4gIHBhZGRpbmc6IDBweCAyMHB4OyB9XG5cbi5wdC0zMCB7XG4gIHBhZGRpbmctdG9wOiAzMHB4OyB9XG5cbi5wdC0yMCB7XG4gIHBhZGRpbmctdG9wOiAyMHB4OyB9XG5cbi50ZXh0LWxlZnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XG5cbi50ZXh0LXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cblxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi50ZXh0LXVwcGVyY2FzZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cblxuLnJlc3VsdC1oIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IDJweDsgfVxuXG4ucmVzdWx0LWggc3BhbiB7XG4gIHdpZHRoOiA4MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cblxuLmgyLWMge1xuICBmb250LXNpemU6IDIwcHg7IH1cblxuLnByLTgge1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7IH1cblxuLnBiLTIwIHtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7IH1cblxuLm1iLTIwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxuXG4ucC0xMCB7XG4gIHBhZGRpbmc6IDEwcHg7IH1cblxuLnByLTRyZW0ge1xuICBwYWRkaW5nLXJpZ2h0OiA0cmVtOyB9XG5cbi5yaWdodC1hbGlnbiB7XG4gIGZsb2F0OiByaWdodDsgfVxuXG4ubGVmdC1hbGlnbiB7XG4gIGZsb2F0OiBsZWZ0OyB9XG5cbi5sb2dvLWltZyB7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIG1heC1oZWlnaHQ6IDEwMHB4OyB9XG5cbi50ZXh0LWxnIHtcbiAgZm9udC1zaXplOiAyNXB4OyB9XG5cbi5zY2hvb2wtc3RhbXAge1xuICB3aWR0aDogMTMwcHg7XG4gIG1pbi13aWR0aDogMTMwcHg7XG4gIG1heC13aWR0aDogMTMwcHg7XG4gIGhlaWdodDogMTMwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuLnNjaG9vbC1zdGFtcDo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzYlO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgY29udGVudDogXCJTY2hvb2wgc2VhbCBMb2dvXCI7IH1cblxuLnRvcC1zcGFjZSB7XG4gIHBhZGRpbmctdG9wOiAxLjRyZW07IH1cblxuLm9yZGVyLWxpc3QgLmxpc3Qge1xuICAvKiBkaXNwbGF5OmZsZXg7IFxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7ICovXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpc3Qtc3R5bGUtdHlwZTogZGVjaW1hbDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG5cbi5vcmRlci1saXN0IC5saXN0IC50ZXh0IHtcbiAgd2hpdGUtc3BhY2U6IHByZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuXG4ub3JkZXItbGlzdCAubGlzdCAudGl0bGUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuXG4uc2luZ2xlLWxpbmUge1xuICB3aWR0aDogMTA1MHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nLXRvcDogMTVweDsgfVxuXG4ub3JkZXItbGlzdCAubGlzdCAuaW4td29yZHMge1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7IH1cblxuLm1haW4tdGl0bGUge1xuICBiYWNrZ3JvdW5kOiAjNWY1ZjVmO1xuICBkaXNwbGF5OiBsaXN0LWl0ZW07XG4gIGNvbG9yOiAjZmZmOyB9XG5cbi5hdHRlbmRhbmNlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyB9XG5cbi5hdHRlbmRhbmNlIHRoZWFkIHtcbiAgYmFja2dyb3VuZDogIzVmNWY1ZjtcbiAgY29sb3I6ICNmZmY7IH1cblxuLmF0dGVuZGFuY2UgdHIgdGgsXG4uYXR0ZW5kYW5jZSB0ciB0ZCB7XG4gIHBhZGRpbmc6IDE1cHggMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLmF0dGVuZGFuY2UyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyB9XG5cbi5hdHRlbmRhbmNlMiB0aGVhZCB7XG4gIGJhY2tncm91bmQ6ICM1ZjVmNWY7XG4gIGNvbG9yOiAjZmZmOyB9XG5cbi5hdHRlbmRhbmNlMiB0ciB0aCB7XG4gIHBhZGRpbmc6IDE1cHggMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLmF0dGVuZGFuY2UyIHRyIHRkIHtcbiAgcGFkZGluZzogNXB4IDBweDsgfVxuXG4uYXR0ZW5kYW5jZTIgdHIgdGQ6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7IH1cblxuLmF0dGVuZGFuY2UyIHRyIHRkOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi5hdHRlbmRhbmNlMiB0cjpudGgtY2hpbGQoM24pIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkOyB9XG5cbi5vdXRlci1saW5lIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBtYXJnaW46IDVweCAzMHB4OyB9XG5cbi5vdXRlci1saW5lIC5oZWxwZXItdGFibGU6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGJvcmRlci10b3A6IG5vbmU7IH1cblxuLmhlbHBlci10YWJsZSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZzogOXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTsgfVxuXG4udG90YWwtdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgcGFkZGluZzogMTNweDtcbiAgbWFyZ2luLXRvcDogMjBweDsgfVxuXG4udG90YWwtdGFibGUgdGg6Zmlyc3QtY2hpbGQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIG1heC13aWR0aDogNTVweDsgfVxuXG4udG90YWwtdGFibGUgdGg6bGFzdC1jaGlsZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4OyB9XG5cbi5tYXJrcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItc3BhY2luZzogMDsgfVxuXG4ubWFya3MgdGhlYWQgdHIgdGgge1xuICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNkZWRlZGU7IH1cblxuLm1hcmtzIHRib2R5IHRyIHRkIHtcbiAgcGFkZGluZzogOHB4IDEwcHg7IH1cblxuLm1hcmtzLmJvcmRlci10ciB0aCxcbi5tYXJrcy5ib3JkZXItdHIgdGQge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAvKiB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICovIH1cblxuLm1hcmtzLmJvcmRlci10ciB0ZCAuY29udGVudCB7XG4gIHdpZHRoOiAxMnB4O1xuICBtYXJnaW46IGF1dG87XG4gIG92ZXJmbG93OiB2aXNpYmxlOyB9XG5cbi5tLXctMjAwIHtcbiAgLyogd2lkdGg6IDIwMHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDIwMHB4OyAqL1xuICBtaW4td2lkdGg6IDIwMHB4OyB9XG5cbi5tYXJrcy5ib3JkZXItdHIgdGg6bGFzdC1jaGlsZCxcbi5tYXJrcy5ib3JkZXItdHIgdGQ6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1yaWdodDogbm9uZTsgfVxuXG4uaGVhZGVyLXRpdGxlMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZWRlZGU7XG4gIHBhZGRpbmc6IDhweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDsgfVxuXG4udGVybXMge1xuICBwYWRkaW5nOiAyMHB4IDU1cHggNXB4OyB9XG5cbi50ZW0tdGFibGUge1xuICBwYWRkaW5nOiAwcHggMTMlOyB9XG5cbi5mZWUtcmVjaXB0IHRyIHRoLCAuZmVlLXJlY2lwdCB0ciB0ZCB7XG4gIG1heC13aWR0aDogMjAwcHg7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/reports/adm-std-report/adm-std-report.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/reports/adm-std-report/adm-std-report.component.ts ***!
  \****************************************************************************/
/*! exports provided: AdmStdReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmStdReportComponent", function() { return AdmStdReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_service_reports_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/service/reports/reports.service */ "./src/app/service/reports/reports.service.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/grading-service/api/grade-setup.service */ "./src/app/service/grading-service/api/grade-setup.service.ts");








var AdmStdReportComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AdmStdReportComponent, _super);
    function AdmStdReportComponent(schoolReportsService, commonService, gradeSetupService) {
        var _this = _super.call(this) || this;
        _this.schoolReportsService = schoolReportsService;
        _this.commonService = commonService;
        _this.gradeSetupService = gradeSetupService;
        _this.classId = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('');
        return _this;
    }
    AdmStdReportComponent.prototype.ngOnInit = function () {
        this.setColumns();
        this.getClasses();
    };
    AdmStdReportComponent.prototype.setColumns = function () {
        this.columns = [
            { field: 'name', header: 'Name', sort: false, dataKey: 'name' },
            { field: 'dateOfBirth', header: 'Date Of Birth', sort: false, dataKey: 'dateOfBirth' },
            { field: 'classSection', header: 'Class - Section', sort: false, dataKey: 'classSection' },
            { field: 'fatherName', header: 'Father Name', sort: false, dataKey: 'fatherName' },
            { field: 'motherName', header: 'Mother Name', sort: false, dataKey: 'motherName' },
            { field: 'guardianName', header: 'Guardian Name', sort: false, dataKey: 'guardianName' },
            { field: 'contact', header: 'Contact Information', sort: false, dataKey: 'contact' },
            { field: 'admissionNumber', header: 'Admission Number', sort: false, dataKey: 'admissionNumber' },
            { field: 'studentGroup', header: 'Student Group', sort: false, dataKey: 'studentGroup' },
            { field: 'feeConcessionGroups', header: 'Fee Concession Groups', sort: false, dataKey: 'feeConcessionGroups' }
        ];
    };
    AdmStdReportComponent.prototype.getAdmittedStudentSummary = function () {
        var _this = this;
        this.schoolReportsService.admittedStudents(this.classId.value).subscribe(function (res) {
            _this.resultApplicationReports = res;
            _this.resultApplicationReports.students.forEach(function (element) {
                element.classSection = [element.className, element.sectionName].filter(function (c) { return c; }).join('-');
                element.contact = [element.contact.email1, element.contact.email2, element.contact.mobileTel, element.contact.landTel, element.contact.otherTel].filter(function (c) { return c; }).join(',');
                element.dateOfBirth = (element.dateOfBirth == null) ? null : _this.commonService.customDateFormat(element.dateOfBirth, _this.getSchoolDateFormat()).date;
            });
            _this.resultApplicationReports.students
                .push({ feeConcessionGroups: 'Total: ' + _this.resultApplicationReports.studentsCount + ' Admitted Students' });
        });
    };
    AdmStdReportComponent.prototype.generateReport = function (rp) {
        if (rp === 'generatePdfReport') {
            this.schoolReportsService.generatePdf(document.getElementById('admitted-std'), app_app_constants__WEBPACK_IMPORTED_MODULE_5__["Messages"].COMMON_TABLE_CSS);
        }
        if (rp === 'generateExcelReport') {
            this.schoolReportsService.exportToExcel('adm-report', 'admitted_std_report');
        }
    };
    AdmStdReportComponent.prototype.reset = function () {
        this.classId.reset();
        this.resultApplicationReports = null;
    };
    AdmStdReportComponent.prototype.getClasses = function () {
        var _this = this;
        this.availableClasses = [];
        this.gradeSetupService.schoolAcademicClasses().subscribe(function (response) {
            if (response.listViews && response.listViews.length) {
                response.listViews.forEach(function (element) {
                    _this.availableClasses.push({
                        label: element.name,
                        value: element.id
                    });
                });
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    AdmStdReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adm-std-report',
            template: __webpack_require__(/*! ./adm-std-report.component.html */ "./src/app/modules/reports/adm-std-report/adm-std-report.component.html"),
            styles: [__webpack_require__(/*! ./adm-std-report.component.scss */ "./src/app/modules/reports/adm-std-report/adm-std-report.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_reports_reports_service__WEBPACK_IMPORTED_MODULE_2__["SchoolReportsService"], app_service_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"], app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_7__["GradeSetupService"]])
    ], AdmStdReportComponent);
    return AdmStdReportComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/reports/concession-std-report/concession-std-report.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/reports/concession-std-report/concession-std-report.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-custom-card *ngIf=\"(resultSetReport) && !(resultSetReport?.feeConcessions?.length)\" [inputMessage]=\"'No Record Found'\">\n</app-custom-card>\n<div fxLayout=\"column\" fxLayout.gt-sm=\"row wrap\" fxLayoutAlign=\"center center\" class=\"px-24 pt-20 pb-12\">\n  <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"32\" class=\"pr-sm-12\">\n    <mat-label translate #class>Class</mat-label>\n    <mat-select [formControl]=\"classId\">\n      <mat-option *ngFor=\"let class of availableClasses\" [value]=\"class.value\">\n        {{ class.label }}</mat-option>\n    </mat-select>\n  </mat-form-field>\n  <button mat-raised-button translate color=\"primary\" class=\"text-uppercase ml-12 mb-20\" (click)=\"reset()\" type=\"reset\">\n    Reset\n  </button>\n  <button mat-raised-button translate color=\"accent\" class=\"text-uppercase ml-12 mb-20\"\n    (click)=\"getStudentConcessions()\">\n    {{'Search' | translate}}\n  </button>\n</div>\n\n<div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"px-32 py-12\" *ngIf=\"(resultSetReport?.feeConcessions?.length)\">\n  <button mat-stroked-button class=\"mr-12\" (click)=\"generateReport('generatePdfReport')\">\n    <mat-icon class=\"mr-4\">save_alt</mat-icon>Download PDF\n  </button>\n  <!-- <button mat-stroked-button (click)=\"generateReport('generateExcelReport')\">\n    <mat-icon class=\"mr-4\">save_alt</mat-icon> Download EXCEL\n  </button> -->\n</div>\n\n<div class='invoice-container' id=\"adm-app-summary\" *ngIf=\"resultSetReport?.feeConcessions?.length > 0\" style=\"padding: 25px; padding-top: 0px;\">\n  <span class=\"dark-theme-color\" style=\"color:#fff\">A</span>\n  <div class='b flex-d-c invoice-body' style='overflow: hidden; '>\n    <h3 class=\"text-center text-uppercase\">Classwise Fee Concession Students Report</h3>\n    <div class=\"p-10 mb-20 main-title\">\n      <div class=\"left-align\">Report Generated On : {{ date }}</div>\n      <div class=\"right-align flex\" *ngIf=\"acadmicSession\">\n        {{acadmicSession?.name}} ({{acadmicSession?.startDate | date: 'MMM d, y'}} -\n        {{acadmicSession?.endDate | date: 'MMM d, y'}})\n      </div>\n    </div>\n    <div class=\"p-10\" *ngIf=\"resultSetReport?.feeConcessions?.length > 0\">\n      <div *ngFor=\"let class of resultSetReport?.feeConcessions\" id=\"adm-app-summary\">\n        <div class=\"b inner-page\" *ngIf=\"class?.feeConcessionGroupViews?.length\">\n          <div class=\"header-title2 b-b flex flex-d-r\">\n            <div class=\"flex flex-d-c\" style=\"-webkit-flex:1 1 auto; flex:1 1 auto;\">{{class.className}} </div>\n            <div style=\"text-align: end;\" class=\"flex flex-d-c  text-right w-280\"> {{class.totalStudentsFortheClass}}\n            </div>\n          </div>\n          <div *ngFor=\"let concession of class?.feeConcessionGroupViews\">\n            <div class=\"header-title2 flex flex-d-r b-b\">\n              <div class=\"flex flex-d-c w-100-p\">{{concession.concessionGroupName}}\n                {{concession.concessionGroupCode ? ',' : ''}} {{concession.concessionGroupCode}}\n                {{concession.concessionGroupDescription ? ',' : ''}}\n                {{concession.concessionGroupDescription}} </div>\n              <div class=\"flex flex-d-c w-80 text-right\">{{concession.totalStudentsFortheGroup}}</div>\n            </div>\n            <div class=\"flex flex-d-r\">\n              <div class=\"flex-d-c w-60-p b-r\">\n                <table class=\"marks border-tr b-b\">\n                  <thead>\n                    <tr>\n                      <th class=\"text-left\">Student Name</th>\n                      <th class=\"text-left\">Admission Number </th>\n                      <th class=\"text-left\"> Section </th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let student of concession?.studentConcessonGroupViews\">\n                      <td class=\"text-left\">{{student.studentName}}</td>\n                      <td class=\"text-left\">{{student.admissionNumber}}</td>\n                      <td class=\"text-left\">{{student.sectionName}}</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n\n              <div class=\"flex-d-c w-40-p  ml-2 mr-2 p-12\" style=\"font-size: 18px; padding: 12px;\">\n                <p style=\"text-decoration: underline;\">{{concession.concessionGroupName}}</p>\n                <ng-container *ngFor=\"let details of concession?.feeConcessionGroupDiscountDataViewModels\">\n                  <div>{{details.feeTypeName}}</div>\n                  <div>{{details.concessionTypeName}}</div>\n                  <div> {{details.discount}}</div>\n                  <div *ngFor=\"let term of details.feeConcessionGroupTermDiscountDataViewModel\">\n                    <div>{{term.feeTermName}} {{term.termConcessionAmt}}\n                    </div>\n                  </div>\n                </ng-container>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/reports/concession-std-report/concession-std-report.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/reports/concession-std-report/concession-std-report.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invoice-container {\n  padding: 0px 25px;\n  margin: 0px auto; }\n\n.b {\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.b-b {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.b-t {\n  border-top: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.b-r {\n  border-right: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.flex {\n  display: -webkit-box;\n  display: flex;\n  display: -webkit-flex; }\n\n.flex-d-c {\n  flex-direction: -webkit-column;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n\n.flex-d-r {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row; }\n\n.flex-a {\n  -webkit-place-content: center center;\n  place-content: center center;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.align-item-center {\n  -webkit-box-align: center;\n          align-items: center; }\n\n.w-50-p {\n  width: 50%; }\n\n.w-100-p {\n  width: 100%; }\n\n.p-20 {\n  padding: 20px; }\n\n.py-4 {\n  padding: 4px 0px; }\n\n.px-20 {\n  padding: 0px 20px; }\n\n.pt-30 {\n  padding-top: 30px; }\n\n.pt-20 {\n  padding-top: 20px; }\n\n.text-left {\n  text-align: left; }\n\n.text-right {\n  text-align: right; }\n\n.text-center {\n  text-align: center; }\n\n.text-uppercase {\n  text-transform: uppercase; }\n\n.result-h {\n  font-size: 20px;\n  padding: 20px;\n  margin: 2px; }\n\n.result-h span {\n  width: 80px;\n  display: inline-block; }\n\n.h2-c {\n  font-size: 20px; }\n\n.pr-8 {\n  padding-right: 8px; }\n\n.pb-20 {\n  padding-bottom: 20px; }\n\n.mb-20 {\n  margin-bottom: 20px; }\n\n.p-10 {\n  padding: 10px; }\n\n.pr-4rem {\n  padding-right: 4rem; }\n\n.right-align {\n  float: right; }\n\n.left-align {\n  float: left; }\n\n.logo-img {\n  max-width: 200px;\n  max-height: 100px; }\n\n.text-lg {\n  font-size: 25px; }\n\n.school-stamp {\n  width: 130px;\n  min-width: 130px;\n  max-width: 130px;\n  height: 130px;\n  border: 1px solid;\n  border-radius: 100%;\n  position: relative; }\n\n.school-stamp::after {\n  position: absolute;\n  top: 36%;\n  left: 0;\n  width: 100%;\n  content: \"School seal Logo\"; }\n\n.top-space {\n  padding-top: 1.4rem; }\n\n.order-list .list {\n  /* display:flex; \n        display: -webkit-flex; */\n  padding-right: 20px;\n  padding-bottom: 25px;\n  font-size: 18px;\n  list-style-type: decimal;\n  display: inline-block; }\n\n.order-list .list .text {\n  white-space: pre;\n  overflow: hidden; }\n\n.order-list .list .title {\n  white-space: nowrap;\n  margin-right: 20px;\n  display: inline-block; }\n\n.single-line {\n  width: 1050px;\n  white-space: nowrap;\n  overflow: hidden;\n  padding-top: 15px; }\n\n.order-list .list .in-words {\n  padding-right: 5px; }\n\n.main-title {\n  background: #5f5f5f;\n  display: list-item;\n  color: #fff; }\n\n.attendance {\n  width: 100%;\n  border-spacing: 0;\n  border-collapse: collapse; }\n\n.attendance thead {\n  background: #5f5f5f;\n  color: #fff; }\n\n.attendance tr th,\n.attendance tr td {\n  padding: 15px 0px;\n  text-align: center; }\n\n.attendance2 {\n  width: 100%;\n  border-spacing: 0;\n  border-collapse: collapse; }\n\n.attendance2 thead {\n  background: #5f5f5f;\n  color: #fff; }\n\n.attendance2 tr th {\n  padding: 15px 0px;\n  text-align: center; }\n\n.attendance2 tr td {\n  padding: 5px 0px; }\n\n.attendance2 tr td:first-child {\n  padding-left: 10px; }\n\n.attendance2 tr td:not(:first-child) {\n  text-align: center; }\n\n.attendance2 tr:nth-child(3n) {\n  border-bottom: 1px solid; }\n\n.outer-line {\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  margin: 5px 30px; }\n\n.outer-line .helper-table:first-child {\n  margin-top: 0px;\n  border-top: none; }\n\n.helper-table {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n  margin-bottom: 0px;\n  margin-top: 20px;\n  padding: 9px;\n  width: 100%;\n  border-top: 1px solid rgba(0, 0, 0, 0.3); }\n\n.total-table {\n  width: 100%;\n  border-top: 1px solid rgba(0, 0, 0, 0.3);\n  padding: 13px;\n  margin-top: 20px; }\n\n.total-table th:first-child {\n  text-align: left;\n  padding-left: 20px;\n  max-width: 55px; }\n\n.total-table th:last-child {\n  text-align: right;\n  padding-right: 20px; }\n\n.marks {\n  width: 100%;\n  border-spacing: 0; }\n\n.marks thead tr th {\n  padding: 10px 10px;\n  background: #dedede; }\n\n.marks tbody tr td {\n  padding: 8px 10px; }\n\n.marks.border-tr th,\n.marks.border-tr td {\n  border-right: 1px solid rgba(0, 0, 0, 0.3);\n  text-align: center;\n  font-size: 18px;\n  word-break: break-word;\n  /* text-transform: uppercase */ }\n\n.marks.border-tr td .content {\n  width: 12px;\n  margin: auto;\n  overflow: visible; }\n\n.m-w-200 {\n  /* width: 200px;\n        max-width: 200px; */\n  min-width: 200px; }\n\n.marks.border-tr th:last-child,\n.marks.border-tr td:last-child {\n  border-right: none; }\n\n.header-title2 {\n  background-color: #dedede;\n  padding: 8px;\n  font-size: 18px;\n  font-weight: bold; }\n\n.terms {\n  padding: 20px 55px 5px; }\n\n.tem-table {\n  padding: 0px 13%; }\n\n.fee-recipt tr th, .fee-recipt tr td {\n  max-width: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvcmVwb3J0cy9jb21tb24tcmVwb3J0cy5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3JlcG9ydHMvY29uY2Vzc2lvbi1zdGQtcmVwb3J0L2NvbmNlc3Npb24tc3RkLXJlcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDSSxvQ0FBb0M7RUFDcEMseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksMkNBQTJDO0VBQzNDLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLHdDQUF3QztFQUN4Qyx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSwwQ0FBMEM7RUFDMUMseUJBQ0osRUFBQTs7QUFFQTtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLDhCQUE4QjtFQUM5Qiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksb0NBQW9DO0VBQ3BDLDRCQUE0QjtFQUU1Qix5QkFBbUI7VUFBbkIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0kseUJBQW1CO1VBQW5CLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLFVBQVUsRUFBQTs7QUFHZDtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxlQUFlO0VBQ2YsYUFBYTtFQUNiLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFdBQVc7RUFDWCxxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksa0JBQWtCLEVBQUE7O0FBSXRCO0VBQ0ksb0JBQW9CLEVBQUE7O0FBSXhCO0VBQ0ksbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxnQkFBZ0I7RUFDaEIsaUJBQ0osRUFBQTs7QUFFQTtFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLE9BQU87RUFDUCxXQUFXO0VBQ1gsMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0ksbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0k7Z0NDckM0QjtFRHVDNUIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLGdCQUFnQjtFQUNoQixnQkFDSixFQUFBOztBQUVBO0VBQ0ksbUJBQW1CO0VBRW5CLGtCQUFrQjtFQUNsQixxQkFDSixFQUFBOztBQUVBO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUJBQ0osRUFBQTs7QUFFQTtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVyxFQUFBOztBQUdmO0VBQ0ksV0FBVztFQUNYLGlCQUFpQjtFQUNqQix5QkFDSixFQUFBOztBQUVBO0VBQ0ksbUJBQW1CO0VBQ25CLFdBQVcsRUFBQTs7QUFFZjs7RUFFSSxpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksV0FBVztFQUNYLGlCQUFpQjtFQUNqQix5QkFDSixFQUFBOztBQUVBO0VBQ0ksbUJBQW1CO0VBQ25CLFdBQVcsRUFBQTs7QUFFZjtFQUNJLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSx3QkFBdUIsRUFBQTs7QUFHeEI7RUFDQyxvQ0FBb0M7RUFDcEMsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLDJDQUEyQztFQUMzQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0VBQ1gsd0NBQXdDLEVBQUE7O0FBRzVDO0VBQ0ksV0FBVztFQUNYLHdDQUF3QztFQUN4QyxhQUFhO0VBQ2IsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksaUJBQWlCO0VBQ2pCLG1CQUFtQixFQUFBOztBQUV0QjtFQUNPLFdBQVc7RUFDWCxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxrQkFBa0I7RUFFbEIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksaUJBQ0osRUFBQTs7QUFFQTs7RUFFSSwwQ0FBMEM7RUFDMUMsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsOEJBQUEsRUFBK0I7O0FBR25DO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixpQkFDSixFQUFBOztBQUVBO0VBQ0k7MkJDdkRtQjtFRHlEbkIsZ0JBQ0osRUFBQTs7QUFFQTs7RUFFSSxrQkFDSixFQUFBOztBQUNBO0VBQ0EseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQ0osRUFBQTs7QUFDQTtFQUNJLHNCQUFzQixFQUFBOztBQUV0QjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9yZXBvcnRzL2NvbmNlc3Npb24tc3RkLXJlcG9ydC9jb25jZXNzaW9uLXN0ZC1yZXBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW52b2ljZS1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDBweCAyNXB4O1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICBcbn1cblxuLmIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMwKTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG4uYi1iIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzApO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbi5iLXQge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zMCk7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxuLmItciB7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzApO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2Vcbn1cblxuLmZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xufVxuXG4uZmxleC1kLWMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiAtd2Via2l0LWNvbHVtbjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZmxleC1kLXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5mbGV4LWEge1xuICAgIC13ZWJraXQtcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWxpZ24taXRlbS1jZW50ZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi53LTUwLXAge1xuICAgIHdpZHRoOiA1MCU7XG59XG5cbi53LTEwMC1wIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnAtMjAge1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5weS00IHtcbiAgICBwYWRkaW5nOiA0cHggMHB4O1xufVxuXG4ucHgtMjAge1xuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xufVxuXG4ucHQtMzAge1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuLnB0LTIwe1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4udGV4dC1sZWZ0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4udGV4dC1yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi50ZXh0LWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGV4dC11cHBlcmNhc2Uge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5yZXN1bHQtaCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbWFyZ2luOiAycHg7XG59XG5cbi5yZXN1bHQtaCBzcGFuIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5oMi1jIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5wci04IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgO1xufVxuXG4ucGItMjAge1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIDtcbn1cblxuLm1iLTIwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ucC0xMCB7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLnByLTRyZW0ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDRyZW07XG59XG5cbi5yaWdodC1hbGlnbiB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ubGVmdC1hbGlnbiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5sb2dvLWltZyB7XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICBtYXgtaGVpZ2h0OiAxMDBweFxufVxuXG4udGV4dC1sZyB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uc2Nob29sLXN0YW1wIHtcbiAgICB3aWR0aDogMTMwcHg7XG4gICAgbWluLXdpZHRoOiAxMzBweDtcbiAgICBtYXgtd2lkdGg6IDEzMHB4O1xuICAgIGhlaWdodDogMTMwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zY2hvb2wtc3RhbXA6OmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzNiU7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb250ZW50OiBcIlNjaG9vbCBzZWFsIExvZ29cIjtcbn1cblxuLnRvcC1zcGFjZSB7XG4gICAgcGFkZGluZy10b3A6IDEuNHJlbTtcbn1cblxuLm9yZGVyLWxpc3QgLmxpc3Qge1xuICAgIC8qIGRpc3BsYXk6ZmxleDsgXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDsgKi9cbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGRlY2ltYWw7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ub3JkZXItbGlzdCAubGlzdCAudGV4dCB7XG4gICAgd2hpdGUtc3BhY2U6IHByZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuXG59XG5cbi5vcmRlci1saXN0IC5saXN0IC50aXRsZSB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcbn1cblxuLnNpbmdsZS1saW5lIHtcbiAgICB3aWR0aDogMTA1MHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nLXRvcDogMTVweFxufVxuXG4ub3JkZXItbGlzdCAubGlzdCAuaW4td29yZHMge1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLm1haW4tdGl0bGUge1xuICAgIGJhY2tncm91bmQ6ICM1ZjVmNWY7XG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uYXR0ZW5kYW5jZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZVxufVxuXG4uYXR0ZW5kYW5jZSB0aGVhZCB7XG4gICAgYmFja2dyb3VuZDogIzVmNWY1ZjtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi5hdHRlbmRhbmNlIHRyIHRoLFxuLmF0dGVuZGFuY2UgdHIgdGQge1xuICAgIHBhZGRpbmc6IDE1cHggMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hdHRlbmRhbmNlMiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZVxufVxuXG4uYXR0ZW5kYW5jZTIgdGhlYWQge1xuICAgIGJhY2tncm91bmQ6ICM1ZjVmNWY7XG4gICAgY29sb3I6ICNmZmY7XG59XG4uYXR0ZW5kYW5jZTIgdHIgdGh7XG4gICAgcGFkZGluZzogMTVweCAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmF0dGVuZGFuY2UyIHRyIHRkIHtcbiAgICBwYWRkaW5nOiA1cHggMHB4OyAgICAgICAgIFxufVxuLmF0dGVuZGFuY2UyIHRyIHRkOmZpcnN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7ICAgICAgXG59XG4uYXR0ZW5kYW5jZTIgdHIgdGQ6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hdHRlbmRhbmNlMiB0cjpudGgtY2hpbGQoM24pIHsgXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQ7XG4gICB9XG5cbiAgIC5vdXRlci1saW5lIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zMCk7XG4gICAgbWFyZ2luOiA1cHggMzBweDtcbn1cbi5vdXRlci1saW5lIC5oZWxwZXItdGFibGU6Zmlyc3QtY2hpbGR7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG59XG5cbi5oZWxwZXItdGFibGUge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zMCk7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZzogOXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zMCk7XG59XG5cbi50b3RhbC10YWJsZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzApOyBcbiAgICBwYWRkaW5nOiAxM3B4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7ICBcbn1cbi50b3RhbC10YWJsZSB0aDpmaXJzdC1jaGlsZHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBtYXgtd2lkdGg6IDU1cHg7XG59XG4udG90YWwtdGFibGUgdGg6bGFzdC1jaGlsZHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuIC5tYXJrcyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICB9XG4gICAgXG4gICAgLm1hcmtzIHRoZWFkIHRyIHRoIHtcbiAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgICAgICA7XG4gICAgICAgIGJhY2tncm91bmQ6ICNkZWRlZGU7XG4gICAgfVxuICAgIFxuICAgIC5tYXJrcyB0Ym9keSB0ciB0ZCB7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxMHB4XG4gICAgfVxuICAgIFxuICAgIC5tYXJrcy5ib3JkZXItdHIgdGgsXG4gICAgLm1hcmtzLmJvcmRlci10ciB0ZCB7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMwKTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgICAgIC8qIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgKi9cbiAgICB9XG4gICAgXG4gICAgLm1hcmtzLmJvcmRlci10ciB0ZCAuY29udGVudCB7XG4gICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlXG4gICAgfVxuICAgIFxuICAgIC5tLXctMjAwIHtcbiAgICAgICAgLyogd2lkdGg6IDIwMHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDIwMHB4OyAqL1xuICAgICAgICBtaW4td2lkdGg6IDIwMHB4XG4gICAgfSBcbiAgICBcbiAgICAubWFya3MuYm9yZGVyLXRyIHRoOmxhc3QtY2hpbGQsXG4gICAgLm1hcmtzLmJvcmRlci10ciB0ZDpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lXG4gICAgfVxuICAgIC5oZWFkZXItdGl0bGUyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVkZWRlO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRcbn1cbi50ZXJtc3tcbiAgICBwYWRkaW5nOiAyMHB4IDU1cHggNXB4O1xufVxuICAgIC50ZW0tdGFibGV7XG4gICAgICAgIHBhZGRpbmc6IDBweCAxMyU7XG4gICAgfVxuXG4gICAgLmZlZS1yZWNpcHQgdHIgdGgsIC5mZWUtcmVjaXB0IHRyIHRke1xuICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIH0iLCIuaW52b2ljZS1jb250YWluZXIge1xuICBwYWRkaW5nOiAwcHggMjVweDtcbiAgbWFyZ2luOiAwcHggYXV0bzsgfVxuXG4uYiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgfVxuXG4uYi1iIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgfVxuXG4uYi10IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgfVxuXG4uYi1yIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyB9XG5cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4OyB9XG5cbi5mbGV4LWQtYyB7XG4gIGZsZXgtZGlyZWN0aW9uOiAtd2Via2l0LWNvbHVtbjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuXG4uZmxleC1kLXIge1xuICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XG5cbi5mbGV4LWEge1xuICAtd2Via2l0LXBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuXG4uYWxpZ24taXRlbS1jZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG5cbi53LTUwLXAge1xuICB3aWR0aDogNTAlOyB9XG5cbi53LTEwMC1wIHtcbiAgd2lkdGg6IDEwMCU7IH1cblxuLnAtMjAge1xuICBwYWRkaW5nOiAyMHB4OyB9XG5cbi5weS00IHtcbiAgcGFkZGluZzogNHB4IDBweDsgfVxuXG4ucHgtMjAge1xuICBwYWRkaW5nOiAwcHggMjBweDsgfVxuXG4ucHQtMzAge1xuICBwYWRkaW5nLXRvcDogMzBweDsgfVxuXG4ucHQtMjAge1xuICBwYWRkaW5nLXRvcDogMjBweDsgfVxuXG4udGV4dC1sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxuXG4udGV4dC1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0OyB9XG5cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4udGV4dC11cHBlcmNhc2Uge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XG5cbi5yZXN1bHQtaCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiAycHg7IH1cblxuLnJlc3VsdC1oIHNwYW4ge1xuICB3aWR0aDogODBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG5cbi5oMi1jIHtcbiAgZm9udC1zaXplOiAyMHB4OyB9XG5cbi5wci04IHtcbiAgcGFkZGluZy1yaWdodDogOHB4OyB9XG5cbi5wYi0yMCB7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4OyB9XG5cbi5tYi0yMCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cblxuLnAtMTAge1xuICBwYWRkaW5nOiAxMHB4OyB9XG5cbi5wci00cmVtIHtcbiAgcGFkZGluZy1yaWdodDogNHJlbTsgfVxuXG4ucmlnaHQtYWxpZ24ge1xuICBmbG9hdDogcmlnaHQ7IH1cblxuLmxlZnQtYWxpZ24ge1xuICBmbG9hdDogbGVmdDsgfVxuXG4ubG9nby1pbWcge1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBtYXgtaGVpZ2h0OiAxMDBweDsgfVxuXG4udGV4dC1sZyB7XG4gIGZvbnQtc2l6ZTogMjVweDsgfVxuXG4uc2Nob29sLXN0YW1wIHtcbiAgd2lkdGg6IDEzMHB4O1xuICBtaW4td2lkdGg6IDEzMHB4O1xuICBtYXgtd2lkdGg6IDEzMHB4O1xuICBoZWlnaHQ6IDEzMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbi5zY2hvb2wtc3RhbXA6OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM2JTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbnRlbnQ6IFwiU2Nob29sIHNlYWwgTG9nb1wiOyB9XG5cbi50b3Atc3BhY2Uge1xuICBwYWRkaW5nLXRvcDogMS40cmVtOyB9XG5cbi5vcmRlci1saXN0IC5saXN0IHtcbiAgLyogZGlzcGxheTpmbGV4OyBcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4OyAqL1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaXN0LXN0eWxlLXR5cGU6IGRlY2ltYWw7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuXG4ub3JkZXItbGlzdCAubGlzdCAudGV4dCB7XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG4gIG92ZXJmbG93OiBoaWRkZW47IH1cblxuLm9yZGVyLWxpc3QgLmxpc3QgLnRpdGxlIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cblxuLnNpbmdsZS1saW5lIHtcbiAgd2lkdGg6IDEwNTBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZy10b3A6IDE1cHg7IH1cblxuLm9yZGVyLWxpc3QgLmxpc3QgLmluLXdvcmRzIHtcbiAgcGFkZGluZy1yaWdodDogNXB4OyB9XG5cbi5tYWluLXRpdGxlIHtcbiAgYmFja2dyb3VuZDogIzVmNWY1ZjtcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xuICBjb2xvcjogI2ZmZjsgfVxuXG4uYXR0ZW5kYW5jZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgfVxuXG4uYXR0ZW5kYW5jZSB0aGVhZCB7XG4gIGJhY2tncm91bmQ6ICM1ZjVmNWY7XG4gIGNvbG9yOiAjZmZmOyB9XG5cbi5hdHRlbmRhbmNlIHRyIHRoLFxuLmF0dGVuZGFuY2UgdHIgdGQge1xuICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi5hdHRlbmRhbmNlMiB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgfVxuXG4uYXR0ZW5kYW5jZTIgdGhlYWQge1xuICBiYWNrZ3JvdW5kOiAjNWY1ZjVmO1xuICBjb2xvcjogI2ZmZjsgfVxuXG4uYXR0ZW5kYW5jZTIgdHIgdGgge1xuICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi5hdHRlbmRhbmNlMiB0ciB0ZCB7XG4gIHBhZGRpbmc6IDVweCAwcHg7IH1cblxuLmF0dGVuZGFuY2UyIHRyIHRkOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4OyB9XG5cbi5hdHRlbmRhbmNlMiB0ciB0ZDpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4uYXR0ZW5kYW5jZTIgdHI6bnRoLWNoaWxkKDNuKSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDsgfVxuXG4ub3V0ZXItbGluZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgbWFyZ2luOiA1cHggMzBweDsgfVxuXG4ub3V0ZXItbGluZSAuaGVscGVyLXRhYmxlOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBib3JkZXItdG9wOiBub25lOyB9XG5cbi5oZWxwZXItdGFibGUge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmc6IDlweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7IH1cblxuLnRvdGFsLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHBhZGRpbmc6IDEzcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7IH1cblxuLnRvdGFsLXRhYmxlIHRoOmZpcnN0LWNoaWxkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBtYXgtd2lkdGg6IDU1cHg7IH1cblxuLnRvdGFsLXRhYmxlIHRoOmxhc3QtY2hpbGQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMjBweDsgfVxuXG4ubWFya3Mge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7IH1cblxuLm1hcmtzIHRoZWFkIHRyIHRoIHtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZGVkZWRlOyB9XG5cbi5tYXJrcyB0Ym9keSB0ciB0ZCB7XG4gIHBhZGRpbmc6IDhweCAxMHB4OyB9XG5cbi5tYXJrcy5ib3JkZXItdHIgdGgsXG4ubWFya3MuYm9yZGVyLXRyIHRkIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgLyogdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAqLyB9XG5cbi5tYXJrcy5ib3JkZXItdHIgdGQgLmNvbnRlbnQge1xuICB3aWR0aDogMTJweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBvdmVyZmxvdzogdmlzaWJsZTsgfVxuXG4ubS13LTIwMCB7XG4gIC8qIHdpZHRoOiAyMDBweDtcbiAgICAgICAgbWF4LXdpZHRoOiAyMDBweDsgKi9cbiAgbWluLXdpZHRoOiAyMDBweDsgfVxuXG4ubWFya3MuYm9yZGVyLXRyIHRoOmxhc3QtY2hpbGQsXG4ubWFya3MuYm9yZGVyLXRyIHRkOmxhc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IG5vbmU7IH1cblxuLmhlYWRlci10aXRsZTIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVkZWRlO1xuICBwYWRkaW5nOiA4cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cblxuLnRlcm1zIHtcbiAgcGFkZGluZzogMjBweCA1NXB4IDVweDsgfVxuXG4udGVtLXRhYmxlIHtcbiAgcGFkZGluZzogMHB4IDEzJTsgfVxuXG4uZmVlLXJlY2lwdCB0ciB0aCwgLmZlZS1yZWNpcHQgdHIgdGQge1xuICBtYXgtd2lkdGg6IDIwMHB4OyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/reports/concession-std-report/concession-std-report.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/reports/concession-std-report/concession-std-report.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ConcessionStdReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConcessionStdReportComponent", function() { return ConcessionStdReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_service_reports_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/service/reports/reports.service */ "./src/app/service/reports/reports.service.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/grading-service/api/grade-setup.service */ "./src/app/service/grading-service/api/grade-setup.service.ts");







var ConcessionStdReportComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ConcessionStdReportComponent, _super);
    function ConcessionStdReportComponent(schoolReportsService, gradeSetupService) {
        var _this = _super.call(this) || this;
        _this.schoolReportsService = schoolReportsService;
        _this.gradeSetupService = gradeSetupService;
        _this.classId = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('');
        return _this;
    }
    ConcessionStdReportComponent.prototype.ngOnInit = function () {
        this.getClasses();
    };
    ConcessionStdReportComponent.prototype.getStudentConcessions = function () {
        var _this = this;
        this.schoolReportsService.studentsFeeConcessions(this.classId.value).subscribe(function (res) {
            _this.resultSetReport = res;
        });
    };
    ConcessionStdReportComponent.prototype.generateReport = function (rp) {
        if (rp === 'generatePdfReport') {
            this.schoolReportsService.generatePdf(document.getElementById('adm-app-summary'), app_app_constants__WEBPACK_IMPORTED_MODULE_3__["Messages"].FEE_CONCESSION_CSS, 'portrait');
        }
        if (rp === 'generateExcelReport') {
            this.schoolReportsService.exportToExcel('adm-report', 'adm_sum_report');
        }
    };
    ConcessionStdReportComponent.prototype.getClasses = function () {
        var _this = this;
        this.availableClasses = [];
        this.gradeSetupService.schoolAcademicClasses().subscribe(function (response) {
            if (response.listViews && response.listViews.length) {
                response.listViews.forEach(function (element) {
                    _this.availableClasses.push({
                        label: element.name,
                        value: element.id
                    });
                });
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    ConcessionStdReportComponent.prototype.reset = function () {
        this.classId.reset();
        this.resultSetReport = null;
    };
    ConcessionStdReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-concession-std-report',
            template: __webpack_require__(/*! ./concession-std-report.component.html */ "./src/app/modules/reports/concession-std-report/concession-std-report.component.html"),
            styles: [__webpack_require__(/*! ./concession-std-report.component.scss */ "./src/app/modules/reports/concession-std-report/concession-std-report.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_reports_reports_service__WEBPACK_IMPORTED_MODULE_2__["SchoolReportsService"], app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_6__["GradeSetupService"]])
    ], ConcessionStdReportComponent);
    return ConcessionStdReportComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_4__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/reports/examination-schedule-report/examination-schedule-report.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/reports/examination-schedule-report/examination-schedule-report.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"px-sm-32 pt-sm-24\" #search>\n  <form [formGroup]=\"searchForm\" #ngForm=\"ngForm\">\n    <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pb-4\">\n      <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"32\" class=\"pr-sm-12\">\n        <mat-label translate #class>Class</mat-label>\n        <mat-select formControlName=\"classId\" (selectionChange)=\"onSelectClass($event)\">\n          <mat-option *ngIf=\"availableClasses?.length\"></mat-option>\n          <mat-option *ngFor=\"let class of availableClasses\" [value]=\"class.value\">\n            {{ class.label }}</mat-option>\n        </mat-select>\n        <mat-error>\n          <app-validation [labelName]='class.innerText' [validationControl]=\"searchForm.controls.classId\"\n            [doValidate]=\"true\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field fxFlexFill appearance=\"outline\" class=\"pr-sm-12\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"32\">\n        <mat-label translate #section>Section</mat-label>\n        <mat-select formControlName=\"sectionId\" (selectionChange)=\"getGradingTerms()\">\n          <mat-option *ngIf=\"availableSections?.length\"></mat-option>\n          <mat-option *ngFor=\"let section of availableSections\" [value]=\"section.value\">\n            {{ section.label }}</mat-option>\n        </mat-select>\n        <mat-error>\n          <app-validation [labelName]='section.innerText' [validationControl]=\"searchForm.controls.sectionId\"\n            [doValidate]=\"true\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\" class=\"pr-sm-12\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"32\">\n        <mat-label #gradingTerm translate>Grading Term</mat-label>\n        <mat-select formControlName=\"gradingTermId\">\n          <mat-option *ngIf=\"gradingTerms?.length\"></mat-option>\n          <mat-option *ngFor=\"let gradingTerm of gradingTerms\" [value]=\"gradingTerm.value\">\n            {{gradingTerm.label}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n\n    <div fxLayoutAlign=\"end center\">\n      <button mat-raised-button translate color=\"primary\" class=\"text-uppercase ml-12 mb-20\" (click)=\"reset()\"\n        type=\"reset\">\n        Reset\n      </button>\n      <button mat-raised-button translate color=\"accent\" class=\"text-uppercase ml-12 mb-20\"\n        (click)=\"getExaminationScheduleReport()\">\n        {{'Search' | translate}}\n      </button>\n    </div>\n  </form>\n</div>\n\n<app-custom-card *ngIf=\"!(resultApplicationReports?.examinationSchedules?.classSectionReportDetails?.length) \n  && ngForm.submitted\" [inputMessage]=\"'No Record Found'\">\n</app-custom-card>\n<div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"px-32 py-12\"\n  *ngIf=\"resultApplicationReports?.examinationSchedules?.classSectionReportDetails?.length\">\n  <button mat-stroked-button class=\"mr-12\" (click)=\"generateReport('generatePdfReport')\">\n    <mat-icon class=\"mr-4\">save_alt</mat-icon>Download PDF\n  </button>\n</div>\n<div class='invoice-container' id=\"admitted-std\"\n  *ngIf=\"resultApplicationReports?.examinationSchedules?.classSectionReportDetails?.length\" style=\"padding: 25px; padding-top: 0px;\">\n  <span class=\"dark-theme-color\" style=\"color:#fff\">A</span>\n  <div class='b flex-d-c invoice-body' style='overflow: hidden; '>\n    <h2 class=\"text-center text-uppercase\">Examination Schedule Report</h2>\n    <div class=\"p-20 mb-20 main-title\">\n      <div class=\"left-align\">Report Generated On : {{ date }}</div>\n      <div class=\"right-align flex\" *ngIf=\"acadmicSession\">\n        {{acadmicSession?.name}} ({{acadmicSession?.startDate | date: 'MMM d, y'}} -\n        {{acadmicSession?.endDate | date: 'MMM d, y'}})\n      </div>\n    </div>\n    <ng-container *ngFor=\"let item of resultApplicationReports?.examinationSchedules?.classSectionReportDetails\">\n      <div class=\"p-20 font-size-18\" *ngIf=\"item?.termDeatails?.length\">\n        <div class=\"left-align\">\n          <div>{{item.className}} - {{item.sectionName}}</div>\n        </div>\n        <div class=\"right-align\">\n          <div>{{item.classTeacher}}</div>\n        </div>\n      </div>\n      <ng-container *ngFor=\"let term of item?.termDeatails\">\n        <div *ngIf=\"term?.testDetails?.length\" class=\"terms font-size-18\">{{term.termName}}</div>\n        <div class=\"tem-table\" *ngIf=\"term?.testDetails?.length\">\n          <app-af-report-table [inputData]=\"term?.testDetails\" [tableId]=\"'adm-report'\" [columns]=\"columns\">\n          </app-af-report-table>\n        </div>\n      </ng-container>\n    </ng-container>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/reports/examination-schedule-report/examination-schedule-report.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/reports/examination-schedule-report/examination-schedule-report.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invoice-container {\n  padding: 0px 25px;\n  margin: 0px auto; }\n\n.b {\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.b-b {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.b-t {\n  border-top: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.b-r {\n  border-right: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.flex {\n  display: -webkit-box;\n  display: flex;\n  display: -webkit-flex; }\n\n.flex-d-c {\n  flex-direction: -webkit-column;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n\n.flex-d-r {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row; }\n\n.flex-a {\n  -webkit-place-content: center center;\n  place-content: center center;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.align-item-center {\n  -webkit-box-align: center;\n          align-items: center; }\n\n.w-50-p {\n  width: 50%; }\n\n.w-100-p {\n  width: 100%; }\n\n.p-20 {\n  padding: 20px; }\n\n.py-4 {\n  padding: 4px 0px; }\n\n.px-20 {\n  padding: 0px 20px; }\n\n.pt-30 {\n  padding-top: 30px; }\n\n.pt-20 {\n  padding-top: 20px; }\n\n.text-left {\n  text-align: left; }\n\n.text-right {\n  text-align: right; }\n\n.text-center {\n  text-align: center; }\n\n.text-uppercase {\n  text-transform: uppercase; }\n\n.result-h {\n  font-size: 20px;\n  padding: 20px;\n  margin: 2px; }\n\n.result-h span {\n  width: 80px;\n  display: inline-block; }\n\n.h2-c {\n  font-size: 20px; }\n\n.pr-8 {\n  padding-right: 8px; }\n\n.pb-20 {\n  padding-bottom: 20px; }\n\n.mb-20 {\n  margin-bottom: 20px; }\n\n.p-10 {\n  padding: 10px; }\n\n.pr-4rem {\n  padding-right: 4rem; }\n\n.right-align {\n  float: right; }\n\n.left-align {\n  float: left; }\n\n.logo-img {\n  max-width: 200px;\n  max-height: 100px; }\n\n.text-lg {\n  font-size: 25px; }\n\n.school-stamp {\n  width: 130px;\n  min-width: 130px;\n  max-width: 130px;\n  height: 130px;\n  border: 1px solid;\n  border-radius: 100%;\n  position: relative; }\n\n.school-stamp::after {\n  position: absolute;\n  top: 36%;\n  left: 0;\n  width: 100%;\n  content: \"School seal Logo\"; }\n\n.top-space {\n  padding-top: 1.4rem; }\n\n.order-list .list {\n  /* display:flex; \n        display: -webkit-flex; */\n  padding-right: 20px;\n  padding-bottom: 25px;\n  font-size: 18px;\n  list-style-type: decimal;\n  display: inline-block; }\n\n.order-list .list .text {\n  white-space: pre;\n  overflow: hidden; }\n\n.order-list .list .title {\n  white-space: nowrap;\n  margin-right: 20px;\n  display: inline-block; }\n\n.single-line {\n  width: 1050px;\n  white-space: nowrap;\n  overflow: hidden;\n  padding-top: 15px; }\n\n.order-list .list .in-words {\n  padding-right: 5px; }\n\n.main-title {\n  background: #5f5f5f;\n  display: list-item;\n  color: #fff; }\n\n.attendance {\n  width: 100%;\n  border-spacing: 0;\n  border-collapse: collapse; }\n\n.attendance thead {\n  background: #5f5f5f;\n  color: #fff; }\n\n.attendance tr th,\n.attendance tr td {\n  padding: 15px 0px;\n  text-align: center; }\n\n.attendance2 {\n  width: 100%;\n  border-spacing: 0;\n  border-collapse: collapse; }\n\n.attendance2 thead {\n  background: #5f5f5f;\n  color: #fff; }\n\n.attendance2 tr th {\n  padding: 15px 0px;\n  text-align: center; }\n\n.attendance2 tr td {\n  padding: 5px 0px; }\n\n.attendance2 tr td:first-child {\n  padding-left: 10px; }\n\n.attendance2 tr td:not(:first-child) {\n  text-align: center; }\n\n.attendance2 tr:nth-child(3n) {\n  border-bottom: 1px solid; }\n\n.outer-line {\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  margin: 5px 30px; }\n\n.outer-line .helper-table:first-child {\n  margin-top: 0px;\n  border-top: none; }\n\n.helper-table {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n  margin-bottom: 0px;\n  margin-top: 20px;\n  padding: 9px;\n  width: 100%;\n  border-top: 1px solid rgba(0, 0, 0, 0.3); }\n\n.total-table {\n  width: 100%;\n  border-top: 1px solid rgba(0, 0, 0, 0.3);\n  padding: 13px;\n  margin-top: 20px; }\n\n.total-table th:first-child {\n  text-align: left;\n  padding-left: 20px;\n  max-width: 55px; }\n\n.total-table th:last-child {\n  text-align: right;\n  padding-right: 20px; }\n\n.marks {\n  width: 100%;\n  border-spacing: 0; }\n\n.marks thead tr th {\n  padding: 10px 10px;\n  background: #dedede; }\n\n.marks tbody tr td {\n  padding: 8px 10px; }\n\n.marks.border-tr th,\n.marks.border-tr td {\n  border-right: 1px solid rgba(0, 0, 0, 0.3);\n  text-align: center;\n  font-size: 18px;\n  word-break: break-word;\n  /* text-transform: uppercase */ }\n\n.marks.border-tr td .content {\n  width: 12px;\n  margin: auto;\n  overflow: visible; }\n\n.m-w-200 {\n  /* width: 200px;\n        max-width: 200px; */\n  min-width: 200px; }\n\n.marks.border-tr th:last-child,\n.marks.border-tr td:last-child {\n  border-right: none; }\n\n.header-title2 {\n  background-color: #dedede;\n  padding: 8px;\n  font-size: 18px;\n  font-weight: bold; }\n\n.terms {\n  padding: 20px 55px 5px; }\n\n.tem-table {\n  padding: 0px 13%; }\n\n.fee-recipt tr th, .fee-recipt tr td {\n  max-width: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvcmVwb3J0cy9jb21tb24tcmVwb3J0cy5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3JlcG9ydHMvZXhhbWluYXRpb24tc2NoZWR1bGUtcmVwb3J0L2V4YW1pbmF0aW9uLXNjaGVkdWxlLXJlcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDSSxvQ0FBb0M7RUFDcEMseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksMkNBQTJDO0VBQzNDLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLHdDQUF3QztFQUN4Qyx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSwwQ0FBMEM7RUFDMUMseUJBQ0osRUFBQTs7QUFFQTtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLDhCQUE4QjtFQUM5Qiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksb0NBQW9DO0VBQ3BDLDRCQUE0QjtFQUU1Qix5QkFBbUI7VUFBbkIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0kseUJBQW1CO1VBQW5CLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLFVBQVUsRUFBQTs7QUFHZDtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxrQkFBa0IsRUFBQTs7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QUV0QjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9yZXBvcnRzL2V4YW1pbmF0aW9uLXNjaGVkdWxlLXJlcG9ydC9leGFtaW5hdGlvbi1zY2hlZHVsZS1yZXBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW52b2ljZS1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDBweCAyNXB4O1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICBcbn1cblxuLmIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMwKTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG4uYi1iIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzApO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbi5iLXQge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zMCk7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxuLmItciB7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzApO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2Vcbn1cblxuLmZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xufVxuXG4uZmxleC1kLWMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiAtd2Via2l0LWNvbHVtbjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZmxleC1kLXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5mbGV4LWEge1xuICAgIC13ZWJraXQtcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWxpZ24taXRlbS1jZW50ZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi53LTUwLXAge1xuICAgIHdpZHRoOiA1MCU7XG59XG5cbi53LTEwMC1wIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnAtMjAge1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5weS00IHtcbiAgICBwYWRkaW5nOiA0cHggMHB4O1xufVxuXG4ucHgtMjAge1xuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xufVxuXG4ucHQtMzAge1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuLnB0LTIwe1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4udGV4dC1sZWZ0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4udGV4dC1yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi50ZXh0LWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGV4dC11cHBlcmNhc2Uge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5yZXN1bHQtaCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbWFyZ2luOiAycHg7XG59XG5cbi5yZXN1bHQtaCBzcGFuIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5oMi1jIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5wci04IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgO1xufVxuXG4ucGItMjAge1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIDtcbn1cblxuLm1iLTIwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ucC0xMCB7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLnByLTRyZW0ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDRyZW07XG59XG5cbi5yaWdodC1hbGlnbiB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ubGVmdC1hbGlnbiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5sb2dvLWltZyB7XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICBtYXgtaGVpZ2h0OiAxMDBweFxufVxuXG4udGV4dC1sZyB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uc2Nob29sLXN0YW1wIHtcbiAgICB3aWR0aDogMTMwcHg7XG4gICAgbWluLXdpZHRoOiAxMzBweDtcbiAgICBtYXgtd2lkdGg6IDEzMHB4O1xuICAgIGhlaWdodDogMTMwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zY2hvb2wtc3RhbXA6OmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzNiU7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb250ZW50OiBcIlNjaG9vbCBzZWFsIExvZ29cIjtcbn1cblxuLnRvcC1zcGFjZSB7XG4gICAgcGFkZGluZy10b3A6IDEuNHJlbTtcbn1cblxuLm9yZGVyLWxpc3QgLmxpc3Qge1xuICAgIC8qIGRpc3BsYXk6ZmxleDsgXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDsgKi9cbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGRlY2ltYWw7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ub3JkZXItbGlzdCAubGlzdCAudGV4dCB7XG4gICAgd2hpdGUtc3BhY2U6IHByZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuXG59XG5cbi5vcmRlci1saXN0IC5saXN0IC50aXRsZSB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcbn1cblxuLnNpbmdsZS1saW5lIHtcbiAgICB3aWR0aDogMTA1MHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nLXRvcDogMTVweFxufVxuXG4ub3JkZXItbGlzdCAubGlzdCAuaW4td29yZHMge1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLm1haW4tdGl0bGUge1xuICAgIGJhY2tncm91bmQ6ICM1ZjVmNWY7XG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uYXR0ZW5kYW5jZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZVxufVxuXG4uYXR0ZW5kYW5jZSB0aGVhZCB7XG4gICAgYmFja2dyb3VuZDogIzVmNWY1ZjtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi5hdHRlbmRhbmNlIHRyIHRoLFxuLmF0dGVuZGFuY2UgdHIgdGQge1xuICAgIHBhZGRpbmc6IDE1cHggMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hdHRlbmRhbmNlMiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZVxufVxuXG4uYXR0ZW5kYW5jZTIgdGhlYWQge1xuICAgIGJhY2tncm91bmQ6ICM1ZjVmNWY7XG4gICAgY29sb3I6ICNmZmY7XG59XG4uYXR0ZW5kYW5jZTIgdHIgdGh7XG4gICAgcGFkZGluZzogMTVweCAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmF0dGVuZGFuY2UyIHRyIHRkIHtcbiAgICBwYWRkaW5nOiA1cHggMHB4OyAgICAgICAgIFxufVxuLmF0dGVuZGFuY2UyIHRyIHRkOmZpcnN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7ICAgICAgXG59XG4uYXR0ZW5kYW5jZTIgdHIgdGQ6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hdHRlbmRhbmNlMiB0cjpudGgtY2hpbGQoM24pIHsgXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQ7XG4gICB9XG5cbiAgIC5vdXRlci1saW5lIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zMCk7XG4gICAgbWFyZ2luOiA1cHggMzBweDtcbn1cbi5vdXRlci1saW5lIC5oZWxwZXItdGFibGU6Zmlyc3QtY2hpbGR7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG59XG5cbi5oZWxwZXItdGFibGUge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zMCk7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZzogOXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zMCk7XG59XG5cbi50b3RhbC10YWJsZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzApOyBcbiAgICBwYWRkaW5nOiAxM3B4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7ICBcbn1cbi50b3RhbC10YWJsZSB0aDpmaXJzdC1jaGlsZHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBtYXgtd2lkdGg6IDU1cHg7XG59XG4udG90YWwtdGFibGUgdGg6bGFzdC1jaGlsZHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuIC5tYXJrcyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICB9XG4gICAgXG4gICAgLm1hcmtzIHRoZWFkIHRyIHRoIHtcbiAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgICAgICA7XG4gICAgICAgIGJhY2tncm91bmQ6ICNkZWRlZGU7XG4gICAgfVxuICAgIFxuICAgIC5tYXJrcyB0Ym9keSB0ciB0ZCB7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxMHB4XG4gICAgfVxuICAgIFxuICAgIC5tYXJrcy5ib3JkZXItdHIgdGgsXG4gICAgLm1hcmtzLmJvcmRlci10ciB0ZCB7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMwKTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgICAgIC8qIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgKi9cbiAgICB9XG4gICAgXG4gICAgLm1hcmtzLmJvcmRlci10ciB0ZCAuY29udGVudCB7XG4gICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlXG4gICAgfVxuICAgIFxuICAgIC5tLXctMjAwIHtcbiAgICAgICAgLyogd2lkdGg6IDIwMHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDIwMHB4OyAqL1xuICAgICAgICBtaW4td2lkdGg6IDIwMHB4XG4gICAgfSBcbiAgICBcbiAgICAubWFya3MuYm9yZGVyLXRyIHRoOmxhc3QtY2hpbGQsXG4gICAgLm1hcmtzLmJvcmRlci10ciB0ZDpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lXG4gICAgfVxuICAgIC5oZWFkZXItdGl0bGUyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVkZWRlO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRcbn1cbi50ZXJtc3tcbiAgICBwYWRkaW5nOiAyMHB4IDU1cHggNXB4O1xufVxuICAgIC50ZW0tdGFibGV7XG4gICAgICAgIHBhZGRpbmc6IDBweCAxMyU7XG4gICAgfVxuXG4gICAgLmZlZS1yZWNpcHQgdHIgdGgsIC5mZWUtcmVjaXB0IHRyIHRke1xuICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIH0iLCIuaW52b2ljZS1jb250YWluZXIge1xuICBwYWRkaW5nOiAwcHggMjVweDtcbiAgbWFyZ2luOiAwcHggYXV0bzsgfVxuXG4uYiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgfVxuXG4uYi1iIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgfVxuXG4uYi10IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgfVxuXG4uYi1yIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyB9XG5cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4OyB9XG5cbi5mbGV4LWQtYyB7XG4gIGZsZXgtZGlyZWN0aW9uOiAtd2Via2l0LWNvbHVtbjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuXG4uZmxleC1kLXIge1xuICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XG5cbi5mbGV4LWEge1xuICAtd2Via2l0LXBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuXG4uYWxpZ24taXRlbS1jZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG5cbi53LTUwLXAge1xuICB3aWR0aDogNTAlOyB9XG5cbi53LTEwMC1wIHtcbiAgd2lkdGg6IDEwMCU7IH1cblxuLnAtMjAge1xuICBwYWRkaW5nOiAyMHB4OyB9XG5cbi5weS00IHtcbiAgcGFkZGluZzogNHB4IDBweDsgfVxuXG4ucHgtMjAge1xuICBwYWRkaW5nOiAwcHggMjBweDsgfVxuXG4ucHQtMzAge1xuICBwYWRkaW5nLXRvcDogMzBweDsgfVxuXG4ucHQtMjAge1xuICBwYWRkaW5nLXRvcDogMjBweDsgfVxuXG4udGV4dC1sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxuXG4udGV4dC1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0OyB9XG5cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4udGV4dC11cHBlcmNhc2Uge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XG5cbi5yZXN1bHQtaCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiAycHg7IH1cblxuLnJlc3VsdC1oIHNwYW4ge1xuICB3aWR0aDogODBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG5cbi5oMi1jIHtcbiAgZm9udC1zaXplOiAyMHB4OyB9XG5cbi5wci04IHtcbiAgcGFkZGluZy1yaWdodDogOHB4OyB9XG5cbi5wYi0yMCB7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4OyB9XG5cbi5tYi0yMCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cblxuLnAtMTAge1xuICBwYWRkaW5nOiAxMHB4OyB9XG5cbi5wci00cmVtIHtcbiAgcGFkZGluZy1yaWdodDogNHJlbTsgfVxuXG4ucmlnaHQtYWxpZ24ge1xuICBmbG9hdDogcmlnaHQ7IH1cblxuLmxlZnQtYWxpZ24ge1xuICBmbG9hdDogbGVmdDsgfVxuXG4ubG9nby1pbWcge1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBtYXgtaGVpZ2h0OiAxMDBweDsgfVxuXG4udGV4dC1sZyB7XG4gIGZvbnQtc2l6ZTogMjVweDsgfVxuXG4uc2Nob29sLXN0YW1wIHtcbiAgd2lkdGg6IDEzMHB4O1xuICBtaW4td2lkdGg6IDEzMHB4O1xuICBtYXgtd2lkdGg6IDEzMHB4O1xuICBoZWlnaHQ6IDEzMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbi5zY2hvb2wtc3RhbXA6OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM2JTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbnRlbnQ6IFwiU2Nob29sIHNlYWwgTG9nb1wiOyB9XG5cbi50b3Atc3BhY2Uge1xuICBwYWRkaW5nLXRvcDogMS40cmVtOyB9XG5cbi5vcmRlci1saXN0IC5saXN0IHtcbiAgLyogZGlzcGxheTpmbGV4OyBcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4OyAqL1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaXN0LXN0eWxlLXR5cGU6IGRlY2ltYWw7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuXG4ub3JkZXItbGlzdCAubGlzdCAudGV4dCB7XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG4gIG92ZXJmbG93OiBoaWRkZW47IH1cblxuLm9yZGVyLWxpc3QgLmxpc3QgLnRpdGxlIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cblxuLnNpbmdsZS1saW5lIHtcbiAgd2lkdGg6IDEwNTBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZy10b3A6IDE1cHg7IH1cblxuLm9yZGVyLWxpc3QgLmxpc3QgLmluLXdvcmRzIHtcbiAgcGFkZGluZy1yaWdodDogNXB4OyB9XG5cbi5tYWluLXRpdGxlIHtcbiAgYmFja2dyb3VuZDogIzVmNWY1ZjtcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xuICBjb2xvcjogI2ZmZjsgfVxuXG4uYXR0ZW5kYW5jZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgfVxuXG4uYXR0ZW5kYW5jZSB0aGVhZCB7XG4gIGJhY2tncm91bmQ6ICM1ZjVmNWY7XG4gIGNvbG9yOiAjZmZmOyB9XG5cbi5hdHRlbmRhbmNlIHRyIHRoLFxuLmF0dGVuZGFuY2UgdHIgdGQge1xuICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi5hdHRlbmRhbmNlMiB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgfVxuXG4uYXR0ZW5kYW5jZTIgdGhlYWQge1xuICBiYWNrZ3JvdW5kOiAjNWY1ZjVmO1xuICBjb2xvcjogI2ZmZjsgfVxuXG4uYXR0ZW5kYW5jZTIgdHIgdGgge1xuICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi5hdHRlbmRhbmNlMiB0ciB0ZCB7XG4gIHBhZGRpbmc6IDVweCAwcHg7IH1cblxuLmF0dGVuZGFuY2UyIHRyIHRkOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4OyB9XG5cbi5hdHRlbmRhbmNlMiB0ciB0ZDpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4uYXR0ZW5kYW5jZTIgdHI6bnRoLWNoaWxkKDNuKSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDsgfVxuXG4ub3V0ZXItbGluZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgbWFyZ2luOiA1cHggMzBweDsgfVxuXG4ub3V0ZXItbGluZSAuaGVscGVyLXRhYmxlOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBib3JkZXItdG9wOiBub25lOyB9XG5cbi5oZWxwZXItdGFibGUge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmc6IDlweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7IH1cblxuLnRvdGFsLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHBhZGRpbmc6IDEzcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7IH1cblxuLnRvdGFsLXRhYmxlIHRoOmZpcnN0LWNoaWxkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBtYXgtd2lkdGg6IDU1cHg7IH1cblxuLnRvdGFsLXRhYmxlIHRoOmxhc3QtY2hpbGQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMjBweDsgfVxuXG4ubWFya3Mge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7IH1cblxuLm1hcmtzIHRoZWFkIHRyIHRoIHtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZGVkZWRlOyB9XG5cbi5tYXJrcyB0Ym9keSB0ciB0ZCB7XG4gIHBhZGRpbmc6IDhweCAxMHB4OyB9XG5cbi5tYXJrcy5ib3JkZXItdHIgdGgsXG4ubWFya3MuYm9yZGVyLXRyIHRkIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgLyogdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAqLyB9XG5cbi5tYXJrcy5ib3JkZXItdHIgdGQgLmNvbnRlbnQge1xuICB3aWR0aDogMTJweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBvdmVyZmxvdzogdmlzaWJsZTsgfVxuXG4ubS13LTIwMCB7XG4gIC8qIHdpZHRoOiAyMDBweDtcbiAgICAgICAgbWF4LXdpZHRoOiAyMDBweDsgKi9cbiAgbWluLXdpZHRoOiAyMDBweDsgfVxuXG4ubWFya3MuYm9yZGVyLXRyIHRoOmxhc3QtY2hpbGQsXG4ubWFya3MuYm9yZGVyLXRyIHRkOmxhc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IG5vbmU7IH1cblxuLmhlYWRlci10aXRsZTIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVkZWRlO1xuICBwYWRkaW5nOiA4cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cblxuLnRlcm1zIHtcbiAgcGFkZGluZzogMjBweCA1NXB4IDVweDsgfVxuXG4udGVtLXRhYmxlIHtcbiAgcGFkZGluZzogMHB4IDEzJTsgfVxuXG4uZmVlLXJlY2lwdCB0ciB0aCwgLmZlZS1yZWNpcHQgdHIgdGQge1xuICBtYXgtd2lkdGg6IDIwMHB4OyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/reports/examination-schedule-report/examination-schedule-report.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/reports/examination-schedule-report/examination-schedule-report.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ExaminationScheduleReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExaminationScheduleReportComponent", function() { return ExaminationScheduleReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_service_reports_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/service/reports/reports.service */ "./src/app/service/reports/reports.service.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/grading-service/api/grade-setup.service */ "./src/app/service/grading-service/api/grade-setup.service.ts");
/* harmony import */ var app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/class-schedules/class-time-table.service */ "./src/app/service/class-schedules/class-time-table.service.ts");
/* harmony import */ var app_service_grading_service_api_garde_term_configuration_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/grading-service/api/garde-term-configuration.service */ "./src/app/service/grading-service/api/garde-term-configuration.service.ts");










var ExaminationScheduleReportComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ExaminationScheduleReportComponent, _super);
    function ExaminationScheduleReportComponent(schoolReportsService, commonService, gradeSetupService, classTimetableService, _gradingTermConfigurationService) {
        var _this = _super.call(this) || this;
        _this.schoolReportsService = schoolReportsService;
        _this.commonService = commonService;
        _this.gradeSetupService = gradeSetupService;
        _this.classTimetableService = classTimetableService;
        _this._gradingTermConfigurationService = _gradingTermConfigurationService;
        return _this;
    }
    ExaminationScheduleReportComponent.prototype.ngOnInit = function () {
        this.setColumns();
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            classId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            sectionId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            gradingTermId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null)
        });
        this.getClasses();
    };
    ExaminationScheduleReportComponent.prototype.setColumns = function () {
        this.columns = [
            { field: 'testDate', header: 'Test Date', sort: false, dataKey: 'name' },
            { field: 'testType', header: 'Test Type', sort: false, dataKey: 'invoiceNumber' },
            { field: 'testName', header: 'Test Name', sort: false, dataKey: 'isuueDate' },
            { field: 'subject', header: 'Subject', sort: false, dataKey: 'dueDate' },
            { field: 'subjectTeacher', header: 'Subject Teacher', sort: false, dataKey: 'delayDays' },
            { field: 'testStatus', header: 'Test Status', sort: false, dataKey: 'feeTermName' }
        ];
    };
    ExaminationScheduleReportComponent.prototype.getExaminationScheduleReport = function () {
        var _this = this;
        this.schoolReportsService.examinationSchedule([this.searchForm.value.classId], [this.searchForm.value.sectionId], [this.searchForm.value.gradingTermId]).subscribe(function (res) {
            _this.resultApplicationReports = res;
            _this.resultApplicationReports.examinationSchedules.classSectionReportDetails.forEach(function (classSection) {
                classSection.termDeatails.forEach(function (term) {
                    term.testDetails.forEach(function (test) {
                        test.testDate = (test.testDate == null) ? null : _this.commonService.customDateFormat(test.testDate, _this.getSchoolDateFormat()).date;
                        test.subjectTeacher = test.subjectTeacher.filter(function (a) { return a; }).join(',');
                    });
                });
            });
        });
    };
    ExaminationScheduleReportComponent.prototype.generateReport = function (rp) {
        if (rp === 'generatePdfReport') {
            this.schoolReportsService.generatePdf(document.getElementById('admitted-std'), app_app_constants__WEBPACK_IMPORTED_MODULE_4__["Messages"].EXAMINATION_SCHEDULE_CSS, 'landscape');
        }
        if (rp === 'generateExcelReport') {
            this.schoolReportsService.exportToExcel('adm-report', 'fee-collection-report');
        }
    };
    ExaminationScheduleReportComponent.prototype.getClasses = function () {
        var _this = this;
        this.availableClasses = [];
        this.gradeSetupService.schoolAcademicClasses().subscribe(function (response) {
            if (response.listViews && response.listViews.length) {
                response.listViews.forEach(function (element) {
                    _this.availableClasses.push({
                        label: element.name,
                        value: element.id
                    });
                });
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    // on selection of class
    ExaminationScheduleReportComponent.prototype.onSelectClass = function (data) {
        var _this = this;
        this.availableSections = [];
        this.searchForm.controls.sectionId.setValue(null);
        if (!data.value) {
            return;
        }
        this.classTimetableService.classTimetableSectionsGet(data.value).subscribe(function (response) {
            if (response.classTimetableSectionsView != null) {
                if (response.classTimetableSectionsView.length) {
                    response.classTimetableSectionsView.map(function (x) {
                        _this.availableSections.push({ value: x.sectionId, label: x.sectionName + ' (' + x.boardName + ')' });
                    });
                }
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    ExaminationScheduleReportComponent.prototype.getGradingTerms = function () {
        var _this = this;
        if (!this.searchForm.value.classId || !this.searchForm.value.sectionId) {
            return;
        }
        this._gradingTermConfigurationService.gradingTermsDropdownByClassSectionGet(this.searchForm.value.classId, this.searchForm.value.sectionId).subscribe(function (response) {
            if (response != null && response.length) {
                var gardingTermsData_1 = [];
                response.forEach(function (element) {
                    gardingTermsData_1.push({
                        label: element.name,
                        value: element.id
                    });
                });
                _this.gradingTerms = gardingTermsData_1;
            }
            else {
                _this.gradingTerms = [];
            }
        });
    };
    ExaminationScheduleReportComponent.prototype.reset = function () {
        this.searchForm.reset();
        this.availableSections = [];
        this.resultApplicationReports = null;
    };
    ExaminationScheduleReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-examination-schedule-report',
            template: __webpack_require__(/*! ./examination-schedule-report.component.html */ "./src/app/modules/reports/examination-schedule-report/examination-schedule-report.component.html"),
            providers: [app_service_grading_service_api_garde_term_configuration_service__WEBPACK_IMPORTED_MODULE_9__["GardeTermConfigurationService"]],
            styles: [__webpack_require__(/*! ./examination-schedule-report.component.scss */ "./src/app/modules/reports/examination-schedule-report/examination-schedule-report.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_reports_reports_service__WEBPACK_IMPORTED_MODULE_2__["SchoolReportsService"], app_service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"], app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_7__["GradeSetupService"],
            app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_8__["ClassTimetableService"], app_service_grading_service_api_garde_term_configuration_service__WEBPACK_IMPORTED_MODULE_9__["GardeTermConfigurationService"]])
    ], ExaminationScheduleReportComponent);
    return ExaminationScheduleReportComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_5__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/reports/failed-payment-report/failed-payment-report.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/reports/failed-payment-report/failed-payment-report.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"px-sm-32 pt-sm-24\" #search>\n  <form [formGroup]=\"searchForm\" #ngForm=\"ngForm\">\n    <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pb-4\">\n      <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"36\"\n        class=\"icon-center pr-sm-12\">\n        <mat-label #studentId translate>Search Student Name</mat-label>\n        <input #studentName matInput placeholder=\"Search Students\" formControlName=\"studentSearch\"\n          aria-label=\"StudentName\" matInput [matAutocomplete]=\"studentNameSearch\">\n        <mat-icon class=\"grey-400-fg\" matSuffix>search</mat-icon>\n        <mat-autocomplete #studentNameSearch=\"matAutocomplete\" [displayWith]=\"displayFn\">\n          <mat-option *ngFor=\"let option of filterdStudents\" [value]=\"option\">\n            {{option.studentName}}\n            <span class=\"grey-400-fg\"> {{option.currentClassName}} {{option.currentSectionName}} </span>\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n    </div>\n\n    <div fxLayout=\"column\" fxLayout.gt-sm=\"row\">\n      <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"30\" class=\"pr-sm-12\">\n        <mat-label #section translate>Payment Status</mat-label>\n        <mat-select placeholder=\"Payment Status\" formControlName=\"paymentStatusId\">\n          <mat-option *ngIf=\"paymentStatus?.length\"></mat-option>\n          <mat-option *ngFor=\"let status of paymentStatus\" [value]=\"status.value\">\n            {{ status.label }}</mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" class=\"pr-sm-12\" fxFlex.gt-sm=\"30\">\n        <mat-label #paymentTypeId translate>Payment Mode</mat-label>\n        <mat-select formControlName=\"paymentMode\">\n          <mat-option *ngIf=\"paymentTypesList?.length\"></mat-option>\n          <mat-option *ngFor=\"let paymentTypes of paymentTypesList\" [value]=\"paymentTypes.id\">\n            {{ paymentTypes.name }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\">\n        <input matInput formControlName=\"inputDate\" [satDatepicker]=\"picker\" placeholder=\"Choose a date\">\n        <sat-datepicker #picker [rangeMode]=\"true\"> </sat-datepicker>\n        <sat-datepicker-toggle matSuffix [for]=\"picker\"></sat-datepicker-toggle>\n        <mat-label translate #dob>Date</mat-label>\n        <mat-error>\n          <app-validation [labelName]='dob.innerText' [validationControl]=\"searchForm.controls.dateOfBirth\"\n            [doValidate]=\"true\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n      <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"mr-20 pb-20\">\n        <button mat-raised-button translate color=\"primary\" class=\"text-uppercase ml-12\" (click)=\"reset()\" type=\"reset\">\n          Reset\n        </button>\n        <button type=\"submit\" mat-raised-button translate color=\"accent\" class=\"text-uppercase ml-12\"\n          (click)=\"getFailedPaymentReports()\">\n          Search\n        </button>\n      </div>\n    </div>\n  </form>\n</div>\n\n<app-custom-card *ngIf=\"!(resultApplicationReports?.failedPayments?.length) && ngForm.submitted\" [inputMessage]=\"'No Record Found'\">\n</app-custom-card>\n\n<div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"px-32 py-12\"\n  *ngIf=\"resultApplicationReports?.failedPayments?.length > 0\">\n  <button mat-stroked-button class=\"mr-12\" (click)=\"generateReport('generatePdfReport')\">\n    <mat-icon class=\"mr-4\">save_alt</mat-icon>Download PDF\n  </button>\n  <button mat-stroked-button (click)=\"generateReport('generateExcelReport')\">\n    <mat-icon class=\"mr-4\">save_alt</mat-icon> Download EXCEL\n  </button>\n</div>\n<div class='invoice-container' id=\"admitted-std\" *ngIf=\"resultApplicationReports?.failedPayments?.length > 0\" style=\"padding: 25px; padding-top: 0px;\">\n  <span class=\"dark-theme-color\" style=\"color:#fff\">A</span>\n  <div class='b flex-d-c invoice-body' style='overflow: hidden; '>\n    <h3 class=\"text-center text-uppercase\">Failed Payments Report</h3>\n    <div class=\"p-10 mb-20 main-title\">\n      <div class=\"left-align\">Report Generated On : {{ date }}</div>\n      <div class=\"right-align flex\" *ngIf=\"acadmicSession\">\n        {{acadmicSession?.name}} ({{acadmicSession?.startDate | date: 'MMM d, y'}} -\n        {{acadmicSession?.endDate | date: 'MMM d, y'}})\n      </div>\n    </div>\n    <div style=\"font-size: 18px;\" class=\"px-20 pt-20\">Failed Payment Details</div>\n    <div *ngIf=\"resultApplicationReports?.failedPayments?.length > 0\">\n      <app-af-report-table [inputData]=\"resultApplicationReports?.failedPayments\" [tableId]=\"'adm-report'\"\n        [columns]=\"columns\"></app-af-report-table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/reports/failed-payment-report/failed-payment-report.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/reports/failed-payment-report/failed-payment-report.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invoice-container {\n  padding: 0px 25px;\n  margin: 0px auto; }\n\n.b {\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.b-b {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.b-t {\n  border-top: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.b-r {\n  border-right: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.flex {\n  display: -webkit-box;\n  display: flex;\n  display: -webkit-flex; }\n\n.flex-d-c {\n  flex-direction: -webkit-column;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n\n.flex-d-r {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row; }\n\n.flex-a {\n  -webkit-place-content: center center;\n  place-content: center center;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.align-item-center {\n  -webkit-box-align: center;\n          align-items: center; }\n\n.w-50-p {\n  width: 50%; }\n\n.w-100-p {\n  width: 100%; }\n\n.p-20 {\n  padding: 20px; }\n\n.py-4 {\n  padding: 4px 0px; }\n\n.px-20 {\n  padding: 0px 20px; }\n\n.pt-30 {\n  padding-top: 30px; }\n\n.pt-20 {\n  padding-top: 20px; }\n\n.text-left {\n  text-align: left; }\n\n.text-right {\n  text-align: right; }\n\n.text-center {\n  text-align: center; }\n\n.text-uppercase {\n  text-transform: uppercase; }\n\n.result-h {\n  font-size: 20px;\n  padding: 20px;\n  margin: 2px; }\n\n.result-h span {\n  width: 80px;\n  display: inline-block; }\n\n.h2-c {\n  font-size: 20px; }\n\n.pr-8 {\n  padding-right: 8px; }\n\n.pb-20 {\n  padding-bottom: 20px; }\n\n.mb-20 {\n  margin-bottom: 20px; }\n\n.p-10 {\n  padding: 10px; }\n\n.pr-4rem {\n  padding-right: 4rem; }\n\n.right-align {\n  float: right; }\n\n.left-align {\n  float: left; }\n\n.logo-img {\n  max-width: 200px;\n  max-height: 100px; }\n\n.text-lg {\n  font-size: 25px; }\n\n.school-stamp {\n  width: 130px;\n  min-width: 130px;\n  max-width: 130px;\n  height: 130px;\n  border: 1px solid;\n  border-radius: 100%;\n  position: relative; }\n\n.school-stamp::after {\n  position: absolute;\n  top: 36%;\n  left: 0;\n  width: 100%;\n  content: \"School seal Logo\"; }\n\n.top-space {\n  padding-top: 1.4rem; }\n\n.order-list .list {\n  /* display:flex; \n        display: -webkit-flex; */\n  padding-right: 20px;\n  padding-bottom: 25px;\n  font-size: 18px;\n  list-style-type: decimal;\n  display: inline-block; }\n\n.order-list .list .text {\n  white-space: pre;\n  overflow: hidden; }\n\n.order-list .list .title {\n  white-space: nowrap;\n  margin-right: 20px;\n  display: inline-block; }\n\n.single-line {\n  width: 1050px;\n  white-space: nowrap;\n  overflow: hidden;\n  padding-top: 15px; }\n\n.order-list .list .in-words {\n  padding-right: 5px; }\n\n.main-title {\n  background: #5f5f5f;\n  display: list-item;\n  color: #fff; }\n\n.attendance {\n  width: 100%;\n  border-spacing: 0;\n  border-collapse: collapse; }\n\n.attendance thead {\n  background: #5f5f5f;\n  color: #fff; }\n\n.attendance tr th,\n.attendance tr td {\n  padding: 15px 0px;\n  text-align: center; }\n\n.attendance2 {\n  width: 100%;\n  border-spacing: 0;\n  border-collapse: collapse; }\n\n.attendance2 thead {\n  background: #5f5f5f;\n  color: #fff; }\n\n.attendance2 tr th {\n  padding: 15px 0px;\n  text-align: center; }\n\n.attendance2 tr td {\n  padding: 5px 0px; }\n\n.attendance2 tr td:first-child {\n  padding-left: 10px; }\n\n.attendance2 tr td:not(:first-child) {\n  text-align: center; }\n\n.attendance2 tr:nth-child(3n) {\n  border-bottom: 1px solid; }\n\n.outer-line {\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  margin: 5px 30px; }\n\n.outer-line .helper-table:first-child {\n  margin-top: 0px;\n  border-top: none; }\n\n.helper-table {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n  margin-bottom: 0px;\n  margin-top: 20px;\n  padding: 9px;\n  width: 100%;\n  border-top: 1px solid rgba(0, 0, 0, 0.3); }\n\n.total-table {\n  width: 100%;\n  border-top: 1px solid rgba(0, 0, 0, 0.3);\n  padding: 13px;\n  margin-top: 20px; }\n\n.total-table th:first-child {\n  text-align: left;\n  padding-left: 20px;\n  max-width: 55px; }\n\n.total-table th:last-child {\n  text-align: right;\n  padding-right: 20px; }\n\n.marks {\n  width: 100%;\n  border-spacing: 0; }\n\n.marks thead tr th {\n  padding: 10px 10px;\n  background: #dedede; }\n\n.marks tbody tr td {\n  padding: 8px 10px; }\n\n.marks.border-tr th,\n.marks.border-tr td {\n  border-right: 1px solid rgba(0, 0, 0, 0.3);\n  text-align: center;\n  font-size: 18px;\n  word-break: break-word;\n  /* text-transform: uppercase */ }\n\n.marks.border-tr td .content {\n  width: 12px;\n  margin: auto;\n  overflow: visible; }\n\n.m-w-200 {\n  /* width: 200px;\n        max-width: 200px; */\n  min-width: 200px; }\n\n.marks.border-tr th:last-child,\n.marks.border-tr td:last-child {\n  border-right: none; }\n\n.header-title2 {\n  background-color: #dedede;\n  padding: 8px;\n  font-size: 18px;\n  font-weight: bold; }\n\n.terms {\n  padding: 20px 55px 5px; }\n\n.tem-table {\n  padding: 0px 13%; }\n\n.fee-recipt tr th, .fee-recipt tr td {\n  max-width: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvcmVwb3J0cy9jb21tb24tcmVwb3J0cy5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3JlcG9ydHMvZmFpbGVkLXBheW1lbnQtcmVwb3J0L2ZhaWxlZC1wYXltZW50LXJlcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDSSxvQ0FBb0M7RUFDcEMseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksMkNBQTJDO0VBQzNDLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLHdDQUF3QztFQUN4Qyx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSwwQ0FBMEM7RUFDMUMseUJBQ0osRUFBQTs7QUFFQTtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLDhCQUE4QjtFQUM5Qiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksb0NBQW9DO0VBQ3BDLDRCQUE0QjtFQUU1Qix5QkFBbUI7VUFBbkIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0kseUJBQW1CO1VBQW5CLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLFVBQVUsRUFBQTs7QUFHZDtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSx5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QUFnQixFQUFBOztBQUdwQjtFQUNJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9yZXBvcnRzL2ZhaWxlZC1wYXltZW50LXJlcG9ydC9mYWlsZWQtcGF5bWVudC1yZXBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW52b2ljZS1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDBweCAyNXB4O1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICBcbn1cblxuLmIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMwKTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG4uYi1iIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzApO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbi5iLXQge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zMCk7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxuLmItciB7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzApO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2Vcbn1cblxuLmZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xufVxuXG4uZmxleC1kLWMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiAtd2Via2l0LWNvbHVtbjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZmxleC1kLXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5mbGV4LWEge1xuICAgIC13ZWJraXQtcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWxpZ24taXRlbS1jZW50ZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi53LTUwLXAge1xuICAgIHdpZHRoOiA1MCU7XG59XG5cbi53LTEwMC1wIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnAtMjAge1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5weS00IHtcbiAgICBwYWRkaW5nOiA0cHggMHB4O1xufVxuXG4ucHgtMjAge1xuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xufVxuXG4ucHQtMzAge1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuLnB0LTIwe1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4udGV4dC1sZWZ0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4udGV4dC1yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi50ZXh0LWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGV4dC11cHBlcmNhc2Uge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5yZXN1bHQtaCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbWFyZ2luOiAycHg7XG59XG5cbi5yZXN1bHQtaCBzcGFuIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5oMi1jIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5wci04IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgO1xufVxuXG4ucGItMjAge1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIDtcbn1cblxuLm1iLTIwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ucC0xMCB7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLnByLTRyZW0ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDRyZW07XG59XG5cbi5yaWdodC1hbGlnbiB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ubGVmdC1hbGlnbiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5sb2dvLWltZyB7XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICBtYXgtaGVpZ2h0OiAxMDBweFxufVxuXG4udGV4dC1sZyB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uc2Nob29sLXN0YW1wIHtcbiAgICB3aWR0aDogMTMwcHg7XG4gICAgbWluLXdpZHRoOiAxMzBweDtcbiAgICBtYXgtd2lkdGg6IDEzMHB4O1xuICAgIGhlaWdodDogMTMwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zY2hvb2wtc3RhbXA6OmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzNiU7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb250ZW50OiBcIlNjaG9vbCBzZWFsIExvZ29cIjtcbn1cblxuLnRvcC1zcGFjZSB7XG4gICAgcGFkZGluZy10b3A6IDEuNHJlbTtcbn1cblxuLm9yZGVyLWxpc3QgLmxpc3Qge1xuICAgIC8qIGRpc3BsYXk6ZmxleDsgXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDsgKi9cbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGRlY2ltYWw7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ub3JkZXItbGlzdCAubGlzdCAudGV4dCB7XG4gICAgd2hpdGUtc3BhY2U6IHByZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuXG59XG5cbi5vcmRlci1saXN0IC5saXN0IC50aXRsZSB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcbn1cblxuLnNpbmdsZS1saW5lIHtcbiAgICB3aWR0aDogMTA1MHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nLXRvcDogMTVweFxufVxuXG4ub3JkZXItbGlzdCAubGlzdCAuaW4td29yZHMge1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLm1haW4tdGl0bGUge1xuICAgIGJhY2tncm91bmQ6ICM1ZjVmNWY7XG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uYXR0ZW5kYW5jZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZVxufVxuXG4uYXR0ZW5kYW5jZSB0aGVhZCB7XG4gICAgYmFja2dyb3VuZDogIzVmNWY1ZjtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi5hdHRlbmRhbmNlIHRyIHRoLFxuLmF0dGVuZGFuY2UgdHIgdGQge1xuICAgIHBhZGRpbmc6IDE1cHggMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hdHRlbmRhbmNlMiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZVxufVxuXG4uYXR0ZW5kYW5jZTIgdGhlYWQge1xuICAgIGJhY2tncm91bmQ6ICM1ZjVmNWY7XG4gICAgY29sb3I6ICNmZmY7XG59XG4uYXR0ZW5kYW5jZTIgdHIgdGh7XG4gICAgcGFkZGluZzogMTVweCAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmF0dGVuZGFuY2UyIHRyIHRkIHtcbiAgICBwYWRkaW5nOiA1cHggMHB4OyAgICAgICAgIFxufVxuLmF0dGVuZGFuY2UyIHRyIHRkOmZpcnN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7ICAgICAgXG59XG4uYXR0ZW5kYW5jZTIgdHIgdGQ6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hdHRlbmRhbmNlMiB0cjpudGgtY2hpbGQoM24pIHsgXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQ7XG4gICB9XG5cbiAgIC5vdXRlci1saW5lIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zMCk7XG4gICAgbWFyZ2luOiA1cHggMzBweDtcbn1cbi5vdXRlci1saW5lIC5oZWxwZXItdGFibGU6Zmlyc3QtY2hpbGR7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG59XG5cbi5oZWxwZXItdGFibGUge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zMCk7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZzogOXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zMCk7XG59XG5cbi50b3RhbC10YWJsZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzApOyBcbiAgICBwYWRkaW5nOiAxM3B4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7ICBcbn1cbi50b3RhbC10YWJsZSB0aDpmaXJzdC1jaGlsZHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBtYXgtd2lkdGg6IDU1cHg7XG59XG4udG90YWwtdGFibGUgdGg6bGFzdC1jaGlsZHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuIC5tYXJrcyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICB9XG4gICAgXG4gICAgLm1hcmtzIHRoZWFkIHRyIHRoIHtcbiAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgICAgICA7XG4gICAgICAgIGJhY2tncm91bmQ6ICNkZWRlZGU7XG4gICAgfVxuICAgIFxuICAgIC5tYXJrcyB0Ym9keSB0ciB0ZCB7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxMHB4XG4gICAgfVxuICAgIFxuICAgIC5tYXJrcy5ib3JkZXItdHIgdGgsXG4gICAgLm1hcmtzLmJvcmRlci10ciB0ZCB7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMwKTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgICAgIC8qIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgKi9cbiAgICB9XG4gICAgXG4gICAgLm1hcmtzLmJvcmRlci10ciB0ZCAuY29udGVudCB7XG4gICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlXG4gICAgfVxuICAgIFxuICAgIC5tLXctMjAwIHtcbiAgICAgICAgLyogd2lkdGg6IDIwMHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDIwMHB4OyAqL1xuICAgICAgICBtaW4td2lkdGg6IDIwMHB4XG4gICAgfSBcbiAgICBcbiAgICAubWFya3MuYm9yZGVyLXRyIHRoOmxhc3QtY2hpbGQsXG4gICAgLm1hcmtzLmJvcmRlci10ciB0ZDpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lXG4gICAgfVxuICAgIC5oZWFkZXItdGl0bGUyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVkZWRlO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRcbn1cbi50ZXJtc3tcbiAgICBwYWRkaW5nOiAyMHB4IDU1cHggNXB4O1xufVxuICAgIC50ZW0tdGFibGV7XG4gICAgICAgIHBhZGRpbmc6IDBweCAxMyU7XG4gICAgfVxuXG4gICAgLmZlZS1yZWNpcHQgdHIgdGgsIC5mZWUtcmVjaXB0IHRyIHRke1xuICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIH0iLCIuaW52b2ljZS1jb250YWluZXIge1xuICBwYWRkaW5nOiAwcHggMjVweDtcbiAgbWFyZ2luOiAwcHggYXV0bzsgfVxuXG4uYiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgfVxuXG4uYi1iIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgfVxuXG4uYi10IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgfVxuXG4uYi1yIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyB9XG5cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4OyB9XG5cbi5mbGV4LWQtYyB7XG4gIGZsZXgtZGlyZWN0aW9uOiAtd2Via2l0LWNvbHVtbjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuXG4uZmxleC1kLXIge1xuICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XG5cbi5mbGV4LWEge1xuICAtd2Via2l0LXBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuXG4uYWxpZ24taXRlbS1jZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG5cbi53LTUwLXAge1xuICB3aWR0aDogNTAlOyB9XG5cbi53LTEwMC1wIHtcbiAgd2lkdGg6IDEwMCU7IH1cblxuLnAtMjAge1xuICBwYWRkaW5nOiAyMHB4OyB9XG5cbi5weS00IHtcbiAgcGFkZGluZzogNHB4IDBweDsgfVxuXG4ucHgtMjAge1xuICBwYWRkaW5nOiAwcHggMjBweDsgfVxuXG4ucHQtMzAge1xuICBwYWRkaW5nLXRvcDogMzBweDsgfVxuXG4ucHQtMjAge1xuICBwYWRkaW5nLXRvcDogMjBweDsgfVxuXG4udGV4dC1sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxuXG4udGV4dC1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0OyB9XG5cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4udGV4dC11cHBlcmNhc2Uge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XG5cbi5yZXN1bHQtaCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiAycHg7IH1cblxuLnJlc3VsdC1oIHNwYW4ge1xuICB3aWR0aDogODBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG5cbi5oMi1jIHtcbiAgZm9udC1zaXplOiAyMHB4OyB9XG5cbi5wci04IHtcbiAgcGFkZGluZy1yaWdodDogOHB4OyB9XG5cbi5wYi0yMCB7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4OyB9XG5cbi5tYi0yMCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cblxuLnAtMTAge1xuICBwYWRkaW5nOiAxMHB4OyB9XG5cbi5wci00cmVtIHtcbiAgcGFkZGluZy1yaWdodDogNHJlbTsgfVxuXG4ucmlnaHQtYWxpZ24ge1xuICBmbG9hdDogcmlnaHQ7IH1cblxuLmxlZnQtYWxpZ24ge1xuICBmbG9hdDogbGVmdDsgfVxuXG4ubG9nby1pbWcge1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBtYXgtaGVpZ2h0OiAxMDBweDsgfVxuXG4udGV4dC1sZyB7XG4gIGZvbnQtc2l6ZTogMjVweDsgfVxuXG4uc2Nob29sLXN0YW1wIHtcbiAgd2lkdGg6IDEzMHB4O1xuICBtaW4td2lkdGg6IDEzMHB4O1xuICBtYXgtd2lkdGg6IDEzMHB4O1xuICBoZWlnaHQ6IDEzMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbi5zY2hvb2wtc3RhbXA6OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM2JTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbnRlbnQ6IFwiU2Nob29sIHNlYWwgTG9nb1wiOyB9XG5cbi50b3Atc3BhY2Uge1xuICBwYWRkaW5nLXRvcDogMS40cmVtOyB9XG5cbi5vcmRlci1saXN0IC5saXN0IHtcbiAgLyogZGlzcGxheTpmbGV4OyBcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4OyAqL1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaXN0LXN0eWxlLXR5cGU6IGRlY2ltYWw7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuXG4ub3JkZXItbGlzdCAubGlzdCAudGV4dCB7XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG4gIG92ZXJmbG93OiBoaWRkZW47IH1cblxuLm9yZGVyLWxpc3QgLmxpc3QgLnRpdGxlIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cblxuLnNpbmdsZS1saW5lIHtcbiAgd2lkdGg6IDEwNTBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZy10b3A6IDE1cHg7IH1cblxuLm9yZGVyLWxpc3QgLmxpc3QgLmluLXdvcmRzIHtcbiAgcGFkZGluZy1yaWdodDogNXB4OyB9XG5cbi5tYWluLXRpdGxlIHtcbiAgYmFja2dyb3VuZDogIzVmNWY1ZjtcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xuICBjb2xvcjogI2ZmZjsgfVxuXG4uYXR0ZW5kYW5jZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgfVxuXG4uYXR0ZW5kYW5jZSB0aGVhZCB7XG4gIGJhY2tncm91bmQ6ICM1ZjVmNWY7XG4gIGNvbG9yOiAjZmZmOyB9XG5cbi5hdHRlbmRhbmNlIHRyIHRoLFxuLmF0dGVuZGFuY2UgdHIgdGQge1xuICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi5hdHRlbmRhbmNlMiB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgfVxuXG4uYXR0ZW5kYW5jZTIgdGhlYWQge1xuICBiYWNrZ3JvdW5kOiAjNWY1ZjVmO1xuICBjb2xvcjogI2ZmZjsgfVxuXG4uYXR0ZW5kYW5jZTIgdHIgdGgge1xuICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi5hdHRlbmRhbmNlMiB0ciB0ZCB7XG4gIHBhZGRpbmc6IDVweCAwcHg7IH1cblxuLmF0dGVuZGFuY2UyIHRyIHRkOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4OyB9XG5cbi5hdHRlbmRhbmNlMiB0ciB0ZDpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4uYXR0ZW5kYW5jZTIgdHI6bnRoLWNoaWxkKDNuKSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDsgfVxuXG4ub3V0ZXItbGluZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgbWFyZ2luOiA1cHggMzBweDsgfVxuXG4ub3V0ZXItbGluZSAuaGVscGVyLXRhYmxlOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBib3JkZXItdG9wOiBub25lOyB9XG5cbi5oZWxwZXItdGFibGUge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmc6IDlweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7IH1cblxuLnRvdGFsLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHBhZGRpbmc6IDEzcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7IH1cblxuLnRvdGFsLXRhYmxlIHRoOmZpcnN0LWNoaWxkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBtYXgtd2lkdGg6IDU1cHg7IH1cblxuLnRvdGFsLXRhYmxlIHRoOmxhc3QtY2hpbGQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMjBweDsgfVxuXG4ubWFya3Mge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7IH1cblxuLm1hcmtzIHRoZWFkIHRyIHRoIHtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZGVkZWRlOyB9XG5cbi5tYXJrcyB0Ym9keSB0ciB0ZCB7XG4gIHBhZGRpbmc6IDhweCAxMHB4OyB9XG5cbi5tYXJrcy5ib3JkZXItdHIgdGgsXG4ubWFya3MuYm9yZGVyLXRyIHRkIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgLyogdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAqLyB9XG5cbi5tYXJrcy5ib3JkZXItdHIgdGQgLmNvbnRlbnQge1xuICB3aWR0aDogMTJweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBvdmVyZmxvdzogdmlzaWJsZTsgfVxuXG4ubS13LTIwMCB7XG4gIC8qIHdpZHRoOiAyMDBweDtcbiAgICAgICAgbWF4LXdpZHRoOiAyMDBweDsgKi9cbiAgbWluLXdpZHRoOiAyMDBweDsgfVxuXG4ubWFya3MuYm9yZGVyLXRyIHRoOmxhc3QtY2hpbGQsXG4ubWFya3MuYm9yZGVyLXRyIHRkOmxhc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IG5vbmU7IH1cblxuLmhlYWRlci10aXRsZTIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVkZWRlO1xuICBwYWRkaW5nOiA4cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cblxuLnRlcm1zIHtcbiAgcGFkZGluZzogMjBweCA1NXB4IDVweDsgfVxuXG4udGVtLXRhYmxlIHtcbiAgcGFkZGluZzogMHB4IDEzJTsgfVxuXG4uZmVlLXJlY2lwdCB0ciB0aCwgLmZlZS1yZWNpcHQgdHIgdGQge1xuICBtYXgtd2lkdGg6IDIwMHB4OyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/reports/failed-payment-report/failed-payment-report.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/reports/failed-payment-report/failed-payment-report.component.ts ***!
  \******************************************************************************************/
/*! exports provided: FailedPaymentReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FailedPaymentReportComponent", function() { return FailedPaymentReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_service_reports_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/service/reports/reports.service */ "./src/app/service/reports/reports.service.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/grading-service/api/grade-setup.service */ "./src/app/service/grading-service/api/grade-setup.service.ts");
/* harmony import */ var app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/class-schedules/class-time-table.service */ "./src/app/service/class-schedules/class-time-table.service.ts");
/* harmony import */ var app_service_academic_service_api_student_database_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/academic-service/api/student-database.service */ "./src/app/service/academic-service/api/student-database.service.ts");
/* harmony import */ var app_service_invoice_invoice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/invoice/invoice.service */ "./src/app/service/invoice/invoice.service.ts");
/* harmony import */ var app_service_academic_service_api_status_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/academic-service/api/status.service */ "./src/app/service/academic-service/api/status.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_shared_custom_date_adaptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/shared/custom-date-adaptor */ "./src/app/shared/custom-date-adaptor.ts");
/* harmony import */ var saturn_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! saturn-datepicker */ "./node_modules/saturn-datepicker/fesm5/saturn-datepicker.js");














var FailedPaymentReportComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FailedPaymentReportComponent, _super);
    function FailedPaymentReportComponent(schoolReportsService, commonService, gradeSetupService, classTimetableService, studentService, cd, invoiceService, statusService) {
        var _this = _super.call(this) || this;
        _this.schoolReportsService = schoolReportsService;
        _this.commonService = commonService;
        _this.gradeSetupService = gradeSetupService;
        _this.classTimetableService = classTimetableService;
        _this.studentService = studentService;
        _this.cd = cd;
        _this.invoiceService = invoiceService;
        _this.statusService = statusService;
        return _this;
    }
    FailedPaymentReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setColumns();
        this.paymentTypes();
        this.paymentStatuses();
        this.resultApplicationReports = {
            failedPayments: []
        };
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroup"]({
            studentSearch: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](''),
            paymentStatusId: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](null),
            paymentMode: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](null),
            classId: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](null),
            sectionId: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](null),
            inputDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](null)
        });
        this.searchForm.controls['studentSearch'].valueChanges.debounceTime(200).subscribe(function (name) {
            name = typeof (name) === 'string' ? name.trim() : name;
            if (name !== null && name.length >= 3) {
                _this.filterdStudents = [];
                _this.studentService.studentNamesBaseOnAcademicSession(parseInt(_this.getTokenParam('_as'), 10), null, null, null, name).subscribe(function (res) {
                    _this.filterdStudents = (res.studentsList.length > 0) ? res.studentsList : [];
                    _this.cd.detectChanges();
                });
            }
            else {
                _this.filterdStudents = [];
                _this.cd.detectChanges();
            }
        });
    };
    FailedPaymentReportComponent.prototype.setColumns = function () {
        this.columns = [
            { field: 'paymentDate', header: 'Date', sort: false, dataKey: 'paymentDate' },
            { field: 'feeAccount', header: 'Fee Account', sort: false, dataKey: 'feeAccount' },
            { field: 'studentInformatioin', header: 'Student Informatioin', sort: false, dataKey: 'studentInformatioin' },
            { field: 'paymentMode', header: 'Payment Mode', sort: false, dataKey: 'paymentMode' },
            { field: 'amount', header: 'Amount', sort: false, dataKey: 'paymentMode' },
            { field: 'paymentStatus', header: 'Status', sort: false, dataKey: 'paymentStatus' },
            { field: 'additionalInformation', header: 'Additional Information', sort: false, dataKey: 'additionalInformation' },
            { field: 'receiptNumber', header: 'Receipt Number', sort: false, dataKey: 'receiptNumber' },
            { field: 'paymentEntryByAndDate', header: 'Entry User', sort: false, dataKey: 'paymentEntryByAndDate' }
        ];
    };
    FailedPaymentReportComponent.prototype.getFailedPaymentReports = function () {
        var _this = this;
        var beginDate = null;
        var endDate = null;
        var studentId = '';
        if (this.searchForm.value.inputDate != null) {
            beginDate = this.searchForm.value.inputDate.begin.format(app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].API_DATE_PATTERN);
            endDate = this.searchForm.value.inputDate.end.format(app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].API_DATE_PATTERN);
        }
        if (this.searchForm.value.studentSearch) {
            studentId = this.searchForm.value.studentSearch.schoolAcademicSessionStudentId;
        }
        this.schoolReportsService.failedPaymentsReport(beginDate, endDate, studentId, this.searchForm.value.paymentStatusId, this.searchForm.value.paymentMode).subscribe(function (res) {
            if (res.failedPayments.length) {
                _this.resultApplicationReports = res;
                _this.resultApplicationReports.failedPayments.
                    push({
                    paymentDate: 'Total: ', paymentMode: _this.resultApplicationReports.failedPaymentsAmount.totalAmount, paymentEntryByAndDate: _this.resultApplicationReports.failedPaymentsAmount.totalReceipts
                });
            }
            else {
                _this.resultApplicationReports = [];
            }
        });
    };
    FailedPaymentReportComponent.prototype.generateReport = function (rp) {
        if (rp === 'generatePdfReport') {
            this.schoolReportsService.generatePdf(document.getElementById('admitted-std'), app_app_constants__WEBPACK_IMPORTED_MODULE_5__["Messages"].COMMON_TABLE_CSS);
        }
        if (rp === 'generateExcelReport') {
            this.schoolReportsService.exportToExcel('adm-report', 'admitted_std_report');
        }
    };
    FailedPaymentReportComponent.prototype.reset = function () {
        this.searchForm.reset();
        this.resultApplicationReports = null;
    };
    FailedPaymentReportComponent.prototype.paymentTypes = function () {
        var _this = this;
        this.paymentTypesList = [];
        this.invoiceService.paymentTypes().subscribe(function (data) {
            if (data.commonViewModel) {
                if (app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].PARENT === _this.getTokenParam('_ut')) {
                    _this.paymentTypesList = data.commonViewModel.filter(function (e) { return e.code !== app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].PAYMENT_TYPE_ONLINE; });
                }
                else {
                    _this.paymentTypesList = data.commonViewModel;
                }
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    FailedPaymentReportComponent.prototype.paymentStatuses = function () {
        var _this = this;
        this.paymentStatus = [];
        this.statusService.paymentStatuses(app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].PAYMENT_STATUS_CATEGORY_CODE).subscribe(function (res) {
            if (res.listViews && res.listViews.length) {
                res.listViews.forEach(function (element) {
                    _this.paymentStatus.push({
                        label: element.name,
                        value: element.id
                    });
                });
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    FailedPaymentReportComponent.prototype.displayFn = function (data) {
        return data ? data.studentName : undefined;
    };
    FailedPaymentReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-failed-payment-report',
            template: __webpack_require__(/*! ./failed-payment-report.component.html */ "./src/app/modules/reports/failed-payment-report/failed-payment-report.component.html"),
            providers: [app_service_academic_service_api_status_service__WEBPACK_IMPORTED_MODULE_10__["StatusService"], app_service_invoice_invoice_service__WEBPACK_IMPORTED_MODULE_9__["InvoiceService"],
                { provide: saturn_datepicker__WEBPACK_IMPORTED_MODULE_13__["DateAdapter"], useClass: app_shared_custom_date_adaptor__WEBPACK_IMPORTED_MODULE_12__["CustomDateAdapter"], deps: [saturn_datepicker__WEBPACK_IMPORTED_MODULE_13__["MAT_DATE_LOCALE"]] },
                { provide: saturn_datepicker__WEBPACK_IMPORTED_MODULE_13__["MAT_DATE_FORMATS"], useValue: app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_4__["AF_DATE_FORMATS"] }],
            styles: [__webpack_require__(/*! ./failed-payment-report.component.scss */ "./src/app/modules/reports/failed-payment-report/failed-payment-report.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_reports_reports_service__WEBPACK_IMPORTED_MODULE_2__["SchoolReportsService"], app_service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"], app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_6__["GradeSetupService"],
            app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_7__["ClassTimetableService"], app_service_academic_service_api_student_database_service__WEBPACK_IMPORTED_MODULE_8__["StudentDatabaseService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            app_service_invoice_invoice_service__WEBPACK_IMPORTED_MODULE_9__["InvoiceService"], app_service_academic_service_api_status_service__WEBPACK_IMPORTED_MODULE_10__["StatusService"]])
    ], FailedPaymentReportComponent);
    return FailedPaymentReportComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_4__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/reports/fee-collection-report/fee-collection-report.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/reports/fee-collection-report/fee-collection-report.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"px-sm-32 pt-sm-24\" #search>\n  <form [formGroup]=\"searchForm\">\n    <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pb-4\">\n      <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"36\"\n        class=\"icon-center pr-sm-12\">\n        <mat-label #studentId translate>Search Student Name</mat-label>\n        <input #studentName matInput placeholder=\"Search Students\" formControlName=\"studentSearch\"\n          aria-label=\"StudentName\" matInput [matAutocomplete]=\"studentNameSearch\">\n        <mat-icon class=\"grey-400-fg\" matSuffix>search</mat-icon>\n        <mat-autocomplete #studentNameSearch=\"matAutocomplete\" [displayWith]=\"displayFn\">\n          <mat-option *ngFor=\"let option of filterdStudents\" [value]=\"option\">\n            {{option.studentName}}\n            <span class=\"grey-400-fg\"> {{option.currentClassName}} {{option.currentSectionName}} </span>\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n      <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"32\" class=\"pr-sm-12\">\n        <mat-label translate #class>Class</mat-label>\n        <mat-select formControlName=\"classId\" (selectionChange)=\"onSelectClass($event)\">\n          <mat-option *ngIf=\"classes?.length\"></mat-option>\n          <mat-option *ngFor=\"let class of classes\" [value]=\"class.value\">\n            {{ class.label }}</mat-option>\n        </mat-select>\n        <mat-error>\n          <app-validation [labelName]='class.innerText' [validationControl]=\"searchForm.controls.classId\"\n            [doValidate]=\"true\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field fxFlexFill appearance=\"outline\" class=\"pr-sm-12\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"32\">\n        <mat-label translate #section>Section</mat-label>\n        <mat-select formControlName=\"sectionId\">\n          <mat-option *ngIf=\"sections?.length\"></mat-option>\n          <mat-option *ngFor=\"let section of sections\" [value]=\"section.value\">\n            {{ section.label }}</mat-option>\n        </mat-select>\n        <mat-error>\n          <app-validation [labelName]='section.innerText' [validationControl]=\"searchForm.controls.sectionId\"\n            [doValidate]=\"true\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n    </div>\n\n    <div fxLayout=\"column\" fxLayout.gt-sm=\"row\">\n      <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"30\" class=\"pr-sm-12\">\n        <mat-label #section translate>Payment Status</mat-label>\n        <mat-select placeholder=\"Payment Status\" formControlName=\"paymentStatusId\">\n          <mat-option *ngIf=\"paymentStatus?.length\"></mat-option>\n          <mat-option *ngFor=\"let status of paymentStatus\" [value]=\"status.value\">\n            {{ status.label }}</mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" class=\"pr-sm-12\" fxFlex.gt-sm=\"30\">\n        <mat-label #paymentTypeId translate>Payment Mode</mat-label>\n        <mat-select formControlName=\"paymentMode\">\n          <mat-option *ngIf=\"paymentTypesList?.length\"></mat-option>\n          <mat-option *ngFor=\"let paymentTypes of paymentTypesList\" [value]=\"paymentTypes.code\">\n            {{ paymentTypes.name }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\">\n        <input matInput formControlName=\"inputDate\" [satDatepicker]=\"picker\" placeholder=\"Choose a date\">\n        <sat-datepicker #picker [rangeMode]=\"true\"> </sat-datepicker>\n        <sat-datepicker-toggle matSuffix [for]=\"picker\"></sat-datepicker-toggle>\n        <mat-label translate #dob>Date</mat-label>\n        <mat-error>\n          <app-validation [labelName]='dob.innerText' [validationControl]=\"searchForm.controls.dateOfBirth\"\n            [doValidate]=\"true\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n      <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"mr-20 pb-20\">\n        <button mat-raised-button translate color=\"primary\" class=\"text-uppercase ml-12\" (click)=\"reset()\" type=\"reset\">\n          Reset\n        </button>\n        <button type=\"submit\" mat-raised-button translate color=\"accent\" class=\"text-uppercase ml-12\"\n          (click)=\"getFeeCollectionReport()\">\n          Search\n        </button>\n      </div>\n    </div>\n  </form>\n</div>\n<app-custom-card *ngIf=\"((resultApplicationReports) && !(resultApplicationReports?.feeCollections?.length))\"\n  [inputMessage]=\"'No Record Found'\">\n</app-custom-card>\n<div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"px-32 py-12\"\n  *ngIf=\"(resultApplicationReports?.feeCollections?.length)\">\n  <button mat-stroked-button class=\"mr-12\" (click)=\"generateReport('generatePdfReport')\">\n    <mat-icon class=\"mr-4\">save_alt</mat-icon>Download PDF\n  </button>\n  <button mat-stroked-button (click)=\"generateReport('generateExcelReport')\">\n    <mat-icon class=\"mr-4\">save_alt</mat-icon> Download EXCEL\n  </button>\n</div>\n<div class='invoice-container' id=\"admitted-std\" *ngIf=\"(resultApplicationReports?.feeCollections?.length)\" style=\"padding: 25px; padding-top: 0px;\">\n  <span class=\"dark-theme-color\" style=\"color:#fff\">A</span>\n  <div class='b flex-d-c invoice-body' style='overflow: hidden; '>\n    <h3 class=\"text-center text-uppercase\">Fee Collection Report</h3>\n    <div class=\"p-10 mb-20 main-title\">\n      <div class=\"left-align\">Report Generated On : {{ date }}</div>\n      <div class=\"right-align flex\" *ngIf=\"acadmicSession\">\n        {{acadmicSession?.name}} ({{acadmicSession?.startDate | date: 'MMM d, y'}} -\n        {{acadmicSession?.endDate | date: 'MMM d, y'}})\n      </div>\n    </div>\n    <div class=\"px-20 pt-20\">Fee Collection Details</div>\n    <div class=\"p-10\" *ngIf=\"resultApplicationReports\">\n      <app-af-report-table [inputData]=\"resultApplicationReports?.feeCollections\" [tableId]=\"'adm-report'\"\n        [columns]=\"columns\"></app-af-report-table>\n    </div>\n    <div class=\"px-20 pt-20\">Fee Collection Summary</div>\n    <div class=\"p-10\" *ngIf=\"resultApplicationReports\">\n      <app-af-report-table [inputData]=\"resultApplicationReports?.feeCollectionSummary\" [tableId]=\"'adm-report'\"\n        [columns]=\"summaryColumns\"></app-af-report-table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/reports/fee-collection-report/fee-collection-report.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/reports/fee-collection-report/fee-collection-report.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invoice-container {\n  padding: 0px 25px;\n  margin: 0px auto; }\n\n.b {\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.b-b {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.b-t {\n  border-top: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.b-r {\n  border-right: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.flex {\n  display: -webkit-box;\n  display: flex;\n  display: -webkit-flex; }\n\n.flex-d-c {\n  flex-direction: -webkit-column;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n\n.flex-d-r {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row; }\n\n.flex-a {\n  -webkit-place-content: center center;\n  place-content: center center;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.align-item-center {\n  -webkit-box-align: center;\n          align-items: center; }\n\n.w-50-p {\n  width: 50%; }\n\n.w-100-p {\n  width: 100%; }\n\n.p-20 {\n  padding: 20px; }\n\n.py-4 {\n  padding: 4px 0px; }\n\n.px-20 {\n  padding: 0px 20px; }\n\n.pt-30 {\n  padding-top: 30px; }\n\n.pt-20 {\n  padding-top: 20px; }\n\n.text-left {\n  text-align: left; }\n\n.text-right {\n  text-align: right; }\n\n.text-center {\n  text-align: center; }\n\n.text-uppercase {\n  text-transform: uppercase; }\n\n.result-h {\n  font-size: 20px;\n  padding: 20px;\n  margin: 2px; }\n\n.result-h span {\n  width: 80px;\n  display: inline-block; }\n\n.h2-c {\n  font-size: 20px; }\n\n.pr-8 {\n  padding-right: 8px; }\n\n.pb-20 {\n  padding-bottom: 20px; }\n\n.mb-20 {\n  margin-bottom: 20px; }\n\n.p-10 {\n  padding: 10px; }\n\n.pr-4rem {\n  padding-right: 4rem; }\n\n.right-align {\n  float: right; }\n\n.left-align {\n  float: left; }\n\n.logo-img {\n  max-width: 200px;\n  max-height: 100px; }\n\n.text-lg {\n  font-size: 25px; }\n\n.school-stamp {\n  width: 130px;\n  min-width: 130px;\n  max-width: 130px;\n  height: 130px;\n  border: 1px solid;\n  border-radius: 100%;\n  position: relative; }\n\n.school-stamp::after {\n  position: absolute;\n  top: 36%;\n  left: 0;\n  width: 100%;\n  content: \"School seal Logo\"; }\n\n.top-space {\n  padding-top: 1.4rem; }\n\n.order-list .list {\n  /* display:flex; \n        display: -webkit-flex; */\n  padding-right: 20px;\n  padding-bottom: 25px;\n  font-size: 18px;\n  list-style-type: decimal;\n  display: inline-block; }\n\n.order-list .list .text {\n  white-space: pre;\n  overflow: hidden; }\n\n.order-list .list .title {\n  white-space: nowrap;\n  margin-right: 20px;\n  display: inline-block; }\n\n.single-line {\n  width: 1050px;\n  white-space: nowrap;\n  overflow: hidden;\n  padding-top: 15px; }\n\n.order-list .list .in-words {\n  padding-right: 5px; }\n\n.main-title {\n  background: #5f5f5f;\n  display: list-item;\n  color: #fff; }\n\n.attendance {\n  width: 100%;\n  border-spacing: 0;\n  border-collapse: collapse; }\n\n.attendance thead {\n  background: #5f5f5f;\n  color: #fff; }\n\n.attendance tr th,\n.attendance tr td {\n  padding: 15px 0px;\n  text-align: center; }\n\n.attendance2 {\n  width: 100%;\n  border-spacing: 0;\n  border-collapse: collapse; }\n\n.attendance2 thead {\n  background: #5f5f5f;\n  color: #fff; }\n\n.attendance2 tr th {\n  padding: 15px 0px;\n  text-align: center; }\n\n.attendance2 tr td {\n  padding: 5px 0px; }\n\n.attendance2 tr td:first-child {\n  padding-left: 10px; }\n\n.attendance2 tr td:not(:first-child) {\n  text-align: center; }\n\n.attendance2 tr:nth-child(3n) {\n  border-bottom: 1px solid; }\n\n.outer-line {\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  margin: 5px 30px; }\n\n.outer-line .helper-table:first-child {\n  margin-top: 0px;\n  border-top: none; }\n\n.helper-table {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n  margin-bottom: 0px;\n  margin-top: 20px;\n  padding: 9px;\n  width: 100%;\n  border-top: 1px solid rgba(0, 0, 0, 0.3); }\n\n.total-table {\n  width: 100%;\n  border-top: 1px solid rgba(0, 0, 0, 0.3);\n  padding: 13px;\n  margin-top: 20px; }\n\n.total-table th:first-child {\n  text-align: left;\n  padding-left: 20px;\n  max-width: 55px; }\n\n.total-table th:last-child {\n  text-align: right;\n  padding-right: 20px; }\n\n.marks {\n  width: 100%;\n  border-spacing: 0; }\n\n.marks thead tr th {\n  padding: 10px 10px;\n  background: #dedede; }\n\n.marks tbody tr td {\n  padding: 8px 10px; }\n\n.marks.border-tr th,\n.marks.border-tr td {\n  border-right: 1px solid rgba(0, 0, 0, 0.3);\n  text-align: center;\n  font-size: 18px;\n  word-break: break-word;\n  /* text-transform: uppercase */ }\n\n.marks.border-tr td .content {\n  width: 12px;\n  margin: auto;\n  overflow: visible; }\n\n.m-w-200 {\n  /* width: 200px;\n        max-width: 200px; */\n  min-width: 200px; }\n\n.marks.border-tr th:last-child,\n.marks.border-tr td:last-child {\n  border-right: none; }\n\n.header-title2 {\n  background-color: #dedede;\n  padding: 8px;\n  font-size: 18px;\n  font-weight: bold; }\n\n.terms {\n  padding: 20px 55px 5px; }\n\n.tem-table {\n  padding: 0px 13%; }\n\n.fee-recipt tr th, .fee-recipt tr td {\n  max-width: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvcmVwb3J0cy9jb21tb24tcmVwb3J0cy5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3JlcG9ydHMvZmVlLWNvbGxlY3Rpb24tcmVwb3J0L2ZlZS1jb2xsZWN0aW9uLXJlcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDSSxvQ0FBb0M7RUFDcEMseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksMkNBQTJDO0VBQzNDLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLHdDQUF3QztFQUN4Qyx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSwwQ0FBMEM7RUFDMUMseUJBQ0osRUFBQTs7QUFFQTtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLDhCQUE4QjtFQUM5Qiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksb0NBQW9DO0VBQ3BDLDRCQUE0QjtFQUU1Qix5QkFBbUI7VUFBbkIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0kseUJBQW1CO1VBQW5CLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLFVBQVUsRUFBQTs7QUFHZDtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSx5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QUFnQixFQUFBOztBQUdwQjtFQUNJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9yZXBvcnRzL2ZlZS1jb2xsZWN0aW9uLXJlcG9ydC9mZWUtY29sbGVjdGlvbi1yZXBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW52b2ljZS1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDBweCAyNXB4O1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICBcbn1cblxuLmIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMwKTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG4uYi1iIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzApO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbi5iLXQge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zMCk7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxuLmItciB7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzApO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2Vcbn1cblxuLmZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xufVxuXG4uZmxleC1kLWMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiAtd2Via2l0LWNvbHVtbjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZmxleC1kLXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5mbGV4LWEge1xuICAgIC13ZWJraXQtcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWxpZ24taXRlbS1jZW50ZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi53LTUwLXAge1xuICAgIHdpZHRoOiA1MCU7XG59XG5cbi53LTEwMC1wIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnAtMjAge1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5weS00IHtcbiAgICBwYWRkaW5nOiA0cHggMHB4O1xufVxuXG4ucHgtMjAge1xuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xufVxuXG4ucHQtMzAge1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuLnB0LTIwe1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4udGV4dC1sZWZ0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4udGV4dC1yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi50ZXh0LWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGV4dC11cHBlcmNhc2Uge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5yZXN1bHQtaCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbWFyZ2luOiAycHg7XG59XG5cbi5yZXN1bHQtaCBzcGFuIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5oMi1jIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5wci04IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgO1xufVxuXG4ucGItMjAge1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIDtcbn1cblxuLm1iLTIwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ucC0xMCB7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLnByLTRyZW0ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDRyZW07XG59XG5cbi5yaWdodC1hbGlnbiB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ubGVmdC1hbGlnbiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5sb2dvLWltZyB7XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICBtYXgtaGVpZ2h0OiAxMDBweFxufVxuXG4udGV4dC1sZyB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uc2Nob29sLXN0YW1wIHtcbiAgICB3aWR0aDogMTMwcHg7XG4gICAgbWluLXdpZHRoOiAxMzBweDtcbiAgICBtYXgtd2lkdGg6IDEzMHB4O1xuICAgIGhlaWdodDogMTMwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zY2hvb2wtc3RhbXA6OmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzNiU7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb250ZW50OiBcIlNjaG9vbCBzZWFsIExvZ29cIjtcbn1cblxuLnRvcC1zcGFjZSB7XG4gICAgcGFkZGluZy10b3A6IDEuNHJlbTtcbn1cblxuLm9yZGVyLWxpc3QgLmxpc3Qge1xuICAgIC8qIGRpc3BsYXk6ZmxleDsgXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDsgKi9cbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGRlY2ltYWw7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ub3JkZXItbGlzdCAubGlzdCAudGV4dCB7XG4gICAgd2hpdGUtc3BhY2U6IHByZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuXG59XG5cbi5vcmRlci1saXN0IC5saXN0IC50aXRsZSB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcbn1cblxuLnNpbmdsZS1saW5lIHtcbiAgICB3aWR0aDogMTA1MHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nLXRvcDogMTVweFxufVxuXG4ub3JkZXItbGlzdCAubGlzdCAuaW4td29yZHMge1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLm1haW4tdGl0bGUge1xuICAgIGJhY2tncm91bmQ6ICM1ZjVmNWY7XG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uYXR0ZW5kYW5jZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZVxufVxuXG4uYXR0ZW5kYW5jZSB0aGVhZCB7XG4gICAgYmFja2dyb3VuZDogIzVmNWY1ZjtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi5hdHRlbmRhbmNlIHRyIHRoLFxuLmF0dGVuZGFuY2UgdHIgdGQge1xuICAgIHBhZGRpbmc6IDE1cHggMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hdHRlbmRhbmNlMiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZVxufVxuXG4uYXR0ZW5kYW5jZTIgdGhlYWQge1xuICAgIGJhY2tncm91bmQ6ICM1ZjVmNWY7XG4gICAgY29sb3I6ICNmZmY7XG59XG4uYXR0ZW5kYW5jZTIgdHIgdGh7XG4gICAgcGFkZGluZzogMTVweCAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmF0dGVuZGFuY2UyIHRyIHRkIHtcbiAgICBwYWRkaW5nOiA1cHggMHB4OyAgICAgICAgIFxufVxuLmF0dGVuZGFuY2UyIHRyIHRkOmZpcnN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7ICAgICAgXG59XG4uYXR0ZW5kYW5jZTIgdHIgdGQ6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hdHRlbmRhbmNlMiB0cjpudGgtY2hpbGQoM24pIHsgXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQ7XG4gICB9XG5cbiAgIC5vdXRlci1saW5lIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zMCk7XG4gICAgbWFyZ2luOiA1cHggMzBweDtcbn1cbi5vdXRlci1saW5lIC5oZWxwZXItdGFibGU6Zmlyc3QtY2hpbGR7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG59XG5cbi5oZWxwZXItdGFibGUge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zMCk7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZzogOXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zMCk7XG59XG5cbi50b3RhbC10YWJsZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzApOyBcbiAgICBwYWRkaW5nOiAxM3B4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7ICBcbn1cbi50b3RhbC10YWJsZSB0aDpmaXJzdC1jaGlsZHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBtYXgtd2lkdGg6IDU1cHg7XG59XG4udG90YWwtdGFibGUgdGg6bGFzdC1jaGlsZHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuIC5tYXJrcyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICB9XG4gICAgXG4gICAgLm1hcmtzIHRoZWFkIHRyIHRoIHtcbiAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgICAgICA7XG4gICAgICAgIGJhY2tncm91bmQ6ICNkZWRlZGU7XG4gICAgfVxuICAgIFxuICAgIC5tYXJrcyB0Ym9keSB0ciB0ZCB7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxMHB4XG4gICAgfVxuICAgIFxuICAgIC5tYXJrcy5ib3JkZXItdHIgdGgsXG4gICAgLm1hcmtzLmJvcmRlci10ciB0ZCB7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMwKTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgICAgIC8qIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgKi9cbiAgICB9XG4gICAgXG4gICAgLm1hcmtzLmJvcmRlci10ciB0ZCAuY29udGVudCB7XG4gICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlXG4gICAgfVxuICAgIFxuICAgIC5tLXctMjAwIHtcbiAgICAgICAgLyogd2lkdGg6IDIwMHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDIwMHB4OyAqL1xuICAgICAgICBtaW4td2lkdGg6IDIwMHB4XG4gICAgfSBcbiAgICBcbiAgICAubWFya3MuYm9yZGVyLXRyIHRoOmxhc3QtY2hpbGQsXG4gICAgLm1hcmtzLmJvcmRlci10ciB0ZDpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lXG4gICAgfVxuICAgIC5oZWFkZXItdGl0bGUyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVkZWRlO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRcbn1cbi50ZXJtc3tcbiAgICBwYWRkaW5nOiAyMHB4IDU1cHggNXB4O1xufVxuICAgIC50ZW0tdGFibGV7XG4gICAgICAgIHBhZGRpbmc6IDBweCAxMyU7XG4gICAgfVxuXG4gICAgLmZlZS1yZWNpcHQgdHIgdGgsIC5mZWUtcmVjaXB0IHRyIHRke1xuICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIH0iLCIuaW52b2ljZS1jb250YWluZXIge1xuICBwYWRkaW5nOiAwcHggMjVweDtcbiAgbWFyZ2luOiAwcHggYXV0bzsgfVxuXG4uYiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgfVxuXG4uYi1iIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgfVxuXG4uYi10IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgfVxuXG4uYi1yIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyB9XG5cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4OyB9XG5cbi5mbGV4LWQtYyB7XG4gIGZsZXgtZGlyZWN0aW9uOiAtd2Via2l0LWNvbHVtbjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuXG4uZmxleC1kLXIge1xuICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XG5cbi5mbGV4LWEge1xuICAtd2Via2l0LXBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuXG4uYWxpZ24taXRlbS1jZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG5cbi53LTUwLXAge1xuICB3aWR0aDogNTAlOyB9XG5cbi53LTEwMC1wIHtcbiAgd2lkdGg6IDEwMCU7IH1cblxuLnAtMjAge1xuICBwYWRkaW5nOiAyMHB4OyB9XG5cbi5weS00IHtcbiAgcGFkZGluZzogNHB4IDBweDsgfVxuXG4ucHgtMjAge1xuICBwYWRkaW5nOiAwcHggMjBweDsgfVxuXG4ucHQtMzAge1xuICBwYWRkaW5nLXRvcDogMzBweDsgfVxuXG4ucHQtMjAge1xuICBwYWRkaW5nLXRvcDogMjBweDsgfVxuXG4udGV4dC1sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxuXG4udGV4dC1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0OyB9XG5cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4udGV4dC11cHBlcmNhc2Uge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XG5cbi5yZXN1bHQtaCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiAycHg7IH1cblxuLnJlc3VsdC1oIHNwYW4ge1xuICB3aWR0aDogODBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG5cbi5oMi1jIHtcbiAgZm9udC1zaXplOiAyMHB4OyB9XG5cbi5wci04IHtcbiAgcGFkZGluZy1yaWdodDogOHB4OyB9XG5cbi5wYi0yMCB7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4OyB9XG5cbi5tYi0yMCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cblxuLnAtMTAge1xuICBwYWRkaW5nOiAxMHB4OyB9XG5cbi5wci00cmVtIHtcbiAgcGFkZGluZy1yaWdodDogNHJlbTsgfVxuXG4ucmlnaHQtYWxpZ24ge1xuICBmbG9hdDogcmlnaHQ7IH1cblxuLmxlZnQtYWxpZ24ge1xuICBmbG9hdDogbGVmdDsgfVxuXG4ubG9nby1pbWcge1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBtYXgtaGVpZ2h0OiAxMDBweDsgfVxuXG4udGV4dC1sZyB7XG4gIGZvbnQtc2l6ZTogMjVweDsgfVxuXG4uc2Nob29sLXN0YW1wIHtcbiAgd2lkdGg6IDEzMHB4O1xuICBtaW4td2lkdGg6IDEzMHB4O1xuICBtYXgtd2lkdGg6IDEzMHB4O1xuICBoZWlnaHQ6IDEzMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbi5zY2hvb2wtc3RhbXA6OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM2JTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbnRlbnQ6IFwiU2Nob29sIHNlYWwgTG9nb1wiOyB9XG5cbi50b3Atc3BhY2Uge1xuICBwYWRkaW5nLXRvcDogMS40cmVtOyB9XG5cbi5vcmRlci1saXN0IC5saXN0IHtcbiAgLyogZGlzcGxheTpmbGV4OyBcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4OyAqL1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaXN0LXN0eWxlLXR5cGU6IGRlY2ltYWw7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuXG4ub3JkZXItbGlzdCAubGlzdCAudGV4dCB7XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG4gIG92ZXJmbG93OiBoaWRkZW47IH1cblxuLm9yZGVyLWxpc3QgLmxpc3QgLnRpdGxlIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cblxuLnNpbmdsZS1saW5lIHtcbiAgd2lkdGg6IDEwNTBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZy10b3A6IDE1cHg7IH1cblxuLm9yZGVyLWxpc3QgLmxpc3QgLmluLXdvcmRzIHtcbiAgcGFkZGluZy1yaWdodDogNXB4OyB9XG5cbi5tYWluLXRpdGxlIHtcbiAgYmFja2dyb3VuZDogIzVmNWY1ZjtcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xuICBjb2xvcjogI2ZmZjsgfVxuXG4uYXR0ZW5kYW5jZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgfVxuXG4uYXR0ZW5kYW5jZSB0aGVhZCB7XG4gIGJhY2tncm91bmQ6ICM1ZjVmNWY7XG4gIGNvbG9yOiAjZmZmOyB9XG5cbi5hdHRlbmRhbmNlIHRyIHRoLFxuLmF0dGVuZGFuY2UgdHIgdGQge1xuICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi5hdHRlbmRhbmNlMiB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgfVxuXG4uYXR0ZW5kYW5jZTIgdGhlYWQge1xuICBiYWNrZ3JvdW5kOiAjNWY1ZjVmO1xuICBjb2xvcjogI2ZmZjsgfVxuXG4uYXR0ZW5kYW5jZTIgdHIgdGgge1xuICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi5hdHRlbmRhbmNlMiB0ciB0ZCB7XG4gIHBhZGRpbmc6IDVweCAwcHg7IH1cblxuLmF0dGVuZGFuY2UyIHRyIHRkOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4OyB9XG5cbi5hdHRlbmRhbmNlMiB0ciB0ZDpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4uYXR0ZW5kYW5jZTIgdHI6bnRoLWNoaWxkKDNuKSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDsgfVxuXG4ub3V0ZXItbGluZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgbWFyZ2luOiA1cHggMzBweDsgfVxuXG4ub3V0ZXItbGluZSAuaGVscGVyLXRhYmxlOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBib3JkZXItdG9wOiBub25lOyB9XG5cbi5oZWxwZXItdGFibGUge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmc6IDlweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7IH1cblxuLnRvdGFsLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHBhZGRpbmc6IDEzcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7IH1cblxuLnRvdGFsLXRhYmxlIHRoOmZpcnN0LWNoaWxkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBtYXgtd2lkdGg6IDU1cHg7IH1cblxuLnRvdGFsLXRhYmxlIHRoOmxhc3QtY2hpbGQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMjBweDsgfVxuXG4ubWFya3Mge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7IH1cblxuLm1hcmtzIHRoZWFkIHRyIHRoIHtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZGVkZWRlOyB9XG5cbi5tYXJrcyB0Ym9keSB0ciB0ZCB7XG4gIHBhZGRpbmc6IDhweCAxMHB4OyB9XG5cbi5tYXJrcy5ib3JkZXItdHIgdGgsXG4ubWFya3MuYm9yZGVyLXRyIHRkIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgLyogdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAqLyB9XG5cbi5tYXJrcy5ib3JkZXItdHIgdGQgLmNvbnRlbnQge1xuICB3aWR0aDogMTJweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBvdmVyZmxvdzogdmlzaWJsZTsgfVxuXG4ubS13LTIwMCB7XG4gIC8qIHdpZHRoOiAyMDBweDtcbiAgICAgICAgbWF4LXdpZHRoOiAyMDBweDsgKi9cbiAgbWluLXdpZHRoOiAyMDBweDsgfVxuXG4ubWFya3MuYm9yZGVyLXRyIHRoOmxhc3QtY2hpbGQsXG4ubWFya3MuYm9yZGVyLXRyIHRkOmxhc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IG5vbmU7IH1cblxuLmhlYWRlci10aXRsZTIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVkZWRlO1xuICBwYWRkaW5nOiA4cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cblxuLnRlcm1zIHtcbiAgcGFkZGluZzogMjBweCA1NXB4IDVweDsgfVxuXG4udGVtLXRhYmxlIHtcbiAgcGFkZGluZzogMHB4IDEzJTsgfVxuXG4uZmVlLXJlY2lwdCB0ciB0aCwgLmZlZS1yZWNpcHQgdHIgdGQge1xuICBtYXgtd2lkdGg6IDIwMHB4OyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/reports/fee-collection-report/fee-collection-report.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/reports/fee-collection-report/fee-collection-report.component.ts ***!
  \******************************************************************************************/
/*! exports provided: FeeCollectionReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeeCollectionReportComponent", function() { return FeeCollectionReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_service_reports_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/service/reports/reports.service */ "./src/app/service/reports/reports.service.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/grading-service/api/grade-setup.service */ "./src/app/service/grading-service/api/grade-setup.service.ts");
/* harmony import */ var app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/class-schedules/class-time-table.service */ "./src/app/service/class-schedules/class-time-table.service.ts");
/* harmony import */ var app_service_academic_service_api_student_database_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/academic-service/api/student-database.service */ "./src/app/service/academic-service/api/student-database.service.ts");
/* harmony import */ var app_service_invoice_invoice_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/invoice/invoice.service */ "./src/app/service/invoice/invoice.service.ts");
/* harmony import */ var app_service_academic_service_api_status_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/service/academic-service/api/status.service */ "./src/app/service/academic-service/api/status.service.ts");
/* harmony import */ var app_shared_custom_date_adaptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/shared/custom-date-adaptor */ "./src/app/shared/custom-date-adaptor.ts");
/* harmony import */ var saturn_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! saturn-datepicker */ "./node_modules/saturn-datepicker/fesm5/saturn-datepicker.js");














var FeeCollectionReportComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FeeCollectionReportComponent, _super);
    function FeeCollectionReportComponent(schoolReportsService, commonService, gradeSetupService, classTimetableService, studentService, cd, invoiceService, statusService) {
        var _this = _super.call(this) || this;
        _this.schoolReportsService = schoolReportsService;
        _this.commonService = commonService;
        _this.gradeSetupService = gradeSetupService;
        _this.classTimetableService = classTimetableService;
        _this.studentService = studentService;
        _this.cd = cd;
        _this.invoiceService = invoiceService;
        _this.statusService = statusService;
        return _this;
    }
    FeeCollectionReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setColumns();
        this.paymentTypes();
        this.paymentStatuses();
        this.getClasses();
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            studentSearch: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            paymentStatusId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            paymentMode: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            classId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            sectionId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            inputDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null)
        });
        this.searchForm.controls['studentSearch'].valueChanges.debounceTime(200).subscribe(function (name) {
            name = typeof (name) === 'string' ? name.trim() : name;
            if (name !== null && name.length >= 3) {
                _this.filterdStudents = [];
                _this.studentService.studentNamesBaseOnAcademicSession(parseInt(_this.getTokenParam('_as'), 10), null, null, null, name).subscribe(function (res) {
                    _this.filterdStudents = (res.studentsList.length > 0) ? res.studentsList : [];
                    _this.cd.detectChanges();
                });
            }
            else {
                _this.filterdStudents = [];
                _this.cd.detectChanges();
            }
        });
    };
    FeeCollectionReportComponent.prototype.setColumns = function () {
        this.columns = [
            { field: 'paymentDate', header: 'Date', sort: false, dataKey: 'name' },
            { field: 'feeAccount', header: 'Fee Account', sort: false, dataKey: 'invoiceNumber' },
            { field: 'studentInformatioin', header: 'Student Information', sort: false, dataKey: 'isuueDate' },
            { field: 'paymentMode', header: 'Payment Mode', sort: false, dataKey: 'dueDate' },
            { field: 'paymentAmount', header: 'Amount', sort: false, dataKey: 'delayDays' },
            { field: 'paymentStatus', header: 'Status', sort: false, dataKey: 'feeTermName' },
            { field: 'paymentReceiptNo', header: 'Reciept Number', sort: false, dataKey: 'feeTermName' },
            { field: 'paymentEntryuser', header: 'Entry User', sort: false, dataKey: 'invoiceAmount' }
        ];
        this.summaryColumns = [
            { field: 'paymentMode', header: 'Payment Mode', sort: false, dataKey: 'name' },
            { field: 'paymentStatus', header: 'Payment Status', sort: false, dataKey: 'invoiceNumber' },
            { field: 'paymentAmount', header: 'Amount', sort: false, dataKey: 'isuueDate' }
        ];
    };
    FeeCollectionReportComponent.prototype.getClasses = function () {
        var _this = this;
        this.classes = [];
        this.gradeSetupService.schoolAcademicClasses().subscribe(function (response) {
            if (response.listViews && response.listViews.length) {
                response.listViews.forEach(function (element) {
                    _this.classes.push({
                        label: element.name,
                        value: element.id
                    });
                });
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    // on selection of class
    FeeCollectionReportComponent.prototype.onSelectClass = function (data) {
        var _this = this;
        this.sections = [];
        this.searchForm.controls.sectionId.setValue(null);
        if (!data.value) {
            return;
        }
        this.classTimetableService.classTimetableSectionsGet(data.value).subscribe(function (response) {
            if (response.classTimetableSectionsView != null) {
                if (response.classTimetableSectionsView.length) {
                    response.classTimetableSectionsView.map(function (x) {
                        _this.sections.push({ value: x.sectionId, label: x.sectionName + ' (' + x.boardName + ')' });
                    });
                }
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    FeeCollectionReportComponent.prototype.paymentTypes = function () {
        var _this = this;
        this.paymentTypesList = [];
        this.invoiceService.paymentTypes().subscribe(function (data) {
            if (data.commonViewModel) {
                if (app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].PARENT === _this.getTokenParam('_ut')) {
                    _this.paymentTypesList = data.commonViewModel.filter(function (e) { return e.code !== app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].PAYMENT_TYPE_ONLINE; });
                }
                else {
                    _this.paymentTypesList = data.commonViewModel;
                }
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    FeeCollectionReportComponent.prototype.paymentStatuses = function () {
        var _this = this;
        this.paymentStatus = [];
        this.statusService.paymentStatuses(app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].PAYMENT_STATUS_CATEGORY_CODE).subscribe(function (res) {
            if (res.listViews && res.listViews.length) {
                res.listViews.forEach(function (element) {
                    _this.paymentStatus.push({
                        label: element.name,
                        value: element.id
                    });
                });
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    FeeCollectionReportComponent.prototype.getFeeCollectionReport = function () {
        var _this = this;
        var beginDate = null;
        var endDate = null;
        var studentId = '';
        if (this.searchForm.value.inputDate != null) {
            beginDate = this.searchForm.value.inputDate.begin.format(app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].API_DATE_PATTERN);
            endDate = this.searchForm.value.inputDate.end.format(app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].API_DATE_PATTERN);
        }
        if (this.searchForm.value.studentSearch) {
            studentId = this.searchForm.value.studentSearch.schoolAcademicSessionStudentId;
        }
        this.schoolReportsService.studentFeeCollections(beginDate, endDate, [this.searchForm.value.classId], [this.searchForm.value.sectionId], [studentId], [this.searchForm.value.paymentStatusId], [this.searchForm.value.paymentMode]).subscribe(function (res) {
            _this.resultApplicationReports = res;
            if (_this.resultApplicationReports.feeCollections.length) {
                _this.resultApplicationReports.feeCollections.push({ paymentDate: 'Total', paymentAmount: _this.resultApplicationReports.totalPaymentAmount });
            }
        });
    };
    FeeCollectionReportComponent.prototype.generateReport = function (rp) {
        if (rp === 'generatePdfReport') {
            this.schoolReportsService.generatePdf(document.getElementById('admitted-std'), app_app_constants__WEBPACK_IMPORTED_MODULE_4__["Messages"].COMMON_TABLE_CSS);
        }
        if (rp === 'generateExcelReport') {
            this.schoolReportsService.exportToExcel('adm-report', 'fee-collection-report');
        }
    };
    FeeCollectionReportComponent.prototype.displayFn = function (data) {
        return data ? data.studentName : undefined;
    };
    FeeCollectionReportComponent.prototype.reset = function () {
        this.searchForm.reset();
        this.sections = [];
        this.resultApplicationReports = null;
    };
    FeeCollectionReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fee-collection-report',
            template: __webpack_require__(/*! ./fee-collection-report.component.html */ "./src/app/modules/reports/fee-collection-report/fee-collection-report.component.html"),
            providers: [app_service_academic_service_api_status_service__WEBPACK_IMPORTED_MODULE_11__["StatusService"], app_service_invoice_invoice_service__WEBPACK_IMPORTED_MODULE_10__["InvoiceService"],
                { provide: saturn_datepicker__WEBPACK_IMPORTED_MODULE_13__["DateAdapter"], useClass: app_shared_custom_date_adaptor__WEBPACK_IMPORTED_MODULE_12__["CustomDateAdapter"], deps: [saturn_datepicker__WEBPACK_IMPORTED_MODULE_13__["MAT_DATE_LOCALE"]] },
                { provide: saturn_datepicker__WEBPACK_IMPORTED_MODULE_13__["MAT_DATE_FORMATS"], useValue: app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_5__["AF_DATE_FORMATS"] }],
            styles: [__webpack_require__(/*! ./fee-collection-report.component.scss */ "./src/app/modules/reports/fee-collection-report/fee-collection-report.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_reports_reports_service__WEBPACK_IMPORTED_MODULE_2__["SchoolReportsService"], app_service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"], app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_7__["GradeSetupService"],
            app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_8__["ClassTimetableService"], app_service_academic_service_api_student_database_service__WEBPACK_IMPORTED_MODULE_9__["StudentDatabaseService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            app_service_invoice_invoice_service__WEBPACK_IMPORTED_MODULE_10__["InvoiceService"], app_service_academic_service_api_status_service__WEBPACK_IMPORTED_MODULE_11__["StatusService"]])
    ], FeeCollectionReportComponent);
    return FeeCollectionReportComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_5__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/reports/inactive-std-applications-report/inactive-std-applications-report.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/reports/inactive-std-applications-report/inactive-std-applications-report.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"searchForm\" #ngForm=\"ngForm\">\n  <div fxLayout=\"column\" fxLayout.gt-sm=\"row wrap\" fxLayoutAlign=\"center center\" class=\"px-24 pt-20 pb-12\">\n    <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"pr-sm-20\">\n      <mat-label translate #class>Class</mat-label>\n      <mat-select (selectionChange)=\"onSelectClass($event)\" formControlName=\"classId\">\n        <mat-option *ngIf=\"availableClasses?.length\"></mat-option>\n        <mat-option *ngFor=\"let option of availableClasses\" [value]=\"option?.value\">\n          {{ option?.label }}</mat-option>\n      </mat-select>\n      <mat-error>\n        <app-validation [labelName]='class.innerText' [validationControl]=\"searchForm.controls.classId\"\n          [doValidate]=\"true\">\n        </app-validation>\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"33.3\">\n      <mat-label translate #sections>Sections</mat-label>\n      <mat-select formControlName=\"sectionId\">\n        <mat-option *ngIf=\"availableSections?.length\"></mat-option>\n        <mat-option *ngFor=\"let option of availableSections\" [value]=\"option?.value\">\n          {{ option?.label }}</mat-option>\n      </mat-select>\n      <mat-error>\n        <app-validation [labelName]='sections.innerText' [validationControl]=\"searchForm.controls.sectionId\"\n          [doValidate]=\"true\">\n        </app-validation>\n      </mat-error>\n    </mat-form-field>\n  </div>\n  <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"mr-20 pb-20\">\n    <button mat-raised-button translate color=\"primary\" class=\"text-uppercase\" (click)=\"reset()\" type=\"reset\">\n      Reset\n    </button>\n    <button type=\"submit\" mat-raised-button translate color=\"accent\" class=\"text-uppercase ml-12\"\n      (click)=\"getInactiveStdApplicationsReport()\">\n      Search\n    </button>\n  </div>\n</form>\n\n<app-custom-card *ngIf=\"!(resultApplicationReports?.inActiveStudentsDetailsView?.length) && ngForm.submitted\"\n  [inputMessage]=\"'No Record Found'\">\n</app-custom-card>\n\n<div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"px-32 py-12\"\n  *ngIf=\"resultApplicationReports?.inActiveStudentsDetailsView\">\n  <button mat-stroked-button class=\"mr-12\" (click)=\"generateReport('generatePdfReport')\">\n    <mat-icon class=\"mr-4\">save_alt</mat-icon>Download PDF\n  </button>\n  <button mat-stroked-button (click)=\"generateReport('generateExcelReport')\">\n    <mat-icon class=\"mr-4\">save_alt</mat-icon> Download EXCEL\n  </button>\n</div>\n<div class='invoice-container' id=\"admitted-std\" *ngIf=\"resultApplicationReports?.inActiveStudentsDetailsView\" style=\"padding: 25px; padding-top: 0px;\">\n  <span class=\"dark-theme-color\" style=\"color:#fff\">A</span>\n  <div class='b flex-d-c invoice-body' style='overflow: hidden; '>\n    <h3 class=\"text-center text-uppercase\">Inactive Students Summary Report</h3>\n    <div class=\"p-10 mb-20 main-title\">\n      <div class=\"left-align\">Report Generated On : {{ date }}</div>\n      <div class=\"right-align flex\" *ngIf=\"acadmicSession\">\n        {{acadmicSession?.name}} ({{acadmicSession?.startDate | date: 'MMM d, y'}} -\n        {{acadmicSession?.endDate | date: 'MMM d, y'}})\n      </div>\n    </div>\n    <div style=\"font-size: 18px;\" class=\"px-20 pt-20\">Inactive Students</div>\n    <div *ngIf=\"resultApplicationReports\">\n      <app-af-report-table [inputData]=\"resultApplicationReports?.inActiveStudentsDetailsView\"\n        [tableId]=\"'inactive-std-app'\" [columns]=\"columns\"></app-af-report-table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/reports/inactive-std-applications-report/inactive-std-applications-report.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/reports/inactive-std-applications-report/inactive-std-applications-report.component.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invoice-container {\n  padding: 0px 25px;\n  margin: 0px auto; }\n\n.b {\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.b-b {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.b-t {\n  border-top: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.b-r {\n  border-right: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.flex {\n  display: -webkit-box;\n  display: flex;\n  display: -webkit-flex; }\n\n.flex-d-c {\n  flex-direction: -webkit-column;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n\n.flex-d-r {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row; }\n\n.flex-a {\n  -webkit-place-content: center center;\n  place-content: center center;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.align-item-center {\n  -webkit-box-align: center;\n          align-items: center; }\n\n.w-50-p {\n  width: 50%; }\n\n.w-100-p {\n  width: 100%; }\n\n.p-20 {\n  padding: 20px; }\n\n.py-4 {\n  padding: 4px 0px; }\n\n.px-20 {\n  padding: 0px 20px; }\n\n.pt-30 {\n  padding-top: 30px; }\n\n.pt-20 {\n  padding-top: 20px; }\n\n.text-left {\n  text-align: left; }\n\n.text-right {\n  text-align: right; }\n\n.text-center {\n  text-align: center; }\n\n.text-uppercase {\n  text-transform: uppercase; }\n\n.result-h {\n  font-size: 20px;\n  padding: 20px;\n  margin: 2px; }\n\n.result-h span {\n  width: 80px;\n  display: inline-block; }\n\n.h2-c {\n  font-size: 20px; }\n\n.pr-8 {\n  padding-right: 8px; }\n\n.pb-20 {\n  padding-bottom: 20px; }\n\n.mb-20 {\n  margin-bottom: 20px; }\n\n.p-10 {\n  padding: 10px; }\n\n.pr-4rem {\n  padding-right: 4rem; }\n\n.right-align {\n  float: right; }\n\n.left-align {\n  float: left; }\n\n.logo-img {\n  max-width: 200px;\n  max-height: 100px; }\n\n.text-lg {\n  font-size: 25px; }\n\n.school-stamp {\n  width: 130px;\n  min-width: 130px;\n  max-width: 130px;\n  height: 130px;\n  border: 1px solid;\n  border-radius: 100%;\n  position: relative; }\n\n.school-stamp::after {\n  position: absolute;\n  top: 36%;\n  left: 0;\n  width: 100%;\n  content: \"School seal Logo\"; }\n\n.top-space {\n  padding-top: 1.4rem; }\n\n.order-list .list {\n  /* display:flex; \n        display: -webkit-flex; */\n  padding-right: 20px;\n  padding-bottom: 25px;\n  font-size: 18px;\n  list-style-type: decimal;\n  display: inline-block; }\n\n.order-list .list .text {\n  white-space: pre;\n  overflow: hidden; }\n\n.order-list .list .title {\n  white-space: nowrap;\n  margin-right: 20px;\n  display: inline-block; }\n\n.single-line {\n  width: 1050px;\n  white-space: nowrap;\n  overflow: hidden;\n  padding-top: 15px; }\n\n.order-list .list .in-words {\n  padding-right: 5px; }\n\n.main-title {\n  background: #5f5f5f;\n  display: list-item;\n  color: #fff; }\n\n.attendance {\n  width: 100%;\n  border-spacing: 0;\n  border-collapse: collapse; }\n\n.attendance thead {\n  background: #5f5f5f;\n  color: #fff; }\n\n.attendance tr th,\n.attendance tr td {\n  padding: 15px 0px;\n  text-align: center; }\n\n.attendance2 {\n  width: 100%;\n  border-spacing: 0;\n  border-collapse: collapse; }\n\n.attendance2 thead {\n  background: #5f5f5f;\n  color: #fff; }\n\n.attendance2 tr th {\n  padding: 15px 0px;\n  text-align: center; }\n\n.attendance2 tr td {\n  padding: 5px 0px; }\n\n.attendance2 tr td:first-child {\n  padding-left: 10px; }\n\n.attendance2 tr td:not(:first-child) {\n  text-align: center; }\n\n.attendance2 tr:nth-child(3n) {\n  border-bottom: 1px solid; }\n\n.outer-line {\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  margin: 5px 30px; }\n\n.outer-line .helper-table:first-child {\n  margin-top: 0px;\n  border-top: none; }\n\n.helper-table {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n  margin-bottom: 0px;\n  margin-top: 20px;\n  padding: 9px;\n  width: 100%;\n  border-top: 1px solid rgba(0, 0, 0, 0.3); }\n\n.total-table {\n  width: 100%;\n  border-top: 1px solid rgba(0, 0, 0, 0.3);\n  padding: 13px;\n  margin-top: 20px; }\n\n.total-table th:first-child {\n  text-align: left;\n  padding-left: 20px;\n  max-width: 55px; }\n\n.total-table th:last-child {\n  text-align: right;\n  padding-right: 20px; }\n\n.marks {\n  width: 100%;\n  border-spacing: 0; }\n\n.marks thead tr th {\n  padding: 10px 10px;\n  background: #dedede; }\n\n.marks tbody tr td {\n  padding: 8px 10px; }\n\n.marks.border-tr th,\n.marks.border-tr td {\n  border-right: 1px solid rgba(0, 0, 0, 0.3);\n  text-align: center;\n  font-size: 18px;\n  word-break: break-word;\n  /* text-transform: uppercase */ }\n\n.marks.border-tr td .content {\n  width: 12px;\n  margin: auto;\n  overflow: visible; }\n\n.m-w-200 {\n  /* width: 200px;\n        max-width: 200px; */\n  min-width: 200px; }\n\n.marks.border-tr th:last-child,\n.marks.border-tr td:last-child {\n  border-right: none; }\n\n.header-title2 {\n  background-color: #dedede;\n  padding: 8px;\n  font-size: 18px;\n  font-weight: bold; }\n\n.terms {\n  padding: 20px 55px 5px; }\n\n.tem-table {\n  padding: 0px 13%; }\n\n.fee-recipt tr th, .fee-recipt tr td {\n  max-width: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvcmVwb3J0cy9jb21tb24tcmVwb3J0cy5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3JlcG9ydHMvaW5hY3RpdmUtc3RkLWFwcGxpY2F0aW9ucy1yZXBvcnQvaW5hY3RpdmUtc3RkLWFwcGxpY2F0aW9ucy1yZXBvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBSXBCO0VBQ0ksb0NBQW9DO0VBQ3BDLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLDJDQUEyQztFQUMzQyx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSx3Q0FBd0M7RUFDeEMseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksMENBQTBDO0VBQzFDLHlCQUNKLEVBQUE7O0FBRUE7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYixxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSw4QkFBOEI7RUFDOUIsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSw4QkFBbUI7RUFBbkIsNkJBQW1CO1VBQW5CLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLG9DQUFvQztFQUNwQyw0QkFBNEI7RUFFNUIseUJBQW1CO1VBQW5CLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLHlCQUFtQjtVQUFuQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxVQUFVLEVBQUE7O0FBR2Q7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksa0JB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c0IsRUFBQTs7QUFFdEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVwb3J0cy9pbmFjdGl2ZS1zdGQtYXBwbGljYXRpb25zLXJlcG9ydC9pbmFjdGl2ZS1zdGQtYXBwbGljYXRpb25zLXJlcG9ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnZvaWNlLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMHB4IDI1cHg7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgIFxufVxuXG4uYiB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzApO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbi5iLWIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zMCk7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxuLmItdCB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMwKTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG4uYi1yIHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zMCk7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZVxufVxuXG4uZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG59XG5cbi5mbGV4LWQtYyB7XG4gICAgZmxleC1kaXJlY3Rpb246IC13ZWJraXQtY29sdW1uO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5mbGV4LWQtciB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmZsZXgtYSB7XG4gICAgLXdlYmtpdC1wbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hbGlnbi1pdGVtLWNlbnRlciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnctNTAtcCB7XG4gICAgd2lkdGg6IDUwJTtcbn1cblxuLnctMTAwLXAge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ucC0yMCB7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLnB5LTQge1xuICAgIHBhZGRpbmc6IDRweCAwcHg7XG59XG5cbi5weC0yMCB7XG4gICAgcGFkZGluZzogMHB4IDIwcHg7XG59XG5cbi5wdC0zMCB7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG59XG4ucHQtMjB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi50ZXh0LWxlZnQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi50ZXh0LXJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnRleHQtY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50ZXh0LXVwcGVyY2FzZSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnJlc3VsdC1oIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBtYXJnaW46IDJweDtcbn1cblxuLnJlc3VsdC1oIHNwYW4ge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmgyLWMge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnByLTgge1xuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICA7XG59XG5cbi5wYi0yMCB7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgO1xufVxuXG4ubWItMjAge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5wLTEwIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ucHItNHJlbSB7XG4gICAgcGFkZGluZy1yaWdodDogNHJlbTtcbn1cblxuLnJpZ2h0LWFsaWduIHtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbi5sZWZ0LWFsaWduIHtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuLmxvZ28taW1nIHtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDEwMHB4XG59XG5cbi50ZXh0LWxnIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5zY2hvb2wtc3RhbXAge1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBtaW4td2lkdGg6IDEzMHB4O1xuICAgIG1heC13aWR0aDogMTMwcHg7XG4gICAgaGVpZ2h0OiAxMzBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNjaG9vbC1zdGFtcDo6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDM2JTtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbnRlbnQ6IFwiU2Nob29sIHNlYWwgTG9nb1wiO1xufVxuXG4udG9wLXNwYWNlIHtcbiAgICBwYWRkaW5nLXRvcDogMS40cmVtO1xufVxuXG4ub3JkZXItbGlzdCAubGlzdCB7XG4gICAgLyogZGlzcGxheTpmbGV4OyBcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4OyAqL1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogZGVjaW1hbDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5vcmRlci1saXN0IC5saXN0IC50ZXh0IHtcbiAgICB3aGl0ZS1zcGFjZTogcHJlO1xuICAgIG92ZXJmbG93OiBoaWRkZW5cbn1cblxuLm9yZGVyLWxpc3QgLmxpc3QgLnRpdGxlIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xufVxuXG4uc2luZ2xlLWxpbmUge1xuICAgIHdpZHRoOiAxMDUwcHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmctdG9wOiAxNXB4XG59XG5cbi5vcmRlci1saXN0IC5saXN0IC5pbi13b3JkcyB7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4ubWFpbi10aXRsZSB7XG4gICAgYmFja2dyb3VuZDogIzVmNWY1ZjtcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5hdHRlbmRhbmNlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlXG59XG5cbi5hdHRlbmRhbmNlIHRoZWFkIHtcbiAgICBiYWNrZ3JvdW5kOiAjNWY1ZjVmO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuLmF0dGVuZGFuY2UgdHIgdGgsXG4uYXR0ZW5kYW5jZSB0ciB0ZCB7XG4gICAgcGFkZGluZzogMTVweCAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmF0dGVuZGFuY2UyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlXG59XG5cbi5hdHRlbmRhbmNlMiB0aGVhZCB7XG4gICAgYmFja2dyb3VuZDogIzVmNWY1ZjtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi5hdHRlbmRhbmNlMiB0ciB0aHtcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYXR0ZW5kYW5jZTIgdHIgdGQge1xuICAgIHBhZGRpbmc6IDVweCAwcHg7ICAgICAgICAgXG59XG4uYXR0ZW5kYW5jZTIgdHIgdGQ6Zmlyc3QtY2hpbGQge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDsgICAgICBcbn1cbi5hdHRlbmRhbmNlMiB0ciB0ZDpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmF0dGVuZGFuY2UyIHRyOm50aC1jaGlsZCgzbikgeyBcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZDtcbiAgIH1cblxuICAgLm91dGVyLWxpbmUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMwKTtcbiAgICBtYXJnaW46IDVweCAzMHB4O1xufVxuLm91dGVyLWxpbmUgLmhlbHBlci10YWJsZTpmaXJzdC1jaGlsZHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbn1cblxuLmhlbHBlci10YWJsZSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMwKTtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBwYWRkaW5nOiA5cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMwKTtcbn1cblxuLnRvdGFsLXRhYmxle1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zMCk7IFxuICAgIHBhZGRpbmc6IDEzcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDsgIFxufVxuLnRvdGFsLXRhYmxlIHRoOmZpcnN0LWNoaWxke1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIG1heC13aWR0aDogNTVweDtcbn1cbi50b3RhbC10YWJsZSB0aDpsYXN0LWNoaWxke1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG4gLm1hcmtzIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICAgIH1cbiAgICBcbiAgICAubWFya3MgdGhlYWQgdHIgdGgge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgICAgIDtcbiAgICAgICAgYmFja2dyb3VuZDogI2RlZGVkZTtcbiAgICB9XG4gICAgXG4gICAgLm1hcmtzIHRib2R5IHRyIHRkIHtcbiAgICAgICAgcGFkZGluZzogOHB4IDEwcHhcbiAgICB9XG4gICAgXG4gICAgLm1hcmtzLmJvcmRlci10ciB0aCxcbiAgICAubWFya3MuYm9yZGVyLXRyIHRkIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzApO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICAgICAgLyogdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAqL1xuICAgIH1cbiAgICBcbiAgICAubWFya3MuYm9yZGVyLXRyIHRkIC5jb250ZW50IHtcbiAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGVcbiAgICB9XG4gICAgXG4gICAgLm0tdy0yMDAge1xuICAgICAgICAvKiB3aWR0aDogMjAwcHg7XG4gICAgICAgIG1heC13aWR0aDogMjAwcHg7ICovXG4gICAgICAgIG1pbi13aWR0aDogMjAwcHhcbiAgICB9IFxuICAgIFxuICAgIC5tYXJrcy5ib3JkZXItdHIgdGg6bGFzdC1jaGlsZCxcbiAgICAubWFya3MuYm9yZGVyLXRyIHRkOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmVcbiAgICB9XG4gICAgLmhlYWRlci10aXRsZTIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZWRlZGU7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogYm9sZFxufVxuLnRlcm1ze1xuICAgIHBhZGRpbmc6IDIwcHggNTVweCA1cHg7XG59XG4gICAgLnRlbS10YWJsZXtcbiAgICAgICAgcGFkZGluZzogMHB4IDEzJTtcbiAgICB9XG5cbiAgICAuZmVlLXJlY2lwdCB0ciB0aCwgLmZlZS1yZWNpcHQgdHIgdGR7XG4gICAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgfSIsIi5pbnZvaWNlLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDBweCAyNXB4O1xuICBtYXJnaW46IDBweCBhdXRvOyB9XG5cbi5iIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyB9XG5cbi5iLWIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyB9XG5cbi5iLXQge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyB9XG5cbi5iLXIge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IH1cblxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7IH1cblxuLmZsZXgtZC1jIHtcbiAgZmxleC1kaXJlY3Rpb246IC13ZWJraXQtY29sdW1uO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG5cbi5mbGV4LWQtciB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cblxuLmZsZXgtYSB7XG4gIC13ZWJraXQtcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcbiAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG5cbi5hbGlnbi1pdGVtLWNlbnRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cblxuLnctNTAtcCB7XG4gIHdpZHRoOiA1MCU7IH1cblxuLnctMTAwLXAge1xuICB3aWR0aDogMTAwJTsgfVxuXG4ucC0yMCB7XG4gIHBhZGRpbmc6IDIwcHg7IH1cblxuLnB5LTQge1xuICBwYWRkaW5nOiA0cHggMHB4OyB9XG5cbi5weC0yMCB7XG4gIHBhZGRpbmc6IDBweCAyMHB4OyB9XG5cbi5wdC0zMCB7XG4gIHBhZGRpbmctdG9wOiAzMHB4OyB9XG5cbi5wdC0yMCB7XG4gIHBhZGRpbmctdG9wOiAyMHB4OyB9XG5cbi50ZXh0LWxlZnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XG5cbi50ZXh0LXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cblxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi50ZXh0LXVwcGVyY2FzZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cblxuLnJlc3VsdC1oIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IDJweDsgfVxuXG4ucmVzdWx0LWggc3BhbiB7XG4gIHdpZHRoOiA4MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cblxuLmgyLWMge1xuICBmb250LXNpemU6IDIwcHg7IH1cblxuLnByLTgge1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7IH1cblxuLnBiLTIwIHtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7IH1cblxuLm1iLTIwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxuXG4ucC0xMCB7XG4gIHBhZGRpbmc6IDEwcHg7IH1cblxuLnByLTRyZW0ge1xuICBwYWRkaW5nLXJpZ2h0OiA0cmVtOyB9XG5cbi5yaWdodC1hbGlnbiB7XG4gIGZsb2F0OiByaWdodDsgfVxuXG4ubGVmdC1hbGlnbiB7XG4gIGZsb2F0OiBsZWZ0OyB9XG5cbi5sb2dvLWltZyB7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIG1heC1oZWlnaHQ6IDEwMHB4OyB9XG5cbi50ZXh0LWxnIHtcbiAgZm9udC1zaXplOiAyNXB4OyB9XG5cbi5zY2hvb2wtc3RhbXAge1xuICB3aWR0aDogMTMwcHg7XG4gIG1pbi13aWR0aDogMTMwcHg7XG4gIG1heC13aWR0aDogMTMwcHg7XG4gIGhlaWdodDogMTMwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuLnNjaG9vbC1zdGFtcDo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzYlO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgY29udGVudDogXCJTY2hvb2wgc2VhbCBMb2dvXCI7IH1cblxuLnRvcC1zcGFjZSB7XG4gIHBhZGRpbmctdG9wOiAxLjRyZW07IH1cblxuLm9yZGVyLWxpc3QgLmxpc3Qge1xuICAvKiBkaXNwbGF5OmZsZXg7IFxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7ICovXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpc3Qtc3R5bGUtdHlwZTogZGVjaW1hbDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG5cbi5vcmRlci1saXN0IC5saXN0IC50ZXh0IHtcbiAgd2hpdGUtc3BhY2U6IHByZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuXG4ub3JkZXItbGlzdCAubGlzdCAudGl0bGUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuXG4uc2luZ2xlLWxpbmUge1xuICB3aWR0aDogMTA1MHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nLXRvcDogMTVweDsgfVxuXG4ub3JkZXItbGlzdCAubGlzdCAuaW4td29yZHMge1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7IH1cblxuLm1haW4tdGl0bGUge1xuICBiYWNrZ3JvdW5kOiAjNWY1ZjVmO1xuICBkaXNwbGF5OiBsaXN0LWl0ZW07XG4gIGNvbG9yOiAjZmZmOyB9XG5cbi5hdHRlbmRhbmNlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyB9XG5cbi5hdHRlbmRhbmNlIHRoZWFkIHtcbiAgYmFja2dyb3VuZDogIzVmNWY1ZjtcbiAgY29sb3I6ICNmZmY7IH1cblxuLmF0dGVuZGFuY2UgdHIgdGgsXG4uYXR0ZW5kYW5jZSB0ciB0ZCB7XG4gIHBhZGRpbmc6IDE1cHggMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLmF0dGVuZGFuY2UyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyB9XG5cbi5hdHRlbmRhbmNlMiB0aGVhZCB7XG4gIGJhY2tncm91bmQ6ICM1ZjVmNWY7XG4gIGNvbG9yOiAjZmZmOyB9XG5cbi5hdHRlbmRhbmNlMiB0ciB0aCB7XG4gIHBhZGRpbmc6IDE1cHggMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLmF0dGVuZGFuY2UyIHRyIHRkIHtcbiAgcGFkZGluZzogNXB4IDBweDsgfVxuXG4uYXR0ZW5kYW5jZTIgdHIgdGQ6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7IH1cblxuLmF0dGVuZGFuY2UyIHRyIHRkOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi5hdHRlbmRhbmNlMiB0cjpudGgtY2hpbGQoM24pIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkOyB9XG5cbi5vdXRlci1saW5lIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBtYXJnaW46IDVweCAzMHB4OyB9XG5cbi5vdXRlci1saW5lIC5oZWxwZXItdGFibGU6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGJvcmRlci10b3A6IG5vbmU7IH1cblxuLmhlbHBlci10YWJsZSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZzogOXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTsgfVxuXG4udG90YWwtdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgcGFkZGluZzogMTNweDtcbiAgbWFyZ2luLXRvcDogMjBweDsgfVxuXG4udG90YWwtdGFibGUgdGg6Zmlyc3QtY2hpbGQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIG1heC13aWR0aDogNTVweDsgfVxuXG4udG90YWwtdGFibGUgdGg6bGFzdC1jaGlsZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4OyB9XG5cbi5tYXJrcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItc3BhY2luZzogMDsgfVxuXG4ubWFya3MgdGhlYWQgdHIgdGgge1xuICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNkZWRlZGU7IH1cblxuLm1hcmtzIHRib2R5IHRyIHRkIHtcbiAgcGFkZGluZzogOHB4IDEwcHg7IH1cblxuLm1hcmtzLmJvcmRlci10ciB0aCxcbi5tYXJrcy5ib3JkZXItdHIgdGQge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAvKiB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICovIH1cblxuLm1hcmtzLmJvcmRlci10ciB0ZCAuY29udGVudCB7XG4gIHdpZHRoOiAxMnB4O1xuICBtYXJnaW46IGF1dG87XG4gIG92ZXJmbG93OiB2aXNpYmxlOyB9XG5cbi5tLXctMjAwIHtcbiAgLyogd2lkdGg6IDIwMHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDIwMHB4OyAqL1xuICBtaW4td2lkdGg6IDIwMHB4OyB9XG5cbi5tYXJrcy5ib3JkZXItdHIgdGg6bGFzdC1jaGlsZCxcbi5tYXJrcy5ib3JkZXItdHIgdGQ6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1yaWdodDogbm9uZTsgfVxuXG4uaGVhZGVyLXRpdGxlMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZWRlZGU7XG4gIHBhZGRpbmc6IDhweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDsgfVxuXG4udGVybXMge1xuICBwYWRkaW5nOiAyMHB4IDU1cHggNXB4OyB9XG5cbi50ZW0tdGFibGUge1xuICBwYWRkaW5nOiAwcHggMTMlOyB9XG5cbi5mZWUtcmVjaXB0IHRyIHRoLCAuZmVlLXJlY2lwdCB0ciB0ZCB7XG4gIG1heC13aWR0aDogMjAwcHg7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/reports/inactive-std-applications-report/inactive-std-applications-report.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/reports/inactive-std-applications-report/inactive-std-applications-report.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: InactiveStdApplicationsReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InactiveStdApplicationsReportComponent", function() { return InactiveStdApplicationsReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_service_reports_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/service/reports/reports.service */ "./src/app/service/reports/reports.service.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/grading-service/api/grade-setup.service */ "./src/app/service/grading-service/api/grade-setup.service.ts");
/* harmony import */ var app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/class-schedules/class-time-table.service */ "./src/app/service/class-schedules/class-time-table.service.ts");









var InactiveStdApplicationsReportComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](InactiveStdApplicationsReportComponent, _super);
    function InactiveStdApplicationsReportComponent(schoolReportsService, commonService, _fb, gradeSetupService, classTimetableService) {
        var _this = _super.call(this) || this;
        _this.schoolReportsService = schoolReportsService;
        _this.commonService = commonService;
        _this._fb = _fb;
        _this.gradeSetupService = gradeSetupService;
        _this.classTimetableService = classTimetableService;
        _this.columns = [];
        return _this;
    }
    InactiveStdApplicationsReportComponent.prototype.ngOnInit = function () {
        this.setColumns();
        this.getClasses();
        this.intiazilizeForm();
    };
    InactiveStdApplicationsReportComponent.prototype.setColumns = function () {
        this.columns = [
            { field: 'name', header: 'Name', sort: false, dataKey: 'name' },
            { field: 'status', header: 'Status', sort: false, dataKey: 'status' },
            { field: 'classAndSection', header: 'Class And Section', sort: false, dataKey: 'classAndSection' },
            { field: 'dateOfBirth', header: 'DOB', sort: false, dataKey: 'dateOfBirth' },
            { field: 'fatherName', header: 'Father Name', sort: false, dataKey: 'fatherName' },
            { field: 'motherName', header: 'Mother Name', sort: false, dataKey: 'motherName' },
            { field: 'contactInformation', header: 'Contact Information', sort: false, dataKey: 'contactInformation' },
            { field: 'admissionNumber', header: 'Admission Number', sort: false, dataKey: 'admissionNumber' },
            { field: 'studentGroup', header: 'Student Group', sort: false, dataKey: 'studentGroup' },
            { field: 'feeConcessionGroup', header: 'Fee Concession Group', sort: false, dataKey: 'feeConcessionGroup' },
        ];
    };
    InactiveStdApplicationsReportComponent.prototype.getInactiveStdApplicationsReport = function () {
        var _this = this;
        this.schoolReportsService.inActiveStudentsReports([this.searchForm.value.statusId], [this.searchForm.value.classId], [this.searchForm.value.sectionId]).subscribe(function (res) {
            _this.resultApplicationReports = res;
            _this.initializeTableSettings();
        });
    };
    InactiveStdApplicationsReportComponent.prototype.initializeTableSettings = function () {
        var _this = this;
        if (this.resultApplicationReports.inActiveStudentsDetailsView !== null && this.resultApplicationReports.inActiveStudentsDetailsView.length > 0) {
            this.resultApplicationReports.inActiveStudentsDetailsView.forEach(function (element) {
                element.dateOfBirth = (element.dateOfBirth == null) ? null : _this.commonService.customDateFormat(element.dateOfBirth, _this.getSchoolDateFormat()).date;
            });
            this.resultApplicationReports.inActiveStudentsDetailsView
                .push({ feeConcessionGroup: 'Total: ' + this.resultApplicationReports.inActiveStudentsCount + ' Inactive Students' });
        }
    };
    InactiveStdApplicationsReportComponent.prototype.generateReport = function (rp) {
        if (rp === 'generatePdfReport') {
            this.schoolReportsService.generatePdf(document.getElementById('admitted-std'), app_app_constants__WEBPACK_IMPORTED_MODULE_5__["Messages"].COMMON_TABLE_CSS);
        }
        if (rp === 'generateExcelReport') {
            this.schoolReportsService.exportToExcel('inactive-std-app', 'inactive_std_sum_report');
        }
    };
    InactiveStdApplicationsReportComponent.prototype.reset = function () {
        this.searchForm.reset();
        this.resultApplicationReports = null;
    };
    InactiveStdApplicationsReportComponent.prototype.intiazilizeForm = function () {
        this.searchForm = this._fb.group({
            classId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            sectionId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            statusId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null)
        });
    };
    InactiveStdApplicationsReportComponent.prototype.getClasses = function () {
        var _this = this;
        this.availableClasses = [];
        this.gradeSetupService.schoolAcademicClasses().subscribe(function (response) {
            if (response.listViews && response.listViews.length) {
                response.listViews.forEach(function (element) {
                    _this.availableClasses.push({
                        label: element.name,
                        value: element.id
                    });
                });
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    // on selection of class
    InactiveStdApplicationsReportComponent.prototype.onSelectClass = function (data) {
        var _this = this;
        this.availableSections = [];
        this.searchForm.controls.sectionId.setValue(null);
        if (!data.value) {
            return;
        }
        this.classTimetableService.classTimetableSectionsGet(data.value).subscribe(function (response) {
            if (response.classTimetableSectionsView != null) {
                if (response.classTimetableSectionsView.length) {
                    response.classTimetableSectionsView.map(function (x) {
                        _this.availableSections.push({ value: x.sectionId, label: x.sectionName + ' (' + x.boardName + ')' });
                    });
                }
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    InactiveStdApplicationsReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inactive-std-applications-report',
            template: __webpack_require__(/*! ./inactive-std-applications-report.component.html */ "./src/app/modules/reports/inactive-std-applications-report/inactive-std-applications-report.component.html"),
            styles: [__webpack_require__(/*! ./inactive-std-applications-report.component.scss */ "./src/app/modules/reports/inactive-std-applications-report/inactive-std-applications-report.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_reports_reports_service__WEBPACK_IMPORTED_MODULE_2__["SchoolReportsService"], app_service_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_7__["GradeSetupService"],
            app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_8__["ClassTimetableService"]])
    ], InactiveStdApplicationsReportComponent);
    return InactiveStdApplicationsReportComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/reports/marks-entry-report/marks-entry-report.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/reports/marks-entry-report/marks-entry-report.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"px-sm-32 pt-sm-24\" #search>\n  <div>\n    <form [formGroup]=\"searchForm\">\n      <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pb-4\">\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"36\"\n          class=\"icon-center pr-sm-12\">\n          <mat-label translate #class>Class</mat-label>\n          <mat-select formControlName=\"classId\" (selectionChange)=\"onSelectClass($event)\">\n            <mat-option *ngFor=\"let class of availableClasses\" [value]=\"class.value\">\n              {{ class.label }}</mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]='class.innerText' [validationControl]=\"searchForm.controls.classId\"\n              [doValidate]=\"true\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"32\"\n          class=\"pr-sm-12\">\n          <mat-label translate #section>Section</mat-label>\n          <mat-select formControlName=\"sectionId\">\n            <mat-option *ngFor=\"let section of availableSections\" [value]=\"section.value\">\n              {{ section.label }}</mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]='section.innerText' [validationControl]=\"searchForm.controls.sectionId\"\n              [doValidate]=\"true\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        <!-- <mat-form-field fxFlexFill appearance=\"outline\" class=\"pr-sm-12\" fxLayout=\"column\" fxFlex=\"100\"\n          fxFlex.gt-sm=\"32\">\n          <mat-label #section translate>Term</mat-label>\n          <mat-select placeholder=\"Payment Status\" formControlName=\"termId\">\n            <mat-option *ngIf=\"paymentStatus?.length\"></mat-option>\n            <mat-option *ngFor=\"let status of paymentStatus\" [value]=\"status.value\">\n              {{ status.label }}</mat-option>\n          </mat-select>\n        </mat-form-field> -->\n      </div>\n\n      <div fxLayout=\"column\" fxLayout.gt-sm=\"row\">\n        <!-- <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"30\"\n          class=\"pr-sm-12\">\n          <mat-label #paymentTypeId translate>Course Category</mat-label>\n          <mat-select formControlName=\"courseCategoryId\" (selectionChange)=\"paymentTypeSelection($event.value)\">\n            <mat-option *ngFor=\"let paymentTypes of paymentTypesList\" [value]=\"paymentTypes.code\">\n              {{ paymentTypes.name }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field> -->\n\n        <!-- <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" class=\"pr-sm-12\"\n          fxFlex.gt-sm=\"30\">\n          <mat-label #paymentTypeId translate>Course</mat-label>\n          <mat-select formControlName=\"courseId\" (selectionChange)=\"paymentTypeSelection($event.value)\">\n            <mat-option *ngFor=\"let paymentTypes of paymentTypesList\" [value]=\"paymentTypes.code\">\n              {{ paymentTypes.name }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field> -->\n\n        <!-- <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\">\n          <input matInput formControlName=\"inputDate\" [satDatepicker]=\"picker\" placeholder=\"Choose a date\">\n          <sat-datepicker #picker [rangeMode]=\"true\"> </sat-datepicker>\n          <sat-datepicker-toggle matSuffix [for]=\"picker\"></sat-datepicker-toggle>\n          <mat-label translate #dob>Date</mat-label>\n          <mat-error>\n            <app-validation [labelName]='dob.innerText' [validationControl]=\"searchForm.controls.dateOfBirth\"\n              [doValidate]=\"true\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field> -->\n        <div fxLayoutAlign=\"end center\">\n          <button mat-raised-button translate color=\"accent\" class=\"text-uppercase ml-12 mb-20\"\n            (click)=\"getMarksEntryReport()\">\n            {{'Search' | translate}}\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n<div class='invoice-container'>\n  <span style=\"color:#fff\">A</span>\n  <div class='b flex-d-c invoice-body' style='overflow: hidden; '>\n      <div class='p-20 flex flex-d-r b-b'>\n        <div class='mr-20 flex flex-d-c flex-a b' *ngIf=\"schoolDetails?.brandingSymbolLogo\">\n          <img class=\"logo-img\" [src]=\"schoolDetails?.brandingSymbolLogo\" />\n        </div>\n        <div class='flex-d-c text-center pr-4rem' style='-webkit-flex:1 1 auto; flex:1 1 auto;'>\n          <div class='py-4 text-uppercase'>{{schoolDetails?.name}}</div>\n          <div class='py-4'>{{schoolDetails?.line1}}</div>\n          <div class='py-4'>{{schoolDetails?.city}}</div>\n        </div>\n      </div>\n      <h3 class=\"text-center text-uppercase\">Marks Entry Report</h3>\n      <div class=\"p-10 mb-20 flex\" style=\" place-content: space-between;\">\n          <div style=\"width: 30%; padding-top: 40px;\">Report Generated On : {{ date }}</div>\n          <div style=\"width: 40%; padding: 40px 30px 0px;\"> {{acadmicSession?.name}} ({{acadmicSession?.startDate | date: 'MMM d, y'}} -\n            {{acadmicSession?.endDate | date: 'MMM d, y'}})</div>\n          <!-- <div class=\" box-bg p-10 b\" style=\"width: 40%;\">\n             <div><small>Report Parameters</small></div>\n             <div><small>Class 1</small></div>\n             <div><small>Section A</small></div>\n             <div><small>Term - Term 1, Term II</small></div>\n             <div><small>Course Category : Mandatory Subjects, Optional II Language, Optional III</small></div>\n             <div><small>Language</small></div>\n          </div> -->\n      </div>\n      <h4 class=\"text-center text-uppercase\">Class : 1    Section A </h4>         \n      <div class=\"px-10 scroll-table\">\n          <table class=\"attendance b table-border marks-table\">                 \n              <thead>\n                  <tr class=\"header2\">\n                      <th>Term I </th>\n                      <th colspan=\"4\">English</th>\n                      <th colspan=\"4\">Social</th>\n                      <th colspan=\"4\">Maths</th>\n                      <th colspan=\"4\">Science</th>\n                      <th colspan=\"4\">II Language - Hindi</th>\n                      <th colspan=\"4\">III Language - Telugu</th>                           \n                  </tr>\n                  <tr>\n                      <th>\n                          <div>\n                              <div>Student Info</div>\n                              <div><small>(Roll#,Admission#,Name)</small></div>\n                          </div>\n                      </th>\n                      <th>TTYP 1</th>\n                      <th>TTYP 2</th>\n                      <th>TTYP 3</th>\n                      <th>Total</th> \n                      <th>TTYP 1</th>\n                      <th>TTYP 2</th>\n                      <th>TTYP 3</th>\n                      <th>Total</th>\n                      <th>TTYP 1</th>\n                      <th>TTYP 2</th>\n                      <th>TTYP 3</th>\n                      <th>Total</th>\n                      <th>TTYP 1</th>\n                      <th>TTYP 2</th>\n                      <th>TTYP 3</th>\n                      <th>Total</th>\n                      <th>TTYP 1</th>\n                      <th>TTYP 2</th>\n                      <th>TTYP 3</th>\n                      <th>Total</th>\n                      <th>TTYP 1</th>\n                      <th>TTYP 2</th>\n                      <th>TTYP 3</th>\n                      <th>Total</th>                         \n                  </tr>\n              </thead>\n              <tbody>\n                  <tr>\n                      <td>1 ADM01 XXXXXXXXXXX </td>\n                      <td>2 </td>\n                      <td>2 </td>\n                      <td>2 </td>\n                      <td>2 </td>\n                      <td>2 </td>\n                      <td>2 </td>\n                      <td>2 </td>\n                      <td>2 </td>\n                      <td>2 </td>\n                      <td>2 </td>\n                      <td>2 </td>\n                      <td>2 </td>\n                      <td>2 </td>\n                      <td>2 </td>\n                      <td>2 </td>\n                      <td>2 </td>\n                      <td>2 </td>\n                      <td>2 </td>\n                      <td>2 </td>\n                      <td>2 </td>\n                      <td>2 </td>\n                      <td>2 </td>\n                      <td>2 </td>\n                      <td>2 </td>\n                      \n                  </tr>\n                  <!-- <tr>\n                      <td class=\"text-right b-t\" colspan=\"9\">Total : 5 Admitted Students</td>\n                  </tr> -->\n              </tbody>\n          </table>\n      </div>\n      <div class=\"flex px-20\" style=\" place-content: space-between;\">\n          <p class=\"top-space\" style=\"width: 40%;\">Principal</p>\n          <p class=\"top-space\" style=\"width: 45%;\">teacher</p>  \n          <p class=\"top-space\" style=\"width: 120\">Date Signed</p>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/reports/marks-entry-report/marks-entry-report.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/reports/marks-entry-report/marks-entry-report.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media print {\n  @page {\n    size: landscape; } }\n\nbody {\n  font-family: sans-serif; }\n\n.invoice-container {\n  padding: 0px 25px;\n  margin: 0px auto;\n  max-width: 1120px; }\n\n.b {\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.b-b {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.b-t {\n  border-top: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.b-r {\n  border-right: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.flex {\n  display: -webkit-box;\n  display: flex;\n  display: -webkit-flex; }\n\n.flex-d-c {\n  flex-direction: -webkit-column;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n\n.flex-d-r {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row; }\n\n.flex-a {\n  -webkit-place-content: center center;\n  place-content: center center;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.align-item-center {\n  -webkit-box-align: center;\n          align-items: center; }\n\n.w-50-p {\n  width: 50%; }\n\n.w-100-p {\n  width: 100%; }\n\n.p-20 {\n  padding: 20px; }\n\n.py-4 {\n  padding: 4px 0px; }\n\n.px-20 {\n  padding: 0px 20px; }\n\n.pt-30 {\n  padding-top: 30px; }\n\n.pt-20 {\n  padding-top: 20px; }\n\n.text-left {\n  text-align: left; }\n\n.text-right {\n  text-align: right !important; }\n\n.text-center {\n  text-align: center; }\n\n.text-uppercase {\n  text-transform: uppercase; }\n\n.result-h {\n  font-size: 20px;\n  padding: 20px;\n  margin: 2px; }\n\n.result-h span {\n  width: 80px;\n  display: inline-block; }\n\n.h2-c {\n  font-size: 20px; }\n\n.pr-8 {\n  padding-right: 8px; }\n\n.pb-20 {\n  padding-bottom: 20px; }\n\n.mb-20 {\n  margin-bottom: 20px; }\n\n.p-10 {\n  padding: 10px; }\n\n.pr-4rem {\n  padding-right: 4rem; }\n\n.right-align {\n  float: right; }\n\n.left-align {\n  float: left; }\n\n.logo-img {\n  max-width: 200px;\n  max-height: 100px; }\n\n.text-lg {\n  font-size: 25px; }\n\n.top-space {\n  padding-top: 1.4rem; }\n\n.main-title {\n  background: #5f5f5f;\n  display: list-item;\n  color: #fff; }\n\n/* #########################Table related css ############### */\n\n.attendance {\n  width: 100%;\n  border-spacing: 0;\n  border-collapse: collapse; }\n\n.attendance thead {\n  background: #5f5f5f;\n  color: #fff; }\n\n.attendance tr th,\n.attendance tr td {\n  padding: 15px 5px;\n  text-align: center;\n  min-width: 130px; }\n\n.table-border.attendance tr th,\n.table-border.attendance tr td {\n  border-right: 1px solid #808080; }\n\n.attendance tr td:not(:first-child) {\n  width: 20%;\n  word-break: break-all; }\n\n.attendance tr th:first-child {\n  min-width: 150px;\n  max-width: 150px; }\n\n.marks-table.attendance tr th:not(:first-child),\n.marks-table.attendance tr td:not(:first-child) {\n  min-width: 60px; }\n\n.marks-table.attendance tr th:first-child,\n.marks-table.attendance tr td:first-child {\n  min-width: 165px; }\n\n.marks-table.attendance tr.header2 th:not(:first-child) {\n  border-bottom: 1px solid #808080; }\n\n.marks-table.attendance tr.header2 th:first-child {\n  background: white;\n  color: #565656; }\n\n.text-right {\n  text-align: right !important; }\n\n.b-t {\n  border-top: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.outer-line {\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  margin: 5px 30px; }\n\n.outer-line .helper-table:first-child {\n  margin-top: 0px;\n  border-top: none; }\n\n.helper-table {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n  margin-bottom: 0px;\n  margin-top: 20px;\n  padding: 9px;\n  width: 100%;\n  border-top: 1px solid rgba(0, 0, 0, 0.3); }\n\n.px-55 {\n  padding: 0px 13%; }\n\n.scroll-table {\n  overflow: auto; }\n\n.total-table {\n  width: 100%;\n  border-top: 1px solid rgba(0, 0, 0, 0.3);\n  padding: 13px;\n  margin-top: 20px; }\n\n.total-table th:first-child {\n  text-align: left;\n  padding-left: 20px;\n  max-width: 55px; }\n\n.total-table th:last-child {\n  text-align: right;\n  padding-right: 20px; }\n\n.px-10 {\n  padding: 0px 20px; }\n\n.terms {\n  padding: 20px 13% 5px; }\n\n/* ######################### End Table related css ############### */\n\n.clear-both {\n  clear: both; }\n\n.box-bg {\n  background: #cecece; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvcmVwb3J0cy9tYXJrcy1lbnRyeS1yZXBvcnQvbWFya3MtZW50cnktcmVwb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWE7SUFBTyxlQUFlLEVBQUEsRUFBQTs7QUFDM0I7RUFDSSx1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUNKLEVBQUE7O0FBRUE7RUFDSSxvQ0FBb0M7RUFDcEMseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksMkNBQTJDO0VBQzNDLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLHdDQUF3QztFQUN4Qyx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSwwQ0FBMEM7RUFDMUMseUJBQ0osRUFBQTs7QUFFQTtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLDhCQUE4QjtFQUM5Qiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksb0NBQW9DO0VBQ3BDLDRCQUE0QjtFQUU1Qix5QkFBbUI7VUFBbkIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0kseUJBQW1CO1VBQW5CLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLFVBQVUsRUFBQTs7QUFHZDtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSw0QkFBNEIsRUFBQTs7QUFHaEM7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxlQUFlO0VBQ2YsYUFBYTtFQUNiLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFdBQVc7RUFDWCxxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksb0JBQW9CLEVBQUE7O0FBSXhCO0VBQ0ksbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxnQkFBZ0I7RUFDaEIsaUJBQ0osRUFBQTs7QUFFQTtFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTs7QUFJZiwrREFBQTs7QUFDQTtFQUNJLFdBQVc7RUFDWCxpQkFBaUI7RUFFakIseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksbUJBQW1CO0VBQ25CLFdBQVcsRUFBQTs7QUFHZjs7RUFFSSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdwQjs7RUFFSSwrQkFBK0IsRUFBQTs7QUFHbkM7RUFDSSxVQUFVO0VBQ1YscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUVwQjs7RUFFSSxlQUFlLEVBQUE7O0FBRW5COztFQUVJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGdDQUFnQyxFQUFBOztBQUVwQztFQUNJLGlCQUFpQjtFQUNqQixjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksNEJBQTRCLEVBQUE7O0FBR2hDO0VBQ0ksd0NBQXdDO0VBQ3hDLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLG9DQUFvQztFQUNwQyxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksMkNBQTJDO0VBQzNDLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFdBQVc7RUFDWCx3Q0FBd0MsRUFBQTs7QUFHNUM7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksV0FBVztFQUNYLHdDQUF3QztFQUN4QyxhQUFhO0VBQ2IsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksaUJBQWlCO0VBQ2pCLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLHFCQUFxQixFQUFBOztBQUV6QixvRUFBQTs7QUFDQTtFQUNJLFdBQVcsRUFBQTs7QUFFZjtFQUNJLG1CQUE4QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9yZXBvcnRzL21hcmtzLWVudHJ5LXJlcG9ydC9tYXJrcy1lbnRyeS1yZXBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgcHJpbnR7QHBhZ2Uge3NpemU6IGxhbmRzY2FwZX19XG4gICAgICAgIGJvZHkge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgIH1cblxuICAgICAgICAuaW52b2ljZS1jb250YWluZXIge1xuICAgICAgICAgICAgcGFkZGluZzogMHB4IDI1cHg7XG4gICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMTIwcHhcbiAgICAgICAgfVxuXG4gICAgICAgIC5iIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMwKTtcbiAgICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgICAgIH1cblxuICAgICAgICAuYi1iIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zMCk7XG4gICAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmItdCB7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzApO1xuICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5iLXIge1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzApO1xuICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZVxuICAgICAgICB9XG5cbiAgICAgICAgLmZsZXgge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mbGV4LWQtYyB7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogLXdlYmtpdC1jb2x1bW47XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZsZXgtZC1yIHtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIH1cblxuICAgICAgICAuZmxleC1hIHtcbiAgICAgICAgICAgIC13ZWJraXQtcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XG4gICAgICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFsaWduLWl0ZW0tY2VudGVyIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAudy01MC1wIHtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIH1cblxuICAgICAgICAudy0xMDAtcCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wLTIwIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAucHktNCB7XG4gICAgICAgICAgICBwYWRkaW5nOiA0cHggMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnB4LTIwIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnB0LTMwIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnB0LTIwIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRleHQtbGVmdCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRleHQtcmlnaHQge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50ZXh0LWNlbnRlciB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAudGV4dC11cHBlcmNhc2Uge1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yZXN1bHQtaCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAycHg7XG4gICAgICAgIH1cblxuICAgICAgICAucmVzdWx0LWggc3BhbiB7XG4gICAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIC5oMi1jIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wci04IHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wYi0yMCB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYi0yMCB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnAtMTAge1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wci00cmVtIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDRyZW07XG4gICAgICAgIH1cblxuICAgICAgICAucmlnaHQtYWxpZ24ge1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmxlZnQtYWxpZ24ge1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICAubG9nby1pbWcge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMHB4XG4gICAgICAgIH1cblxuICAgICAgICAudGV4dC1sZyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAudG9wLXNwYWNlIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxLjRyZW07XG4gICAgICAgIH1cblxuICAgICAgICAubWFpbi10aXRsZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNWY1ZjVmO1xuICAgICAgICAgICAgZGlzcGxheTogbGlzdC1pdGVtO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8qICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNUYWJsZSByZWxhdGVkIGNzcyAjIyMjIyMjIyMjIyMjIyMgKi9cbiAgICAgICAgLmF0dGVuZGFuY2Uge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXItc3BhY2luZzogMDtcblxuICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZSxcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdHRlbmRhbmNlIHRoZWFkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM1ZjVmNWY7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdHRlbmRhbmNlIHRyIHRoLFxuICAgICAgICAuYXR0ZW5kYW5jZSB0ciB0ZCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDVweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAudGFibGUtYm9yZGVyLmF0dGVuZGFuY2UgdHIgdGgsXG4gICAgICAgIC50YWJsZS1ib3JkZXIuYXR0ZW5kYW5jZSB0ciB0ZCB7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjODA4MDgwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmF0dGVuZGFuY2UgdHIgdGQ6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdHRlbmRhbmNlIHRyIHRoOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5tYXJrcy10YWJsZS5hdHRlbmRhbmNlIHRyIHRoOm5vdCg6Zmlyc3QtY2hpbGQpLFxuICAgICAgICAubWFya3MtdGFibGUuYXR0ZW5kYW5jZSB0ciB0ZDpub3QoOmZpcnN0LWNoaWxkKXtcbiAgICAgICAgICAgIG1pbi13aWR0aDogNjBweDtcbiAgICAgICAgfVxuICAgICAgICAubWFya3MtdGFibGUuYXR0ZW5kYW5jZSB0ciB0aDpmaXJzdC1jaGlsZCxcbiAgICAgICAgLm1hcmtzLXRhYmxlLmF0dGVuZGFuY2UgdHIgdGQ6Zmlyc3QtY2hpbGR7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDE2NXB4O1xuICAgICAgICB9XG4gICAgICAgIC5tYXJrcy10YWJsZS5hdHRlbmRhbmNlIHRyLmhlYWRlcjIgdGg6bm90KDpmaXJzdC1jaGlsZCl7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzgwODA4MDtcbiAgICAgICAgfSAgXG4gICAgICAgIC5tYXJrcy10YWJsZS5hdHRlbmRhbmNlIHRyLmhlYWRlcjIgdGg6Zmlyc3QtY2hpbGR7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIGNvbG9yOiAjNTY1NjU2O1xuICAgICAgICB9ICAgICAgIFxuICAgICAgICAudGV4dC1yaWdodCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLmItdCB7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzApO1xuICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5vdXRlci1saW5lIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMwKTtcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IDMwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLm91dGVyLWxpbmUgLmhlbHBlci10YWJsZTpmaXJzdC1jaGlsZHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVscGVyLXRhYmxlIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zMCk7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogOXB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzApO1xuICAgICAgICB9XG5cbiAgICAgICAgLnB4LTU1IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxMyU7XG4gICAgICAgIH1cblxuICAgICAgICAuc2Nyb2xsLXRhYmxlIHtcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIC50b3RhbC10YWJsZXtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMwKTsgXG4gICAgICAgICAgICBwYWRkaW5nOiAxM3B4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDsgIFxuICAgICAgICB9XG4gICAgICAgIC50b3RhbC10YWJsZSB0aDpmaXJzdC1jaGlsZHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDU1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRvdGFsLXRhYmxlIHRoOmxhc3QtY2hpbGR7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnB4LTEwe1xuICAgICAgICAgICAgcGFkZGluZzogMHB4IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRlcm1zIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMTMlIDVweDtcbiAgICAgICAgfVxuICAgICAgICAvKiAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIEVuZCBUYWJsZSByZWxhdGVkIGNzcyAjIyMjIyMjIyMjIyMjIyMgKi9cbiAgICAgICAgLmNsZWFyLWJvdGh7XG4gICAgICAgICAgICBjbGVhcjogYm90aDtcbiAgICAgICAgfVxuICAgICAgICAuYm94LWJne1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDIwNiwgMjA2LCAyMDYpO1xuICAgICAgICB9Il19 */"

/***/ }),

/***/ "./src/app/modules/reports/marks-entry-report/marks-entry-report.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/reports/marks-entry-report/marks-entry-report.component.ts ***!
  \************************************************************************************/
/*! exports provided: MarksEntryReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarksEntryReportComponent", function() { return MarksEntryReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_service_reports_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/service/reports/reports.service */ "./src/app/service/reports/reports.service.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/class-schedules/class-time-table.service */ "./src/app/service/class-schedules/class-time-table.service.ts");
/* harmony import */ var app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/grading-service/api/grade-setup.service */ "./src/app/service/grading-service/api/grade-setup.service.ts");







var MarksEntryReportComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MarksEntryReportComponent, _super);
    function MarksEntryReportComponent(schoolReportsService, gradeSetupService, classTimetableService) {
        var _this = _super.call(this) || this;
        _this.schoolReportsService = schoolReportsService;
        _this.gradeSetupService = gradeSetupService;
        _this.classTimetableService = classTimetableService;
        return _this;
    }
    MarksEntryReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getClasses();
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            termId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            courseCategoryId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            courseId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            classId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            sectionId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null)
        });
        this.schoolReportsService.getSchoolDetails().then(function (schoolDetails) {
            _this.schoolDetails = schoolDetails;
            _this.getMarksEntryReport();
        });
    };
    MarksEntryReportComponent.prototype.getMarksEntryReport = function () {
        var _this = this;
        // [this.searchForm.value.classId], [this.searchForm.value.sectionId]
        this.schoolReportsService.marksEntryReport().subscribe(function (res) {
            _this.resultApplicationReports = res;
        });
    };
    MarksEntryReportComponent.prototype.getClasses = function (isManualChange) {
        var _this = this;
        if (isManualChange === void 0) { isManualChange = false; }
        this.availableClasses = [];
        this.gradeSetupService.schoolAcademicClasses().subscribe(function (response) {
            if (response.listViews && response.listViews.length) {
                response.listViews.forEach(function (element) {
                    _this.availableClasses.push({
                        label: element.name,
                        value: element.id
                    });
                });
                if (isManualChange) {
                    _this.onSelectClass({ value: _this.searchForm.value.classId }, isManualChange);
                }
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    // on selection of class
    MarksEntryReportComponent.prototype.onSelectClass = function (data, isManualChange) {
        var _this = this;
        if (isManualChange === void 0) { isManualChange = false; }
        this.availableSections = [];
        if (!isManualChange) {
            this.searchForm.controls.sectionId.setValue(null);
        }
        this.classTimetableService.classTimetableSectionsGet(data.value).subscribe(function (response) {
            if (response.classTimetableSectionsView != null) {
                if (response.classTimetableSectionsView.length) {
                    response.classTimetableSectionsView.map(function (x) {
                        _this.availableSections.push({ value: x.sectionId, label: x.sectionName + ' (' + x.boardName + ')' });
                    });
                }
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    MarksEntryReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-marks-entry-report',
            template: __webpack_require__(/*! ./marks-entry-report.component.html */ "./src/app/modules/reports/marks-entry-report/marks-entry-report.component.html"),
            styles: [__webpack_require__(/*! ./marks-entry-report.component.scss */ "./src/app/modules/reports/marks-entry-report/marks-entry-report.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_reports_reports_service__WEBPACK_IMPORTED_MODULE_2__["SchoolReportsService"], app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_6__["GradeSetupService"], app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_5__["ClassTimetableService"]])
    ], MarksEntryReportComponent);
    return MarksEntryReportComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/reports/payment-correction-report/payment-correction-report.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/reports/payment-correction-report/payment-correction-report.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"px-sm-32 pt-sm-24\" #search>\n  <form [formGroup]=\"searchForm\" #ngForm=\"ngForm\">\n    <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pb-4\">\n      <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"36\"\n        class=\"icon-center pr-sm-12\">\n        <mat-label #studentId translate>Search Student Name</mat-label>\n        <input #studentName matInput placeholder=\"Search Students\" formControlName=\"studentSearch\"\n          aria-label=\"StudentName\" matInput [matAutocomplete]=\"studentNameSearch\">\n        <mat-icon class=\"grey-400-fg\" matSuffix>search</mat-icon>\n        <mat-autocomplete #studentNameSearch=\"matAutocomplete\" [displayWith]=\"displayFn\">\n          <mat-option *ngFor=\"let option of filterdStudents\" [value]=\"option\">\n            {{option.studentName}}\n            <span class=\"grey-400-fg\"> {{option.currentClassName}} {{option.currentSectionName}} </span>\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n    </div>\n\n    <div fxLayout=\"column\" fxLayout.gt-sm=\"row\">\n      <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"30\" class=\"pr-sm-12\">\n        <mat-label #section translate>Payment Status</mat-label>\n        <mat-select placeholder=\"Payment Status\" formControlName=\"paymentStatusId\">\n          <mat-option *ngIf=\"paymentStatus?.length\"></mat-option>\n          <mat-option *ngFor=\"let status of paymentStatus\" [value]=\"status.value\">\n            {{ status.label }}</mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" class=\"pr-sm-12\" fxFlex.gt-sm=\"30\">\n        <mat-label #paymentTypeId translate>Payment Mode</mat-label>\n        <mat-select formControlName=\"paymentMode\">\n          <mat-option *ngIf=\"paymentTypesList?.length\"></mat-option>\n          <mat-option *ngFor=\"let paymentTypes of paymentTypesList\" [value]=\"paymentTypes.id\">\n            {{ paymentTypes.name }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\">\n        <input matInput formControlName=\"inputDate\" [satDatepicker]=\"picker\" placeholder=\"Choose a date\">\n        <sat-datepicker #picker [rangeMode]=\"true\"> </sat-datepicker>\n        <sat-datepicker-toggle matSuffix [for]=\"picker\"></sat-datepicker-toggle>\n        <mat-label translate #dob>Date</mat-label>\n        <mat-error>\n          <app-validation [labelName]='dob.innerText' [validationControl]=\"searchForm.controls.dateOfBirth\"\n            [doValidate]=\"true\">\n          </app-validation>\n        </mat-error>\n      </mat-form-field>\n      <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"mr-20 pb-20\">\n        <button mat-raised-button translate color=\"primary\" class=\"text-uppercase ml-12\" (click)=\"reset()\" type=\"reset\">\n          Reset\n        </button>\n        <button type=\"submit\" mat-raised-button translate color=\"accent\" class=\"text-uppercase ml-12\"\n          (click)=\"getPaymentCorrectionReport()\">\n          Search\n        </button>\n      </div>\n    </div>\n  </form>\n</div>\n\n<app-custom-card *ngIf=\"!(reportResults?.paymentCorrections?.length) && ngForm.submitted\"\n  [inputMessage]=\"'No Record Found'\">\n</app-custom-card>\n<div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"px-32 py-12\" *ngIf=\"reportResults?.paymentCorrections?.length\">\n  <button mat-stroked-button class=\"mr-12\" (click)=\"generateReport('generatePdfReport')\">\n    <mat-icon class=\"mr-4\">save_alt</mat-icon>Download PDF\n  </button>\n  <button mat-stroked-button (click)=\"generateReport('generateExcelReport')\">\n    <mat-icon class=\"mr-4\">save_alt</mat-icon> Download EXCEL\n  </button>\n</div>\n<div class='invoice-container' id=\"admitted-std\" *ngIf=\"reportResults?.paymentCorrections?.length\" style=\"padding: 25px; padding-top: 0px;\">\n  <span class=\"dark-theme-color\" style=\"color:#fff\">A</span>\n  <div class='b flex-d-c invoice-body' style='overflow: hidden; '>\n    <h3 class=\"text-center text-uppercase\">Payment Corrections Report</h3>\n    <div class=\"p-10 mb-20 main-title\">\n      <div class=\"left-align\">Report Generated On : {{ date }}</div>\n      <div class=\"right-align flex\" *ngIf=\"acadmicSession\">\n        {{acadmicSession?.name}} ({{acadmicSession?.startDate | date: 'MMM d, y'}} -\n        {{acadmicSession?.endDate | date: 'MMM d, y'}})\n      </div>\n    </div>\n    <div class=\"px-20 pt-20\">Payment Correction Details</div>\n    <div class=\"p-10\" *ngIf=\"reportResults?.paymentCorrections?.length\">\n      <app-af-report-table [inputData]=\"reportResults?.paymentCorrections\" [tableId]=\"'pmt-cor-rpt'\"\n        [columns]=\"columns\"></app-af-report-table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/reports/payment-correction-report/payment-correction-report.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/reports/payment-correction-report/payment-correction-report.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invoice-container {\n  padding: 0px 25px;\n  margin: 0px auto; }\n\n.b {\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.b-b {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.b-t {\n  border-top: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.b-r {\n  border-right: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.flex {\n  display: -webkit-box;\n  display: flex;\n  display: -webkit-flex; }\n\n.flex-d-c {\n  flex-direction: -webkit-column;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n\n.flex-d-r {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row; }\n\n.flex-a {\n  -webkit-place-content: center center;\n  place-content: center center;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.align-item-center {\n  -webkit-box-align: center;\n          align-items: center; }\n\n.w-50-p {\n  width: 50%; }\n\n.w-100-p {\n  width: 100%; }\n\n.p-20 {\n  padding: 20px; }\n\n.py-4 {\n  padding: 4px 0px; }\n\n.px-20 {\n  padding: 0px 20px; }\n\n.pt-30 {\n  padding-top: 30px; }\n\n.pt-20 {\n  padding-top: 20px; }\n\n.text-left {\n  text-align: left; }\n\n.text-right {\n  text-align: right; }\n\n.text-center {\n  text-align: center; }\n\n.text-uppercase {\n  text-transform: uppercase; }\n\n.result-h {\n  font-size: 20px;\n  padding: 20px;\n  margin: 2px; }\n\n.result-h span {\n  width: 80px;\n  display: inline-block; }\n\n.h2-c {\n  font-size: 20px; }\n\n.pr-8 {\n  padding-right: 8px; }\n\n.pb-20 {\n  padding-bottom: 20px; }\n\n.mb-20 {\n  margin-bottom: 20px; }\n\n.p-10 {\n  padding: 10px; }\n\n.pr-4rem {\n  padding-right: 4rem; }\n\n.right-align {\n  float: right; }\n\n.left-align {\n  float: left; }\n\n.logo-img {\n  max-width: 200px;\n  max-height: 100px; }\n\n.text-lg {\n  font-size: 25px; }\n\n.school-stamp {\n  width: 130px;\n  min-width: 130px;\n  max-width: 130px;\n  height: 130px;\n  border: 1px solid;\n  border-radius: 100%;\n  position: relative; }\n\n.school-stamp::after {\n  position: absolute;\n  top: 36%;\n  left: 0;\n  width: 100%;\n  content: \"School seal Logo\"; }\n\n.top-space {\n  padding-top: 1.4rem; }\n\n.order-list .list {\n  /* display:flex; \n        display: -webkit-flex; */\n  padding-right: 20px;\n  padding-bottom: 25px;\n  font-size: 18px;\n  list-style-type: decimal;\n  display: inline-block; }\n\n.order-list .list .text {\n  white-space: pre;\n  overflow: hidden; }\n\n.order-list .list .title {\n  white-space: nowrap;\n  margin-right: 20px;\n  display: inline-block; }\n\n.single-line {\n  width: 1050px;\n  white-space: nowrap;\n  overflow: hidden;\n  padding-top: 15px; }\n\n.order-list .list .in-words {\n  padding-right: 5px; }\n\n.main-title {\n  background: #5f5f5f;\n  display: list-item;\n  color: #fff; }\n\n.attendance {\n  width: 100%;\n  border-spacing: 0;\n  border-collapse: collapse; }\n\n.attendance thead {\n  background: #5f5f5f;\n  color: #fff; }\n\n.attendance tr th,\n.attendance tr td {\n  padding: 15px 0px;\n  text-align: center; }\n\n.attendance2 {\n  width: 100%;\n  border-spacing: 0;\n  border-collapse: collapse; }\n\n.attendance2 thead {\n  background: #5f5f5f;\n  color: #fff; }\n\n.attendance2 tr th {\n  padding: 15px 0px;\n  text-align: center; }\n\n.attendance2 tr td {\n  padding: 5px 0px; }\n\n.attendance2 tr td:first-child {\n  padding-left: 10px; }\n\n.attendance2 tr td:not(:first-child) {\n  text-align: center; }\n\n.attendance2 tr:nth-child(3n) {\n  border-bottom: 1px solid; }\n\n.outer-line {\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  margin: 5px 30px; }\n\n.outer-line .helper-table:first-child {\n  margin-top: 0px;\n  border-top: none; }\n\n.helper-table {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n  margin-bottom: 0px;\n  margin-top: 20px;\n  padding: 9px;\n  width: 100%;\n  border-top: 1px solid rgba(0, 0, 0, 0.3); }\n\n.total-table {\n  width: 100%;\n  border-top: 1px solid rgba(0, 0, 0, 0.3);\n  padding: 13px;\n  margin-top: 20px; }\n\n.total-table th:first-child {\n  text-align: left;\n  padding-left: 20px;\n  max-width: 55px; }\n\n.total-table th:last-child {\n  text-align: right;\n  padding-right: 20px; }\n\n.marks {\n  width: 100%;\n  border-spacing: 0; }\n\n.marks thead tr th {\n  padding: 10px 10px;\n  background: #dedede; }\n\n.marks tbody tr td {\n  padding: 8px 10px; }\n\n.marks.border-tr th,\n.marks.border-tr td {\n  border-right: 1px solid rgba(0, 0, 0, 0.3);\n  text-align: center;\n  font-size: 18px;\n  word-break: break-word;\n  /* text-transform: uppercase */ }\n\n.marks.border-tr td .content {\n  width: 12px;\n  margin: auto;\n  overflow: visible; }\n\n.m-w-200 {\n  /* width: 200px;\n        max-width: 200px; */\n  min-width: 200px; }\n\n.marks.border-tr th:last-child,\n.marks.border-tr td:last-child {\n  border-right: none; }\n\n.header-title2 {\n  background-color: #dedede;\n  padding: 8px;\n  font-size: 18px;\n  font-weight: bold; }\n\n.terms {\n  padding: 20px 55px 5px; }\n\n.tem-table {\n  padding: 0px 13%; }\n\n.fee-recipt tr th, .fee-recipt tr td {\n  max-width: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvcmVwb3J0cy9jb21tb24tcmVwb3J0cy5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3JlcG9ydHMvcGF5bWVudC1jb3JyZWN0aW9uLXJlcG9ydC9wYXltZW50LWNvcnJlY3Rpb24tcmVwb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUlwQjtFQUNJLG9DQUFvQztFQUNwQyx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSwyQ0FBMkM7RUFDM0MseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksd0NBQXdDO0VBQ3hDLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLDBDQUEwQztFQUMxQyx5QkFDSixFQUFBOztBQUVBO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksOEJBQThCO0VBQzlCLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksOEJBQW1CO0VBQW5CLDZCQUFtQjtVQUFuQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxvQ0FBb0M7RUFDcEMsNEJBQTRCO0VBRTVCLHlCQUFtQjtVQUFuQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSx5QkFBbUI7VUFBbkIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksVUFBVSxFQUFBOztBQUdkO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGtCQUFrQixFQUFBOztBQUd0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O0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3JlcG9ydHMvcGF5bWVudC1jb3JyZWN0aW9uLXJlcG9ydC9wYXltZW50LWNvcnJlY3Rpb24tcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmludm9pY2UtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwcHggMjVweDtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgXG59XG5cbi5iIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zMCk7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxuLmItYiB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMwKTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG4uYi10IHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzApO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbi5iLXIge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMwKTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlXG59XG5cbi5mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbn1cblxuLmZsZXgtZC1jIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogLXdlYmtpdC1jb2x1bW47XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmZsZXgtZC1yIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uZmxleC1hIHtcbiAgICAtd2Via2l0LXBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFsaWduLWl0ZW0tY2VudGVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udy01MC1wIHtcbiAgICB3aWR0aDogNTAlO1xufVxuXG4udy0xMDAtcCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5wLTIwIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG4ucHktNCB7XG4gICAgcGFkZGluZzogNHB4IDBweDtcbn1cblxuLnB4LTIwIHtcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcbn1cblxuLnB0LTMwIHtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbn1cbi5wdC0yMHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLnRleHQtbGVmdCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnRleHQtcmlnaHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4udGV4dC1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRleHQtdXBwZXJjYXNlIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ucmVzdWx0LWgge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG1hcmdpbjogMnB4O1xufVxuXG4ucmVzdWx0LWggc3BhbiB7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uaDItYyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ucHItOCB7XG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xuICAgIDtcbn1cblxuLnBiLTIwIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICA7XG59XG5cbi5tYi0yMCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnAtMTAge1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5wci00cmVtIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cmVtO1xufVxuXG4ucmlnaHQtYWxpZ24ge1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuLmxlZnQtYWxpZ24ge1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4ubG9nby1pbWcge1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgbWF4LWhlaWdodDogMTAwcHhcbn1cblxuLnRleHQtbGcge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLnNjaG9vbC1zdGFtcCB7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIG1pbi13aWR0aDogMTMwcHg7XG4gICAgbWF4LXdpZHRoOiAxMzBweDtcbiAgICBoZWlnaHQ6IDEzMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2Nob29sLXN0YW1wOjphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzYlO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29udGVudDogXCJTY2hvb2wgc2VhbCBMb2dvXCI7XG59XG5cbi50b3Atc3BhY2Uge1xuICAgIHBhZGRpbmctdG9wOiAxLjRyZW07XG59XG5cbi5vcmRlci1saXN0IC5saXN0IHtcbiAgICAvKiBkaXNwbGF5OmZsZXg7IFxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7ICovXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBkZWNpbWFsO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLm9yZGVyLWxpc3QgLmxpc3QgLnRleHQge1xuICAgIHdoaXRlLXNwYWNlOiBwcmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlblxufVxuXG4ub3JkZXItbGlzdCAubGlzdCAudGl0bGUge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrXG59XG5cbi5zaW5nbGUtbGluZSB7XG4gICAgd2lkdGg6IDEwNTBweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZy10b3A6IDE1cHhcbn1cblxuLm9yZGVyLWxpc3QgLmxpc3QgLmluLXdvcmRzIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5tYWluLXRpdGxlIHtcbiAgICBiYWNrZ3JvdW5kOiAjNWY1ZjVmO1xuICAgIGRpc3BsYXk6IGxpc3QtaXRlbTtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLmF0dGVuZGFuY2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2Vcbn1cblxuLmF0dGVuZGFuY2UgdGhlYWQge1xuICAgIGJhY2tncm91bmQ6ICM1ZjVmNWY7XG4gICAgY29sb3I6ICNmZmY7XG59XG4uYXR0ZW5kYW5jZSB0ciB0aCxcbi5hdHRlbmRhbmNlIHRyIHRkIHtcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYXR0ZW5kYW5jZTIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2Vcbn1cblxuLmF0dGVuZGFuY2UyIHRoZWFkIHtcbiAgICBiYWNrZ3JvdW5kOiAjNWY1ZjVmO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuLmF0dGVuZGFuY2UyIHRyIHRoe1xuICAgIHBhZGRpbmc6IDE1cHggMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hdHRlbmRhbmNlMiB0ciB0ZCB7XG4gICAgcGFkZGluZzogNXB4IDBweDsgICAgICAgICBcbn1cbi5hdHRlbmRhbmNlMiB0ciB0ZDpmaXJzdC1jaGlsZCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4OyAgICAgIFxufVxuLmF0dGVuZGFuY2UyIHRyIHRkOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYXR0ZW5kYW5jZTIgdHI6bnRoLWNoaWxkKDNuKSB7IFxuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkO1xuICAgfVxuXG4gICAub3V0ZXItbGluZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzApO1xuICAgIG1hcmdpbjogNXB4IDMwcHg7XG59XG4ub3V0ZXItbGluZSAuaGVscGVyLXRhYmxlOmZpcnN0LWNoaWxke1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBib3JkZXItdG9wOiBub25lO1xufVxuXG4uaGVscGVyLXRhYmxlIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzApO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHBhZGRpbmc6IDlweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzApO1xufVxuXG4udG90YWwtdGFibGV7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMwKTsgXG4gICAgcGFkZGluZzogMTNweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4OyAgXG59XG4udG90YWwtdGFibGUgdGg6Zmlyc3QtY2hpbGR7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgbWF4LXdpZHRoOiA1NXB4O1xufVxuLnRvdGFsLXRhYmxlIHRoOmxhc3QtY2hpbGR7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cbiAubWFya3Mge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gICAgfVxuICAgIFxuICAgIC5tYXJrcyB0aGVhZCB0ciB0aCB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICAgICAgO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZGVkZWRlO1xuICAgIH1cbiAgICBcbiAgICAubWFya3MgdGJvZHkgdHIgdGQge1xuICAgICAgICBwYWRkaW5nOiA4cHggMTBweFxuICAgIH1cbiAgICBcbiAgICAubWFya3MuYm9yZGVyLXRyIHRoLFxuICAgIC5tYXJrcy5ib3JkZXItdHIgdGQge1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zMCk7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgICAgICAvKiB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICovXG4gICAgfVxuICAgIFxuICAgIC5tYXJrcy5ib3JkZXItdHIgdGQgLmNvbnRlbnQge1xuICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZVxuICAgIH1cbiAgICBcbiAgICAubS13LTIwMCB7XG4gICAgICAgIC8qIHdpZHRoOiAyMDBweDtcbiAgICAgICAgbWF4LXdpZHRoOiAyMDBweDsgKi9cbiAgICAgICAgbWluLXdpZHRoOiAyMDBweFxuICAgIH0gXG4gICAgXG4gICAgLm1hcmtzLmJvcmRlci10ciB0aDpsYXN0LWNoaWxkLFxuICAgIC5tYXJrcy5ib3JkZXItdHIgdGQ6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZVxuICAgIH1cbiAgICAuaGVhZGVyLXRpdGxlMiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RlZGVkZTtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkXG59XG4udGVybXN7XG4gICAgcGFkZGluZzogMjBweCA1NXB4IDVweDtcbn1cbiAgICAudGVtLXRhYmxle1xuICAgICAgICBwYWRkaW5nOiAwcHggMTMlO1xuICAgIH1cblxuICAgIC5mZWUtcmVjaXB0IHRyIHRoLCAuZmVlLXJlY2lwdCB0ciB0ZHtcbiAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICB9IiwiLmludm9pY2UtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMHB4IDI1cHg7XG4gIG1hcmdpbjogMHB4IGF1dG87IH1cblxuLmIge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IH1cblxuLmItYiB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IH1cblxuLmItdCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IH1cblxuLmItciB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgfVxuXG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDsgfVxuXG4uZmxleC1kLWMge1xuICBmbGV4LWRpcmVjdGlvbjogLXdlYmtpdC1jb2x1bW47XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cblxuLmZsZXgtZC1yIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdzsgfVxuXG4uZmxleC1hIHtcbiAgLXdlYmtpdC1wbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cblxuLmFsaWduLWl0ZW0tY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuXG4udy01MC1wIHtcbiAgd2lkdGg6IDUwJTsgfVxuXG4udy0xMDAtcCB7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi5wLTIwIHtcbiAgcGFkZGluZzogMjBweDsgfVxuXG4ucHktNCB7XG4gIHBhZGRpbmc6IDRweCAwcHg7IH1cblxuLnB4LTIwIHtcbiAgcGFkZGluZzogMHB4IDIwcHg7IH1cblxuLnB0LTMwIHtcbiAgcGFkZGluZy10b3A6IDMwcHg7IH1cblxuLnB0LTIwIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7IH1cblxuLnRleHQtbGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cblxuLnRleHQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDsgfVxuXG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLnRleHQtdXBwZXJjYXNlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuXG4ucmVzdWx0LWgge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogMnB4OyB9XG5cbi5yZXN1bHQtaCBzcGFuIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuXG4uaDItYyB7XG4gIGZvbnQtc2l6ZTogMjBweDsgfVxuXG4ucHItOCB7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDsgfVxuXG4ucGItMjAge1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDsgfVxuXG4ubWItMjAge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XG5cbi5wLTEwIHtcbiAgcGFkZGluZzogMTBweDsgfVxuXG4ucHItNHJlbSB7XG4gIHBhZGRpbmctcmlnaHQ6IDRyZW07IH1cblxuLnJpZ2h0LWFsaWduIHtcbiAgZmxvYXQ6IHJpZ2h0OyB9XG5cbi5sZWZ0LWFsaWduIHtcbiAgZmxvYXQ6IGxlZnQ7IH1cblxuLmxvZ28taW1nIHtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgbWF4LWhlaWdodDogMTAwcHg7IH1cblxuLnRleHQtbGcge1xuICBmb250LXNpemU6IDI1cHg7IH1cblxuLnNjaG9vbC1zdGFtcCB7XG4gIHdpZHRoOiAxMzBweDtcbiAgbWluLXdpZHRoOiAxMzBweDtcbiAgbWF4LXdpZHRoOiAxMzBweDtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuXG4uc2Nob29sLXN0YW1wOjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNiU7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBjb250ZW50OiBcIlNjaG9vbCBzZWFsIExvZ29cIjsgfVxuXG4udG9wLXNwYWNlIHtcbiAgcGFkZGluZy10b3A6IDEuNHJlbTsgfVxuXG4ub3JkZXItbGlzdCAubGlzdCB7XG4gIC8qIGRpc3BsYXk6ZmxleDsgXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDsgKi9cbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGlzdC1zdHlsZS10eXBlOiBkZWNpbWFsO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cblxuLm9yZGVyLWxpc3QgLmxpc3QgLnRleHQge1xuICB3aGl0ZS1zcGFjZTogcHJlO1xuICBvdmVyZmxvdzogaGlkZGVuOyB9XG5cbi5vcmRlci1saXN0IC5saXN0IC50aXRsZSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG5cbi5zaW5nbGUtbGluZSB7XG4gIHdpZHRoOiAxMDUwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmctdG9wOiAxNXB4OyB9XG5cbi5vcmRlci1saXN0IC5saXN0IC5pbi13b3JkcyB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDsgfVxuXG4ubWFpbi10aXRsZSB7XG4gIGJhY2tncm91bmQ6ICM1ZjVmNWY7XG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcbiAgY29sb3I6ICNmZmY7IH1cblxuLmF0dGVuZGFuY2Uge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IH1cblxuLmF0dGVuZGFuY2UgdGhlYWQge1xuICBiYWNrZ3JvdW5kOiAjNWY1ZjVmO1xuICBjb2xvcjogI2ZmZjsgfVxuXG4uYXR0ZW5kYW5jZSB0ciB0aCxcbi5hdHRlbmRhbmNlIHRyIHRkIHtcbiAgcGFkZGluZzogMTVweCAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4uYXR0ZW5kYW5jZTIge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IH1cblxuLmF0dGVuZGFuY2UyIHRoZWFkIHtcbiAgYmFja2dyb3VuZDogIzVmNWY1ZjtcbiAgY29sb3I6ICNmZmY7IH1cblxuLmF0dGVuZGFuY2UyIHRyIHRoIHtcbiAgcGFkZGluZzogMTVweCAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4uYXR0ZW5kYW5jZTIgdHIgdGQge1xuICBwYWRkaW5nOiA1cHggMHB4OyB9XG5cbi5hdHRlbmRhbmNlMiB0ciB0ZDpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctbGVmdDogMTBweDsgfVxuXG4uYXR0ZW5kYW5jZTIgdHIgdGQ6bm90KDpmaXJzdC1jaGlsZCkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLmF0dGVuZGFuY2UyIHRyOm50aC1jaGlsZCgzbikge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7IH1cblxuLm91dGVyLWxpbmUge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIG1hcmdpbjogNXB4IDMwcHg7IH1cblxuLm91dGVyLWxpbmUgLmhlbHBlci10YWJsZTpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgYm9yZGVyLXRvcDogbm9uZTsgfVxuXG4uaGVscGVyLXRhYmxlIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwYWRkaW5nOiA5cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpOyB9XG5cbi50b3RhbC10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBwYWRkaW5nOiAxM3B4O1xuICBtYXJnaW4tdG9wOiAyMHB4OyB9XG5cbi50b3RhbC10YWJsZSB0aDpmaXJzdC1jaGlsZCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgbWF4LXdpZHRoOiA1NXB4OyB9XG5cbi50b3RhbC10YWJsZSB0aDpsYXN0LWNoaWxkIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7IH1cblxuLm1hcmtzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1zcGFjaW5nOiAwOyB9XG5cbi5tYXJrcyB0aGVhZCB0ciB0aCB7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgYmFja2dyb3VuZDogI2RlZGVkZTsgfVxuXG4ubWFya3MgdGJvZHkgdHIgdGQge1xuICBwYWRkaW5nOiA4cHggMTBweDsgfVxuXG4ubWFya3MuYm9yZGVyLXRyIHRoLFxuLm1hcmtzLmJvcmRlci10ciB0ZCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIC8qIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgKi8gfVxuXG4ubWFya3MuYm9yZGVyLXRyIHRkIC5jb250ZW50IHtcbiAgd2lkdGg6IDEycHg7XG4gIG1hcmdpbjogYXV0bztcbiAgb3ZlcmZsb3c6IHZpc2libGU7IH1cblxuLm0tdy0yMDAge1xuICAvKiB3aWR0aDogMjAwcHg7XG4gICAgICAgIG1heC13aWR0aDogMjAwcHg7ICovXG4gIG1pbi13aWR0aDogMjAwcHg7IH1cblxuLm1hcmtzLmJvcmRlci10ciB0aDpsYXN0LWNoaWxkLFxuLm1hcmtzLmJvcmRlci10ciB0ZDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXJpZ2h0OiBub25lOyB9XG5cbi5oZWFkZXItdGl0bGUyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZGVkZTtcbiAgcGFkZGluZzogOHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XG5cbi50ZXJtcyB7XG4gIHBhZGRpbmc6IDIwcHggNTVweCA1cHg7IH1cblxuLnRlbS10YWJsZSB7XG4gIHBhZGRpbmc6IDBweCAxMyU7IH1cblxuLmZlZS1yZWNpcHQgdHIgdGgsIC5mZWUtcmVjaXB0IHRyIHRkIHtcbiAgbWF4LXdpZHRoOiAyMDBweDsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/reports/payment-correction-report/payment-correction-report.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/reports/payment-correction-report/payment-correction-report.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: PaymentCorrectionReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentCorrectionReportComponent", function() { return PaymentCorrectionReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_service_reports_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/service/reports/reports.service */ "./src/app/service/reports/reports.service.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/grading-service/api/grade-setup.service */ "./src/app/service/grading-service/api/grade-setup.service.ts");
/* harmony import */ var app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/class-schedules/class-time-table.service */ "./src/app/service/class-schedules/class-time-table.service.ts");
/* harmony import */ var app_service_academic_service_api_student_database_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/academic-service/api/student-database.service */ "./src/app/service/academic-service/api/student-database.service.ts");
/* harmony import */ var app_service_invoice_invoice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/invoice/invoice.service */ "./src/app/service/invoice/invoice.service.ts");
/* harmony import */ var app_service_academic_service_api_status_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/academic-service/api/status.service */ "./src/app/service/academic-service/api/status.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_shared_custom_date_adaptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/shared/custom-date-adaptor */ "./src/app/shared/custom-date-adaptor.ts");
/* harmony import */ var saturn_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! saturn-datepicker */ "./node_modules/saturn-datepicker/fesm5/saturn-datepicker.js");














var PaymentCorrectionReportComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PaymentCorrectionReportComponent, _super);
    function PaymentCorrectionReportComponent(schoolReportsService, commonService, gradeSetupService, classTimetableService, studentService, cd, invoiceService, statusService) {
        var _this = _super.call(this) || this;
        _this.schoolReportsService = schoolReportsService;
        _this.commonService = commonService;
        _this.gradeSetupService = gradeSetupService;
        _this.classTimetableService = classTimetableService;
        _this.studentService = studentService;
        _this.cd = cd;
        _this.invoiceService = invoiceService;
        _this.statusService = statusService;
        _this.columns = [];
        return _this;
    }
    PaymentCorrectionReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paymentTypes();
        this.paymentStatuses();
        this.columns = [
            { field: 'studentInformatioin', header: 'Student Information', sort: false, dataKey: 'studentInformatioin' },
            { field: 'paymentReceiptNo', header: 'Receipt No', sort: false, dataKey: 'paymentReceiptNo' },
            { field: 'paymentMode', header: 'Payment Mode', sort: false, dataKey: 'paymentMode' },
            { field: 'paymentEntryByAndDate', header: 'Payment Entry By - Date', sort: false, dataKey: 'paymentEntryByAndDate' },
            { field: 'paymentStatus', header: 'Payment Status', sort: false, dataKey: 'paymentStatus' },
            { field: 'paymentCorrections', header: 'Payment Corrections', sort: false, dataKey: 'paymentCorrections' },
            { field: 'correctionEntryDate', header: 'Correction Entry Date', sort: false, dataKey: 'correctionEntryDate' },
            { field: 'paymentCorrectionStatus', header: 'Correction Status', sort: false, dataKey: 'paymentCorrectionStatus' },
            { field: 'paymentCorrectionApprovedBy', header: 'Correction Approved By', sort: false, dataKey: 'paymentCorrectionApprovedBy' }
        ];
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroup"]({
            studentSearch: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](null),
            paymentStatusId: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](null),
            paymentMode: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](null),
            classId: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](null),
            sectionId: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](null),
            inputDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](null)
        });
        this.searchForm.controls['studentSearch'].valueChanges.debounceTime(200).subscribe(function (name) {
            name = typeof (name) === 'string' ? name.trim() : name;
            if (name !== null && name.length >= 3) {
                _this.filterdStudents = [];
                _this.studentService.studentNamesBaseOnAcademicSession(parseInt(_this.getTokenParam('_as'), 10), null, null, null, name).subscribe(function (res) {
                    _this.filterdStudents = (res.studentsList.length > 0) ? res.studentsList : [];
                    _this.cd.detectChanges();
                });
            }
            else {
                _this.filterdStudents = [];
                _this.cd.detectChanges();
            }
        });
    };
    PaymentCorrectionReportComponent.prototype.getPaymentCorrectionReport = function () {
        var _this = this;
        var beginDate = null;
        var endDate = null;
        var studentId = '';
        if (this.searchForm.value.inputDate != null) {
            beginDate = this.searchForm.value.inputDate.begin.format(app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].API_DATE_PATTERN);
            endDate = this.searchForm.value.inputDate.end.format(app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].API_DATE_PATTERN);
        }
        if (this.searchForm.value.studentSearch) {
            studentId = this.searchForm.value.studentSearch.schoolAcademicSessionStudentId;
        }
        // [studentId]
        this.schoolReportsService.studentPaymentCorrections(beginDate, endDate, [studentId], [this.searchForm.value.paymentStatusId], [this.searchForm.value.paymentMode]).subscribe(function (res) {
            if (res.paymentCorrections.length) {
                _this.reportResults = res;
                _this.reportResults.paymentCorrections.push({ studentInformatioin: 'Total', paymentCorrectionApprovedBy: _this.reportResults.paymentCorrections.length });
            }
            else {
                _this.reportResults = [];
            }
        });
    };
    PaymentCorrectionReportComponent.prototype.generateReport = function (rp) {
        if (rp === 'generatePdfReport') {
            this.schoolReportsService.generatePdf(document.getElementById('admitted-std'), app_app_constants__WEBPACK_IMPORTED_MODULE_4__["Messages"].COMMON_TABLE_CSS);
        }
        if (rp === 'generateExcelReport') {
            this.schoolReportsService.exportToExcel('pmt-cor-rpt', 'payment_correction_report');
        }
    };
    PaymentCorrectionReportComponent.prototype.displayFn = function (data) {
        return data ? data.studentName : undefined;
    };
    PaymentCorrectionReportComponent.prototype.getClasses = function (isManualChange) {
        var _this = this;
        if (isManualChange === void 0) { isManualChange = false; }
        this.availableClasses = [];
        this.gradeSetupService.schoolAcademicClasses().subscribe(function (response) {
            if (response.listViews && response.listViews.length) {
                response.listViews.forEach(function (element) {
                    _this.availableClasses.push({
                        label: element.name,
                        value: element.id
                    });
                });
                if (isManualChange) {
                    _this.onSelectClass({ value: _this.searchForm.value.classId }, isManualChange);
                }
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    // on selection of class
    PaymentCorrectionReportComponent.prototype.onSelectClass = function (data, isManualChange) {
        var _this = this;
        if (isManualChange === void 0) { isManualChange = false; }
        this.availableSections = [];
        if (!isManualChange) {
            this.searchForm.controls.sectionId.setValue(null);
        }
        this.classTimetableService.classTimetableSectionsGet(data.value).subscribe(function (response) {
            if (response.classTimetableSectionsView != null) {
                if (response.classTimetableSectionsView.length) {
                    response.classTimetableSectionsView.map(function (x) {
                        _this.availableSections.push({ value: x.sectionId, label: x.sectionName + ' (' + x.boardName + ')' });
                    });
                }
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    PaymentCorrectionReportComponent.prototype.paymentTypes = function () {
        var _this = this;
        this.paymentTypesList = [];
        this.invoiceService.paymentTypes().subscribe(function (data) {
            if (data.commonViewModel) {
                if (app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].PARENT === _this.getTokenParam('_ut')) {
                    _this.paymentTypesList = data.commonViewModel.filter(function (e) { return e.code !== app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].PAYMENT_TYPE_ONLINE; });
                }
                else {
                    _this.paymentTypesList = data.commonViewModel;
                }
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    PaymentCorrectionReportComponent.prototype.paymentStatuses = function () {
        var _this = this;
        this.paymentStatus = [];
        this.statusService.paymentStatuses(app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].PAYMENT_CORRECTION_STATUS_CATEGORY_CODE).subscribe(function (res) {
            if (res.listViews && res.listViews.length) {
                res.listViews.forEach(function (element) {
                    _this.paymentStatus.push({
                        label: element.name,
                        value: element.id
                    });
                });
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    PaymentCorrectionReportComponent.prototype.reset = function () {
        this.searchForm.reset();
        this.reportResults = null;
    };
    PaymentCorrectionReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment-correction-report',
            template: __webpack_require__(/*! ./payment-correction-report.component.html */ "./src/app/modules/reports/payment-correction-report/payment-correction-report.component.html"),
            providers: [app_service_academic_service_api_status_service__WEBPACK_IMPORTED_MODULE_10__["StatusService"], app_service_invoice_invoice_service__WEBPACK_IMPORTED_MODULE_9__["InvoiceService"],
                { provide: saturn_datepicker__WEBPACK_IMPORTED_MODULE_13__["DateAdapter"], useClass: app_shared_custom_date_adaptor__WEBPACK_IMPORTED_MODULE_12__["CustomDateAdapter"], deps: [saturn_datepicker__WEBPACK_IMPORTED_MODULE_13__["MAT_DATE_LOCALE"]] },
                { provide: saturn_datepicker__WEBPACK_IMPORTED_MODULE_13__["MAT_DATE_FORMATS"], useValue: app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_5__["AF_DATE_FORMATS"] }],
            styles: [__webpack_require__(/*! ./payment-correction-report.component.scss */ "./src/app/modules/reports/payment-correction-report/payment-correction-report.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_reports_reports_service__WEBPACK_IMPORTED_MODULE_2__["SchoolReportsService"], app_service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"], app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_6__["GradeSetupService"],
            app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_7__["ClassTimetableService"], app_service_academic_service_api_student_database_service__WEBPACK_IMPORTED_MODULE_8__["StudentDatabaseService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            app_service_invoice_invoice_service__WEBPACK_IMPORTED_MODULE_9__["InvoiceService"], app_service_academic_service_api_status_service__WEBPACK_IMPORTED_MODULE_10__["StatusService"]])
    ], PaymentCorrectionReportComponent);
    return PaymentCorrectionReportComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_5__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/reports/payment-due-report/payment-due-report.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/reports/payment-due-report/payment-due-report.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-custom-card *ngIf=\"((resultData) && !(resultData?.length))\" [inputMessage]=\"'No Record Found'\">\n</app-custom-card>\n\n<div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"px-32 py-12\" *ngIf=\"resultData?.length\">\n  <button mat-stroked-button class=\"mr-12\" (click)=\"generateReport('generatePdfReport')\">\n    <mat-icon class=\"mr-4\">save_alt</mat-icon>Download PDF\n  </button>\n  <!-- <button mat-stroked-button (click)=\"generateReport('generateExcelReport')\">\n    <mat-icon class=\"mr-4\">save_alt</mat-icon> Download EXCEL\n  </button> -->\n</div>\n<div class='invoice-container' id=\"admitted-std\" *ngIf=\"resultData?.length\" style=\"padding: 25px; padding-top: 0px;\">\n  <span class=\"dark-theme-color\" style=\"color:#fff\">A</span>\n  <div class='b flex-d-c invoice-body' style='overflow: hidden; '>\n    <h3 class=\"text-center text-uppercase\">Payments Due Report</h3>\n    <div class=\"p-10 mb-20 main-title\">\n      <div class=\"left-align\">Report Generated On : {{ date }}</div>\n      <div class=\"right-align flex\" *ngIf=\"acadmicSession\">\n        {{acadmicSession?.name}} ({{acadmicSession?.startDate | date: 'MMM d, y'}} -\n        {{acadmicSession?.endDate | date: 'MMM d, y'}})\n      </div>\n    </div>\n    <div class=\"px-20 pt-20\">Payments Due Details</div>\n    <div class=\"px-10 scroll-table\" *ngIf=\"resultData\">\n      <table class=\"attendance b table-border\" id=\"payment_due_report\">\n        <thead>\n          <tr>\n            <th class=\"space\" style=\"text-transform:capitalize;\" *ngFor=\"let column of columns\">{{column.header}}</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of resultData\">\n            <ng-container *ngFor=\"let column of columns\">\n              <td *ngIf=\"column?.field != 'invoiceDetails'\">{{item[column.field]}} </td>\n              <td *ngIf=\"column?.field == 'invoiceDetails'\">\n                <table class=\"attendance b\">\n                  <tr *ngFor=\"let details of item.invoiceDetails\">\n                    <td>\n                      {{details.feeType}}\n                    </td>\n                    <td>\n                      {{details.amount}}\n                    </td>\n                  </tr>\n                </table>\n              </td>\n            </ng-container>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/reports/payment-due-report/payment-due-report.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/reports/payment-due-report/payment-due-report.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invoice-container {\n  padding: 0px 25px;\n  margin: 0px auto; }\n\n.b {\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.b-b {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.b-t {\n  border-top: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.b-r {\n  border-right: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.flex {\n  display: -webkit-box;\n  display: flex;\n  display: -webkit-flex; }\n\n.flex-d-c {\n  flex-direction: -webkit-column;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n\n.flex-d-r {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row; }\n\n.flex-a {\n  -webkit-place-content: center center;\n  place-content: center center;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.align-item-center {\n  -webkit-box-align: center;\n          align-items: center; }\n\n.w-50-p {\n  width: 50%; }\n\n.w-100-p {\n  width: 100%; }\n\n.p-20 {\n  padding: 20px; }\n\n.py-4 {\n  padding: 4px 0px; }\n\n.px-20 {\n  padding: 0px 20px; }\n\n.pt-30 {\n  padding-top: 30px; }\n\n.pt-20 {\n  padding-top: 20px; }\n\n.text-left {\n  text-align: left; }\n\n.text-right {\n  text-align: right; }\n\n.text-center {\n  text-align: center; }\n\n.text-uppercase {\n  text-transform: uppercase; }\n\n.result-h {\n  font-size: 20px;\n  padding: 20px;\n  margin: 2px; }\n\n.result-h span {\n  width: 80px;\n  display: inline-block; }\n\n.h2-c {\n  font-size: 20px; }\n\n.pr-8 {\n  padding-right: 8px; }\n\n.pb-20 {\n  padding-bottom: 20px; }\n\n.mb-20 {\n  margin-bottom: 20px; }\n\n.p-10 {\n  padding: 10px; }\n\n.pr-4rem {\n  padding-right: 4rem; }\n\n.right-align {\n  float: right; }\n\n.left-align {\n  float: left; }\n\n.logo-img {\n  max-width: 200px;\n  max-height: 100px; }\n\n.text-lg {\n  font-size: 25px; }\n\n.school-stamp {\n  width: 130px;\n  min-width: 130px;\n  max-width: 130px;\n  height: 130px;\n  border: 1px solid;\n  border-radius: 100%;\n  position: relative; }\n\n.school-stamp::after {\n  position: absolute;\n  top: 36%;\n  left: 0;\n  width: 100%;\n  content: \"School seal Logo\"; }\n\n.top-space {\n  padding-top: 1.4rem; }\n\n.order-list .list {\n  /* display:flex; \n        display: -webkit-flex; */\n  padding-right: 20px;\n  padding-bottom: 25px;\n  font-size: 18px;\n  list-style-type: decimal;\n  display: inline-block; }\n\n.order-list .list .text {\n  white-space: pre;\n  overflow: hidden; }\n\n.order-list .list .title {\n  white-space: nowrap;\n  margin-right: 20px;\n  display: inline-block; }\n\n.single-line {\n  width: 1050px;\n  white-space: nowrap;\n  overflow: hidden;\n  padding-top: 15px; }\n\n.order-list .list .in-words {\n  padding-right: 5px; }\n\n.main-title {\n  background: #5f5f5f;\n  display: list-item;\n  color: #fff; }\n\n.attendance {\n  width: 100%;\n  border-spacing: 0;\n  border-collapse: collapse; }\n\n.attendance thead {\n  background: #5f5f5f;\n  color: #fff; }\n\n.attendance tr th,\n.attendance tr td {\n  padding: 15px 0px;\n  text-align: center; }\n\n.attendance2 {\n  width: 100%;\n  border-spacing: 0;\n  border-collapse: collapse; }\n\n.attendance2 thead {\n  background: #5f5f5f;\n  color: #fff; }\n\n.attendance2 tr th {\n  padding: 15px 0px;\n  text-align: center; }\n\n.attendance2 tr td {\n  padding: 5px 0px; }\n\n.attendance2 tr td:first-child {\n  padding-left: 10px; }\n\n.attendance2 tr td:not(:first-child) {\n  text-align: center; }\n\n.attendance2 tr:nth-child(3n) {\n  border-bottom: 1px solid; }\n\n.outer-line {\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  margin: 5px 30px; }\n\n.outer-line .helper-table:first-child {\n  margin-top: 0px;\n  border-top: none; }\n\n.helper-table {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n  margin-bottom: 0px;\n  margin-top: 20px;\n  padding: 9px;\n  width: 100%;\n  border-top: 1px solid rgba(0, 0, 0, 0.3); }\n\n.total-table {\n  width: 100%;\n  border-top: 1px solid rgba(0, 0, 0, 0.3);\n  padding: 13px;\n  margin-top: 20px; }\n\n.total-table th:first-child {\n  text-align: left;\n  padding-left: 20px;\n  max-width: 55px; }\n\n.total-table th:last-child {\n  text-align: right;\n  padding-right: 20px; }\n\n.marks {\n  width: 100%;\n  border-spacing: 0; }\n\n.marks thead tr th {\n  padding: 10px 10px;\n  background: #dedede; }\n\n.marks tbody tr td {\n  padding: 8px 10px; }\n\n.marks.border-tr th,\n.marks.border-tr td {\n  border-right: 1px solid rgba(0, 0, 0, 0.3);\n  text-align: center;\n  font-size: 18px;\n  word-break: break-word;\n  /* text-transform: uppercase */ }\n\n.marks.border-tr td .content {\n  width: 12px;\n  margin: auto;\n  overflow: visible; }\n\n.m-w-200 {\n  /* width: 200px;\n        max-width: 200px; */\n  min-width: 200px; }\n\n.marks.border-tr th:last-child,\n.marks.border-tr td:last-child {\n  border-right: none; }\n\n.header-title2 {\n  background-color: #dedede;\n  padding: 8px;\n  font-size: 18px;\n  font-weight: bold; }\n\n.terms {\n  padding: 20px 55px 5px; }\n\n.tem-table {\n  padding: 0px 13%; }\n\n.fee-recipt tr th, .fee-recipt tr td {\n  max-width: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvcmVwb3J0cy9jb21tb24tcmVwb3J0cy5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3JlcG9ydHMvcGF5bWVudC1kdWUtcmVwb3J0L3BheW1lbnQtZHVlLXJlcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDSSxvQ0FBb0M7RUFDcEMseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksMkNBQTJDO0VBQzNDLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLHdDQUF3QztFQUN4Qyx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSwwQ0FBMEM7RUFDMUMseUJBQ0osRUFBQTs7QUFFQTtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLDhCQUE4QjtFQUM5Qiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksb0NBQW9DO0VBQ3BDLDRCQUE0QjtFQUU1Qix5QkFBbUI7VUFBbkIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0kseUJBQW1CO1VBQW5CLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLFVBQVUsRUFBQTs7QUFHZDtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSx5QkFBeUIs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QUFBOztBQUdwQjtFQUNJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9yZXBvcnRzL3BheW1lbnQtZHVlLXJlcG9ydC9wYXltZW50LWR1ZS1yZXBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW52b2ljZS1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDBweCAyNXB4O1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICBcbn1cblxuLmIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMwKTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG4uYi1iIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzApO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbi5iLXQge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zMCk7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxuLmItciB7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzApO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2Vcbn1cblxuLmZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xufVxuXG4uZmxleC1kLWMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiAtd2Via2l0LWNvbHVtbjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZmxleC1kLXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5mbGV4LWEge1xuICAgIC13ZWJraXQtcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWxpZ24taXRlbS1jZW50ZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi53LTUwLXAge1xuICAgIHdpZHRoOiA1MCU7XG59XG5cbi53LTEwMC1wIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnAtMjAge1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5weS00IHtcbiAgICBwYWRkaW5nOiA0cHggMHB4O1xufVxuXG4ucHgtMjAge1xuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xufVxuXG4ucHQtMzAge1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuLnB0LTIwe1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4udGV4dC1sZWZ0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4udGV4dC1yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi50ZXh0LWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGV4dC11cHBlcmNhc2Uge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5yZXN1bHQtaCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbWFyZ2luOiAycHg7XG59XG5cbi5yZXN1bHQtaCBzcGFuIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5oMi1jIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5wci04IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgO1xufVxuXG4ucGItMjAge1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIDtcbn1cblxuLm1iLTIwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ucC0xMCB7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLnByLTRyZW0ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDRyZW07XG59XG5cbi5yaWdodC1hbGlnbiB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ubGVmdC1hbGlnbiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5sb2dvLWltZyB7XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICBtYXgtaGVpZ2h0OiAxMDBweFxufVxuXG4udGV4dC1sZyB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uc2Nob29sLXN0YW1wIHtcbiAgICB3aWR0aDogMTMwcHg7XG4gICAgbWluLXdpZHRoOiAxMzBweDtcbiAgICBtYXgtd2lkdGg6IDEzMHB4O1xuICAgIGhlaWdodDogMTMwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zY2hvb2wtc3RhbXA6OmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzNiU7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb250ZW50OiBcIlNjaG9vbCBzZWFsIExvZ29cIjtcbn1cblxuLnRvcC1zcGFjZSB7XG4gICAgcGFkZGluZy10b3A6IDEuNHJlbTtcbn1cblxuLm9yZGVyLWxpc3QgLmxpc3Qge1xuICAgIC8qIGRpc3BsYXk6ZmxleDsgXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDsgKi9cbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGRlY2ltYWw7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ub3JkZXItbGlzdCAubGlzdCAudGV4dCB7XG4gICAgd2hpdGUtc3BhY2U6IHByZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuXG59XG5cbi5vcmRlci1saXN0IC5saXN0IC50aXRsZSB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcbn1cblxuLnNpbmdsZS1saW5lIHtcbiAgICB3aWR0aDogMTA1MHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nLXRvcDogMTVweFxufVxuXG4ub3JkZXItbGlzdCAubGlzdCAuaW4td29yZHMge1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLm1haW4tdGl0bGUge1xuICAgIGJhY2tncm91bmQ6ICM1ZjVmNWY7XG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uYXR0ZW5kYW5jZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZVxufVxuXG4uYXR0ZW5kYW5jZSB0aGVhZCB7XG4gICAgYmFja2dyb3VuZDogIzVmNWY1ZjtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi5hdHRlbmRhbmNlIHRyIHRoLFxuLmF0dGVuZGFuY2UgdHIgdGQge1xuICAgIHBhZGRpbmc6IDE1cHggMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hdHRlbmRhbmNlMiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZVxufVxuXG4uYXR0ZW5kYW5jZTIgdGhlYWQge1xuICAgIGJhY2tncm91bmQ6ICM1ZjVmNWY7XG4gICAgY29sb3I6ICNmZmY7XG59XG4uYXR0ZW5kYW5jZTIgdHIgdGh7XG4gICAgcGFkZGluZzogMTVweCAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmF0dGVuZGFuY2UyIHRyIHRkIHtcbiAgICBwYWRkaW5nOiA1cHggMHB4OyAgICAgICAgIFxufVxuLmF0dGVuZGFuY2UyIHRyIHRkOmZpcnN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7ICAgICAgXG59XG4uYXR0ZW5kYW5jZTIgdHIgdGQ6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hdHRlbmRhbmNlMiB0cjpudGgtY2hpbGQoM24pIHsgXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQ7XG4gICB9XG5cbiAgIC5vdXRlci1saW5lIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zMCk7XG4gICAgbWFyZ2luOiA1cHggMzBweDtcbn1cbi5vdXRlci1saW5lIC5oZWxwZXItdGFibGU6Zmlyc3QtY2hpbGR7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG59XG5cbi5oZWxwZXItdGFibGUge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zMCk7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZzogOXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zMCk7XG59XG5cbi50b3RhbC10YWJsZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzApOyBcbiAgICBwYWRkaW5nOiAxM3B4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7ICBcbn1cbi50b3RhbC10YWJsZSB0aDpmaXJzdC1jaGlsZHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBtYXgtd2lkdGg6IDU1cHg7XG59XG4udG90YWwtdGFibGUgdGg6bGFzdC1jaGlsZHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuIC5tYXJrcyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICB9XG4gICAgXG4gICAgLm1hcmtzIHRoZWFkIHRyIHRoIHtcbiAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgICAgICA7XG4gICAgICAgIGJhY2tncm91bmQ6ICNkZWRlZGU7XG4gICAgfVxuICAgIFxuICAgIC5tYXJrcyB0Ym9keSB0ciB0ZCB7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxMHB4XG4gICAgfVxuICAgIFxuICAgIC5tYXJrcy5ib3JkZXItdHIgdGgsXG4gICAgLm1hcmtzLmJvcmRlci10ciB0ZCB7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMwKTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgICAgIC8qIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgKi9cbiAgICB9XG4gICAgXG4gICAgLm1hcmtzLmJvcmRlci10ciB0ZCAuY29udGVudCB7XG4gICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlXG4gICAgfVxuICAgIFxuICAgIC5tLXctMjAwIHtcbiAgICAgICAgLyogd2lkdGg6IDIwMHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDIwMHB4OyAqL1xuICAgICAgICBtaW4td2lkdGg6IDIwMHB4XG4gICAgfSBcbiAgICBcbiAgICAubWFya3MuYm9yZGVyLXRyIHRoOmxhc3QtY2hpbGQsXG4gICAgLm1hcmtzLmJvcmRlci10ciB0ZDpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lXG4gICAgfVxuICAgIC5oZWFkZXItdGl0bGUyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVkZWRlO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRcbn1cbi50ZXJtc3tcbiAgICBwYWRkaW5nOiAyMHB4IDU1cHggNXB4O1xufVxuICAgIC50ZW0tdGFibGV7XG4gICAgICAgIHBhZGRpbmc6IDBweCAxMyU7XG4gICAgfVxuXG4gICAgLmZlZS1yZWNpcHQgdHIgdGgsIC5mZWUtcmVjaXB0IHRyIHRke1xuICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIH0iLCIuaW52b2ljZS1jb250YWluZXIge1xuICBwYWRkaW5nOiAwcHggMjVweDtcbiAgbWFyZ2luOiAwcHggYXV0bzsgfVxuXG4uYiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgfVxuXG4uYi1iIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgfVxuXG4uYi10IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgfVxuXG4uYi1yIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyB9XG5cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4OyB9XG5cbi5mbGV4LWQtYyB7XG4gIGZsZXgtZGlyZWN0aW9uOiAtd2Via2l0LWNvbHVtbjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuXG4uZmxleC1kLXIge1xuICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XG5cbi5mbGV4LWEge1xuICAtd2Via2l0LXBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuXG4uYWxpZ24taXRlbS1jZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG5cbi53LTUwLXAge1xuICB3aWR0aDogNTAlOyB9XG5cbi53LTEwMC1wIHtcbiAgd2lkdGg6IDEwMCU7IH1cblxuLnAtMjAge1xuICBwYWRkaW5nOiAyMHB4OyB9XG5cbi5weS00IHtcbiAgcGFkZGluZzogNHB4IDBweDsgfVxuXG4ucHgtMjAge1xuICBwYWRkaW5nOiAwcHggMjBweDsgfVxuXG4ucHQtMzAge1xuICBwYWRkaW5nLXRvcDogMzBweDsgfVxuXG4ucHQtMjAge1xuICBwYWRkaW5nLXRvcDogMjBweDsgfVxuXG4udGV4dC1sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxuXG4udGV4dC1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0OyB9XG5cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4udGV4dC11cHBlcmNhc2Uge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XG5cbi5yZXN1bHQtaCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiAycHg7IH1cblxuLnJlc3VsdC1oIHNwYW4ge1xuICB3aWR0aDogODBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG5cbi5oMi1jIHtcbiAgZm9udC1zaXplOiAyMHB4OyB9XG5cbi5wci04IHtcbiAgcGFkZGluZy1yaWdodDogOHB4OyB9XG5cbi5wYi0yMCB7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4OyB9XG5cbi5tYi0yMCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cblxuLnAtMTAge1xuICBwYWRkaW5nOiAxMHB4OyB9XG5cbi5wci00cmVtIHtcbiAgcGFkZGluZy1yaWdodDogNHJlbTsgfVxuXG4ucmlnaHQtYWxpZ24ge1xuICBmbG9hdDogcmlnaHQ7IH1cblxuLmxlZnQtYWxpZ24ge1xuICBmbG9hdDogbGVmdDsgfVxuXG4ubG9nby1pbWcge1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBtYXgtaGVpZ2h0OiAxMDBweDsgfVxuXG4udGV4dC1sZyB7XG4gIGZvbnQtc2l6ZTogMjVweDsgfVxuXG4uc2Nob29sLXN0YW1wIHtcbiAgd2lkdGg6IDEzMHB4O1xuICBtaW4td2lkdGg6IDEzMHB4O1xuICBtYXgtd2lkdGg6IDEzMHB4O1xuICBoZWlnaHQ6IDEzMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbi5zY2hvb2wtc3RhbXA6OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM2JTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbnRlbnQ6IFwiU2Nob29sIHNlYWwgTG9nb1wiOyB9XG5cbi50b3Atc3BhY2Uge1xuICBwYWRkaW5nLXRvcDogMS40cmVtOyB9XG5cbi5vcmRlci1saXN0IC5saXN0IHtcbiAgLyogZGlzcGxheTpmbGV4OyBcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4OyAqL1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaXN0LXN0eWxlLXR5cGU6IGRlY2ltYWw7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuXG4ub3JkZXItbGlzdCAubGlzdCAudGV4dCB7XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG4gIG92ZXJmbG93OiBoaWRkZW47IH1cblxuLm9yZGVyLWxpc3QgLmxpc3QgLnRpdGxlIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cblxuLnNpbmdsZS1saW5lIHtcbiAgd2lkdGg6IDEwNTBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZy10b3A6IDE1cHg7IH1cblxuLm9yZGVyLWxpc3QgLmxpc3QgLmluLXdvcmRzIHtcbiAgcGFkZGluZy1yaWdodDogNXB4OyB9XG5cbi5tYWluLXRpdGxlIHtcbiAgYmFja2dyb3VuZDogIzVmNWY1ZjtcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xuICBjb2xvcjogI2ZmZjsgfVxuXG4uYXR0ZW5kYW5jZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgfVxuXG4uYXR0ZW5kYW5jZSB0aGVhZCB7XG4gIGJhY2tncm91bmQ6ICM1ZjVmNWY7XG4gIGNvbG9yOiAjZmZmOyB9XG5cbi5hdHRlbmRhbmNlIHRyIHRoLFxuLmF0dGVuZGFuY2UgdHIgdGQge1xuICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi5hdHRlbmRhbmNlMiB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgfVxuXG4uYXR0ZW5kYW5jZTIgdGhlYWQge1xuICBiYWNrZ3JvdW5kOiAjNWY1ZjVmO1xuICBjb2xvcjogI2ZmZjsgfVxuXG4uYXR0ZW5kYW5jZTIgdHIgdGgge1xuICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi5hdHRlbmRhbmNlMiB0ciB0ZCB7XG4gIHBhZGRpbmc6IDVweCAwcHg7IH1cblxuLmF0dGVuZGFuY2UyIHRyIHRkOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4OyB9XG5cbi5hdHRlbmRhbmNlMiB0ciB0ZDpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4uYXR0ZW5kYW5jZTIgdHI6bnRoLWNoaWxkKDNuKSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDsgfVxuXG4ub3V0ZXItbGluZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgbWFyZ2luOiA1cHggMzBweDsgfVxuXG4ub3V0ZXItbGluZSAuaGVscGVyLXRhYmxlOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBib3JkZXItdG9wOiBub25lOyB9XG5cbi5oZWxwZXItdGFibGUge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmc6IDlweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7IH1cblxuLnRvdGFsLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHBhZGRpbmc6IDEzcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7IH1cblxuLnRvdGFsLXRhYmxlIHRoOmZpcnN0LWNoaWxkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBtYXgtd2lkdGg6IDU1cHg7IH1cblxuLnRvdGFsLXRhYmxlIHRoOmxhc3QtY2hpbGQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMjBweDsgfVxuXG4ubWFya3Mge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7IH1cblxuLm1hcmtzIHRoZWFkIHRyIHRoIHtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZGVkZWRlOyB9XG5cbi5tYXJrcyB0Ym9keSB0ciB0ZCB7XG4gIHBhZGRpbmc6IDhweCAxMHB4OyB9XG5cbi5tYXJrcy5ib3JkZXItdHIgdGgsXG4ubWFya3MuYm9yZGVyLXRyIHRkIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgLyogdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAqLyB9XG5cbi5tYXJrcy5ib3JkZXItdHIgdGQgLmNvbnRlbnQge1xuICB3aWR0aDogMTJweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBvdmVyZmxvdzogdmlzaWJsZTsgfVxuXG4ubS13LTIwMCB7XG4gIC8qIHdpZHRoOiAyMDBweDtcbiAgICAgICAgbWF4LXdpZHRoOiAyMDBweDsgKi9cbiAgbWluLXdpZHRoOiAyMDBweDsgfVxuXG4ubWFya3MuYm9yZGVyLXRyIHRoOmxhc3QtY2hpbGQsXG4ubWFya3MuYm9yZGVyLXRyIHRkOmxhc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IG5vbmU7IH1cblxuLmhlYWRlci10aXRsZTIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVkZWRlO1xuICBwYWRkaW5nOiA4cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cblxuLnRlcm1zIHtcbiAgcGFkZGluZzogMjBweCA1NXB4IDVweDsgfVxuXG4udGVtLXRhYmxlIHtcbiAgcGFkZGluZzogMHB4IDEzJTsgfVxuXG4uZmVlLXJlY2lwdCB0ciB0aCwgLmZlZS1yZWNpcHQgdHIgdGQge1xuICBtYXgtd2lkdGg6IDIwMHB4OyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/reports/payment-due-report/payment-due-report.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/reports/payment-due-report/payment-due-report.component.ts ***!
  \************************************************************************************/
/*! exports provided: PaymentDueReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentDueReportComponent", function() { return PaymentDueReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_service_reports_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/service/reports/reports.service */ "./src/app/service/reports/reports.service.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");






var PaymentDueReportComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PaymentDueReportComponent, _super);
    function PaymentDueReportComponent(schoolReportsService, commonService) {
        var _this = _super.call(this) || this;
        _this.schoolReportsService = schoolReportsService;
        _this.commonService = commonService;
        _this.columns = [];
        return _this;
    }
    PaymentDueReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setColumns();
        this.schoolReportsService.getSchoolDetails().then(function (schoolDetails) {
            _this.schoolDetails = schoolDetails;
            _this.getPaymentDueReports();
        });
    };
    PaymentDueReportComponent.prototype.setColumns = function () {
        this.columns = [
            { field: 'studentDetails', header: 'Student Details', sort: false, dataKey: 'name' },
            { field: 'invoiceNumber', header: 'Invoice Number', sort: false, dataKey: 'invoiceNumber' },
            { field: 'isuueDate', header: 'Isuue Date', sort: false, dataKey: 'isuueDate' },
            { field: 'dueDate', header: 'Due Date', sort: false, dataKey: 'dueDate' },
            { field: 'delayDays', header: 'Delay(Days)', sort: false, dataKey: 'delayDays' },
            { field: 'feeTermName', header: 'Fee Term', sort: false, dataKey: 'feeTermName' },
            { field: 'invoiceAmount', header: 'Invoice Amount', sort: false, dataKey: 'invoiceAmount' },
            { field: 'adjustedAmount', header: 'Adjustment Amount', sort: false, dataKey: 'adjustedAmount' },
            { field: 'realizedAmount', header: 'Realized Amount', sort: false, dataKey: 'realizedAmount' },
            { field: 'balanceAmount', header: 'Balance Amount', sort: false, dataKey: 'balanceAmount' },
            { field: 'invoiceDetails', header: 'Invoice Details', sort: false, dataKey: 'invoiceDetails' }
        ];
    };
    PaymentDueReportComponent.prototype.getPaymentDueReports = function () {
        var _this = this;
        this.schoolReportsService.paymentsDue().subscribe(function (res) {
            _this.resultApplicationReports = res;
            _this.resultData = [];
            _this.resultApplicationReports.studentPaymentsDues.forEach(function (element) {
                if (element.invoices.length > 0) {
                    element.invoices.forEach(function (invoice) {
                        invoice['studentDetails'] = [element.studentDetails.name,
                            element.studentDetails.admissionNumber, element.studentDetails.className + '-' + element.studentDetails.sectionName].filter(function (a) { return a; }).join();
                        invoice.dueDate = (invoice.dueDate == null) ? null : _this.commonService.customDateFormat(invoice.dueDate, _this.getSchoolDateFormat()).date;
                        invoice.isuueDate = (invoice.isuueDate == null) ? null : _this.commonService.customDateFormat(invoice.isuueDate, _this.getSchoolDateFormat()).date;
                        if (invoice.invoiceDetails.length) {
                            invoice.invoiceDetails.forEach(function (invDetails) {
                                Object.assign(invoice, invDetails);
                            });
                        }
                        Array.prototype.push.apply(_this.resultData, element.invoices);
                    });
                }
                else {
                    _this.resultData = [];
                }
            });
        });
    };
    PaymentDueReportComponent.prototype.generateReport = function (rp) {
        if (rp === 'generatePdfReport') {
            this.schoolReportsService.generatePdf(document.getElementById('admitted-std'), app_app_constants__WEBPACK_IMPORTED_MODULE_4__["Messages"].COMMON_TABLE_CSS, 'landscape');
        }
        if (rp === 'generateExcelReport') {
            this.schoolReportsService.exportToExcel('payment_due_report', 'payment_due_report');
        }
    };
    PaymentDueReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment-due-report',
            template: __webpack_require__(/*! ./payment-due-report.component.html */ "./src/app/modules/reports/payment-due-report/payment-due-report.component.html"),
            styles: [__webpack_require__(/*! ./payment-due-report.component.scss */ "./src/app/modules/reports/payment-due-report/payment-due-report.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_reports_reports_service__WEBPACK_IMPORTED_MODULE_2__["SchoolReportsService"], app_service_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])
    ], PaymentDueReportComponent);
    return PaymentDueReportComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/reports/pre-addm-std-application-report/pre-addm-std-application-report.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/reports/pre-addm-std-application-report/pre-addm-std-application-report.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<af-filters [inputFilters]=\"filters\" (search)=\"getPreStudentApplicationReports()\"\n    (selectFilterOption)=\"onSelectFilter($event)\" [isDownloadExcelDisabled]=\"!resultApplicationReports\"\n    [isDownloadPdfDisabled]=\"!resultApplicationReports\" [isResetDisabled]=\"!resultApplicationReports\"\n    (resetFilter)=\"reset()\"></af-filters>\n\n<app-custom-card\n    *ngIf=\"!(filters?.length) && !(resultApplicationReports?.studentApplicationDetailsView?.pendingApplications?.length || resultApplicationReports?.studentApplicationDetailsView?.approvedApplications?.length || resultApplicationReports?.studentApplicationDetailsView?.rejectedApplications?.length)\"\n    [inputMessage]=\"'No Record Found'\">\n</app-custom-card>\n\n<div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"px-32 py-12\"\n    *ngIf=\"(resultApplicationReports?.studentApplicationDetailsView?.pendingApplications?.length || resultApplicationReports?.studentApplicationDetailsView?.approvedApplications?.length || resultApplicationReports?.studentApplicationDetailsView?.rejectedApplications?.length)\">\n    <button mat-stroked-button class=\"mr-12\" (click)=\"generateReport('generatePdfReport')\">\n        <mat-icon class=\"mr-4\">save_alt</mat-icon>Download PDF\n    </button>\n    <button mat-stroked-button (click)=\"generateReport('generateExcelReport')\">\n        <mat-icon class=\"mr-4\">save_alt</mat-icon> Download EXCEL\n    </button>\n</div>\n<div class='invoice-container' id=\"admitted-std\"\n    *ngIf=\"(resultApplicationReports?.studentApplicationDetailsView?.pendingApplications?.length || resultApplicationReports?.studentApplicationDetailsView?.approvedApplications?.length || resultApplicationReports?.studentApplicationDetailsView?.rejectedApplications?.length)\" style=\"padding: 25px; padding-top: 0px;\">\n    <span class=\"dark-theme-color\" style=\"color:#fff\">A</span>\n    <div class='b flex-d-c invoice-body' style='overflow: hidden; '>\n        <h3 class=\"text-center text-uppercase\">Pre Admission Student Applications Report</h3>\n        <div class=\"p-10 mb-20 main-title\">\n            <div class=\"left-align\">Report Generated On : {{ date }}</div>\n            <div class=\"right-align flex\" *ngIf=\"acadmicSession\">\n                {{acadmicSession?.name}} ({{acadmicSession?.startDate | date: 'MMM d, y'}} -\n                {{acadmicSession?.endDate | date: 'MMM d, y'}})\n            </div>\n        </div>\n        <div style=\"font-size: 18px;\" class=\"px-20 pt-20\"\n            *ngIf=\"resultApplicationReports?.studentApplicationDetailsView?.pendingApplications?.length > 0\">Pending\n            Applications</div>\n        <div *ngIf=\"resultApplicationReports?.studentApplicationDetailsView?.pendingApplications?.length > 0\">\n            <app-af-report-table\n                [inputData]=\"resultApplicationReports?.studentApplicationDetailsView?.pendingApplications\"\n                [tableId]=\"'pnd-std-app'\" [columns]=\"columns\"></app-af-report-table>\n        </div>\n        <div style=\"font-size: 18px;\" class=\"px-20 pt-20\"\n            *ngIf=\"resultApplicationReports?.studentApplicationDetailsView?.approvedApplications?.length > 0\">Approved\n            Applications</div>\n        <div *ngIf=\"resultApplicationReports?.studentApplicationDetailsView?.approvedApplications?.length > 0\">\n            <app-af-report-table\n                [inputData]=\"resultApplicationReports?.studentApplicationDetailsView?.approvedApplications\"\n                [tableId]=\"'approved-std-app'\" [columns]=\"columns\"></app-af-report-table>\n        </div>\n        <div style=\"font-size: 18px;\" class=\"px-20 pt-20\"\n            *ngIf=\"resultApplicationReports?.studentApplicationDetailsView?.rejectedApplications?.length > 0\">Rejected\n            Applications</div>\n        <div *ngIf=\"resultApplicationReports?.studentApplicationDetailsView?.rejectedApplications?.length > 0\">\n            <app-af-report-table\n                [inputData]=\"resultApplicationReports?.studentApplicationDetailsView?.rejectedApplications\"\n                [tableId]=\"'rejected-std-app'\" [columns]=\"columns\"></app-af-report-table>\n        </div>\n        <div class=\"p-10\"\n            *ngIf=\"(resultApplicationReports?.studentApplicationDetailsView?.pendingApplications?.length || resultApplicationReports?.studentApplicationDetailsView?.approvedApplications?.length || resultApplicationReports?.studentApplicationDetailsView?.rejectedApplications?.length)\">\n            <table class=\"attendance b\" *ngIf=\"applicants\">\n                <tr>\n                    <td>\n                        {{applicants}}\n                    </td>\n                </tr>\n            </table>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/reports/pre-addm-std-application-report/pre-addm-std-application-report.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/reports/pre-addm-std-application-report/pre-addm-std-application-report.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invoice-container {\n  padding: 0px 25px;\n  margin: 0px auto; }\n\n.b {\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.b-b {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.b-t {\n  border-top: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.b-r {\n  border-right: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.flex {\n  display: -webkit-box;\n  display: flex;\n  display: -webkit-flex; }\n\n.flex-d-c {\n  flex-direction: -webkit-column;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n\n.flex-d-r {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row; }\n\n.flex-a {\n  -webkit-place-content: center center;\n  place-content: center center;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.align-item-center {\n  -webkit-box-align: center;\n          align-items: center; }\n\n.w-50-p {\n  width: 50%; }\n\n.w-100-p {\n  width: 100%; }\n\n.p-20 {\n  padding: 20px; }\n\n.py-4 {\n  padding: 4px 0px; }\n\n.px-20 {\n  padding: 0px 20px; }\n\n.pt-30 {\n  padding-top: 30px; }\n\n.pt-20 {\n  padding-top: 20px; }\n\n.text-left {\n  text-align: left; }\n\n.text-right {\n  text-align: right; }\n\n.text-center {\n  text-align: center; }\n\n.text-uppercase {\n  text-transform: uppercase; }\n\n.result-h {\n  font-size: 20px;\n  padding: 20px;\n  margin: 2px; }\n\n.result-h span {\n  width: 80px;\n  display: inline-block; }\n\n.h2-c {\n  font-size: 20px; }\n\n.pr-8 {\n  padding-right: 8px; }\n\n.pb-20 {\n  padding-bottom: 20px; }\n\n.mb-20 {\n  margin-bottom: 20px; }\n\n.p-10 {\n  padding: 10px; }\n\n.pr-4rem {\n  padding-right: 4rem; }\n\n.right-align {\n  float: right; }\n\n.left-align {\n  float: left; }\n\n.logo-img {\n  max-width: 200px;\n  max-height: 100px; }\n\n.text-lg {\n  font-size: 25px; }\n\n.school-stamp {\n  width: 130px;\n  min-width: 130px;\n  max-width: 130px;\n  height: 130px;\n  border: 1px solid;\n  border-radius: 100%;\n  position: relative; }\n\n.school-stamp::after {\n  position: absolute;\n  top: 36%;\n  left: 0;\n  width: 100%;\n  content: \"School seal Logo\"; }\n\n.top-space {\n  padding-top: 1.4rem; }\n\n.order-list .list {\n  /* display:flex; \n        display: -webkit-flex; */\n  padding-right: 20px;\n  padding-bottom: 25px;\n  font-size: 18px;\n  list-style-type: decimal;\n  display: inline-block; }\n\n.order-list .list .text {\n  white-space: pre;\n  overflow: hidden; }\n\n.order-list .list .title {\n  white-space: nowrap;\n  margin-right: 20px;\n  display: inline-block; }\n\n.single-line {\n  width: 1050px;\n  white-space: nowrap;\n  overflow: hidden;\n  padding-top: 15px; }\n\n.order-list .list .in-words {\n  padding-right: 5px; }\n\n.main-title {\n  background: #5f5f5f;\n  display: list-item;\n  color: #fff; }\n\n.attendance {\n  width: 100%;\n  border-spacing: 0;\n  border-collapse: collapse; }\n\n.attendance thead {\n  background: #5f5f5f;\n  color: #fff; }\n\n.attendance tr th,\n.attendance tr td {\n  padding: 15px 0px;\n  text-align: center; }\n\n.attendance2 {\n  width: 100%;\n  border-spacing: 0;\n  border-collapse: collapse; }\n\n.attendance2 thead {\n  background: #5f5f5f;\n  color: #fff; }\n\n.attendance2 tr th {\n  padding: 15px 0px;\n  text-align: center; }\n\n.attendance2 tr td {\n  padding: 5px 0px; }\n\n.attendance2 tr td:first-child {\n  padding-left: 10px; }\n\n.attendance2 tr td:not(:first-child) {\n  text-align: center; }\n\n.attendance2 tr:nth-child(3n) {\n  border-bottom: 1px solid; }\n\n.outer-line {\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  margin: 5px 30px; }\n\n.outer-line .helper-table:first-child {\n  margin-top: 0px;\n  border-top: none; }\n\n.helper-table {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n  margin-bottom: 0px;\n  margin-top: 20px;\n  padding: 9px;\n  width: 100%;\n  border-top: 1px solid rgba(0, 0, 0, 0.3); }\n\n.total-table {\n  width: 100%;\n  border-top: 1px solid rgba(0, 0, 0, 0.3);\n  padding: 13px;\n  margin-top: 20px; }\n\n.total-table th:first-child {\n  text-align: left;\n  padding-left: 20px;\n  max-width: 55px; }\n\n.total-table th:last-child {\n  text-align: right;\n  padding-right: 20px; }\n\n.marks {\n  width: 100%;\n  border-spacing: 0; }\n\n.marks thead tr th {\n  padding: 10px 10px;\n  background: #dedede; }\n\n.marks tbody tr td {\n  padding: 8px 10px; }\n\n.marks.border-tr th,\n.marks.border-tr td {\n  border-right: 1px solid rgba(0, 0, 0, 0.3);\n  text-align: center;\n  font-size: 18px;\n  word-break: break-word;\n  /* text-transform: uppercase */ }\n\n.marks.border-tr td .content {\n  width: 12px;\n  margin: auto;\n  overflow: visible; }\n\n.m-w-200 {\n  /* width: 200px;\n        max-width: 200px; */\n  min-width: 200px; }\n\n.marks.border-tr th:last-child,\n.marks.border-tr td:last-child {\n  border-right: none; }\n\n.header-title2 {\n  background-color: #dedede;\n  padding: 8px;\n  font-size: 18px;\n  font-weight: bold; }\n\n.terms {\n  padding: 20px 55px 5px; }\n\n.tem-table {\n  padding: 0px 13%; }\n\n.fee-recipt tr th, .fee-recipt tr td {\n  max-width: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvcmVwb3J0cy9jb21tb24tcmVwb3J0cy5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3JlcG9ydHMvcHJlLWFkZG0tc3RkLWFwcGxpY2F0aW9uLXJlcG9ydC9wcmUtYWRkbS1zdGQtYXBwbGljYXRpb24tcmVwb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUlwQjtFQUNJLG9DQUFvQztFQUNwQyx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSwyQ0FBMkM7RUFDM0MseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksd0NBQXdDO0VBQ3hDLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLDBDQUEwQztFQUMxQyx5QkFDSixFQUFBOztBQUVBO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksOEJBQThCO0VBQzlCLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksOEJBQW1CO0VBQW5CLDZCQUFtQjtVQUFuQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxvQ0FBb0M7RUFDcEMsNEJBQTRCO0VBRTVCLHlCQUFtQjtVQUFuQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSx5QkFBbUI7VUFBbkIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksVUFBVSxFQUFBOztBQUdkO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGtCQUFr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LEVBQUE7O0FBRXRCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3JlcG9ydHMvcHJlLWFkZG0tc3RkLWFwcGxpY2F0aW9uLXJlcG9ydC9wcmUtYWRkbS1zdGQtYXBwbGljYXRpb24tcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmludm9pY2UtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwcHggMjVweDtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgXG59XG5cbi5iIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zMCk7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxuLmItYiB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMwKTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG4uYi10IHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzApO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbi5iLXIge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMwKTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlXG59XG5cbi5mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbn1cblxuLmZsZXgtZC1jIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogLXdlYmtpdC1jb2x1bW47XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmZsZXgtZC1yIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uZmxleC1hIHtcbiAgICAtd2Via2l0LXBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFsaWduLWl0ZW0tY2VudGVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udy01MC1wIHtcbiAgICB3aWR0aDogNTAlO1xufVxuXG4udy0xMDAtcCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5wLTIwIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG4ucHktNCB7XG4gICAgcGFkZGluZzogNHB4IDBweDtcbn1cblxuLnB4LTIwIHtcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcbn1cblxuLnB0LTMwIHtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbn1cbi5wdC0yMHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLnRleHQtbGVmdCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnRleHQtcmlnaHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4udGV4dC1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRleHQtdXBwZXJjYXNlIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ucmVzdWx0LWgge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG1hcmdpbjogMnB4O1xufVxuXG4ucmVzdWx0LWggc3BhbiB7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uaDItYyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ucHItOCB7XG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xuICAgIDtcbn1cblxuLnBiLTIwIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICA7XG59XG5cbi5tYi0yMCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnAtMTAge1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5wci00cmVtIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cmVtO1xufVxuXG4ucmlnaHQtYWxpZ24ge1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuLmxlZnQtYWxpZ24ge1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4ubG9nby1pbWcge1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgbWF4LWhlaWdodDogMTAwcHhcbn1cblxuLnRleHQtbGcge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLnNjaG9vbC1zdGFtcCB7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIG1pbi13aWR0aDogMTMwcHg7XG4gICAgbWF4LXdpZHRoOiAxMzBweDtcbiAgICBoZWlnaHQ6IDEzMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2Nob29sLXN0YW1wOjphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzYlO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29udGVudDogXCJTY2hvb2wgc2VhbCBMb2dvXCI7XG59XG5cbi50b3Atc3BhY2Uge1xuICAgIHBhZGRpbmctdG9wOiAxLjRyZW07XG59XG5cbi5vcmRlci1saXN0IC5saXN0IHtcbiAgICAvKiBkaXNwbGF5OmZsZXg7IFxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7ICovXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBkZWNpbWFsO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLm9yZGVyLWxpc3QgLmxpc3QgLnRleHQge1xuICAgIHdoaXRlLXNwYWNlOiBwcmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlblxufVxuXG4ub3JkZXItbGlzdCAubGlzdCAudGl0bGUge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrXG59XG5cbi5zaW5nbGUtbGluZSB7XG4gICAgd2lkdGg6IDEwNTBweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZy10b3A6IDE1cHhcbn1cblxuLm9yZGVyLWxpc3QgLmxpc3QgLmluLXdvcmRzIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5tYWluLXRpdGxlIHtcbiAgICBiYWNrZ3JvdW5kOiAjNWY1ZjVmO1xuICAgIGRpc3BsYXk6IGxpc3QtaXRlbTtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLmF0dGVuZGFuY2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2Vcbn1cblxuLmF0dGVuZGFuY2UgdGhlYWQge1xuICAgIGJhY2tncm91bmQ6ICM1ZjVmNWY7XG4gICAgY29sb3I6ICNmZmY7XG59XG4uYXR0ZW5kYW5jZSB0ciB0aCxcbi5hdHRlbmRhbmNlIHRyIHRkIHtcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYXR0ZW5kYW5jZTIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2Vcbn1cblxuLmF0dGVuZGFuY2UyIHRoZWFkIHtcbiAgICBiYWNrZ3JvdW5kOiAjNWY1ZjVmO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuLmF0dGVuZGFuY2UyIHRyIHRoe1xuICAgIHBhZGRpbmc6IDE1cHggMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hdHRlbmRhbmNlMiB0ciB0ZCB7XG4gICAgcGFkZGluZzogNXB4IDBweDsgICAgICAgICBcbn1cbi5hdHRlbmRhbmNlMiB0ciB0ZDpmaXJzdC1jaGlsZCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4OyAgICAgIFxufVxuLmF0dGVuZGFuY2UyIHRyIHRkOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYXR0ZW5kYW5jZTIgdHI6bnRoLWNoaWxkKDNuKSB7IFxuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkO1xuICAgfVxuXG4gICAub3V0ZXItbGluZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzApO1xuICAgIG1hcmdpbjogNXB4IDMwcHg7XG59XG4ub3V0ZXItbGluZSAuaGVscGVyLXRhYmxlOmZpcnN0LWNoaWxke1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBib3JkZXItdG9wOiBub25lO1xufVxuXG4uaGVscGVyLXRhYmxlIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzApO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHBhZGRpbmc6IDlweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzApO1xufVxuXG4udG90YWwtdGFibGV7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMwKTsgXG4gICAgcGFkZGluZzogMTNweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4OyAgXG59XG4udG90YWwtdGFibGUgdGg6Zmlyc3QtY2hpbGR7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgbWF4LXdpZHRoOiA1NXB4O1xufVxuLnRvdGFsLXRhYmxlIHRoOmxhc3QtY2hpbGR7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cbiAubWFya3Mge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gICAgfVxuICAgIFxuICAgIC5tYXJrcyB0aGVhZCB0ciB0aCB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICAgICAgO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZGVkZWRlO1xuICAgIH1cbiAgICBcbiAgICAubWFya3MgdGJvZHkgdHIgdGQge1xuICAgICAgICBwYWRkaW5nOiA4cHggMTBweFxuICAgIH1cbiAgICBcbiAgICAubWFya3MuYm9yZGVyLXRyIHRoLFxuICAgIC5tYXJrcy5ib3JkZXItdHIgdGQge1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zMCk7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgICAgICAvKiB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICovXG4gICAgfVxuICAgIFxuICAgIC5tYXJrcy5ib3JkZXItdHIgdGQgLmNvbnRlbnQge1xuICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZVxuICAgIH1cbiAgICBcbiAgICAubS13LTIwMCB7XG4gICAgICAgIC8qIHdpZHRoOiAyMDBweDtcbiAgICAgICAgbWF4LXdpZHRoOiAyMDBweDsgKi9cbiAgICAgICAgbWluLXdpZHRoOiAyMDBweFxuICAgIH0gXG4gICAgXG4gICAgLm1hcmtzLmJvcmRlci10ciB0aDpsYXN0LWNoaWxkLFxuICAgIC5tYXJrcy5ib3JkZXItdHIgdGQ6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZVxuICAgIH1cbiAgICAuaGVhZGVyLXRpdGxlMiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RlZGVkZTtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkXG59XG4udGVybXN7XG4gICAgcGFkZGluZzogMjBweCA1NXB4IDVweDtcbn1cbiAgICAudGVtLXRhYmxle1xuICAgICAgICBwYWRkaW5nOiAwcHggMTMlO1xuICAgIH1cblxuICAgIC5mZWUtcmVjaXB0IHRyIHRoLCAuZmVlLXJlY2lwdCB0ciB0ZHtcbiAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICB9IiwiLmludm9pY2UtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMHB4IDI1cHg7XG4gIG1hcmdpbjogMHB4IGF1dG87IH1cblxuLmIge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IH1cblxuLmItYiB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IH1cblxuLmItdCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IH1cblxuLmItciB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgfVxuXG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDsgfVxuXG4uZmxleC1kLWMge1xuICBmbGV4LWRpcmVjdGlvbjogLXdlYmtpdC1jb2x1bW47XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cblxuLmZsZXgtZC1yIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdzsgfVxuXG4uZmxleC1hIHtcbiAgLXdlYmtpdC1wbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cblxuLmFsaWduLWl0ZW0tY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuXG4udy01MC1wIHtcbiAgd2lkdGg6IDUwJTsgfVxuXG4udy0xMDAtcCB7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi5wLTIwIHtcbiAgcGFkZGluZzogMjBweDsgfVxuXG4ucHktNCB7XG4gIHBhZGRpbmc6IDRweCAwcHg7IH1cblxuLnB4LTIwIHtcbiAgcGFkZGluZzogMHB4IDIwcHg7IH1cblxuLnB0LTMwIHtcbiAgcGFkZGluZy10b3A6IDMwcHg7IH1cblxuLnB0LTIwIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7IH1cblxuLnRleHQtbGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cblxuLnRleHQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDsgfVxuXG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLnRleHQtdXBwZXJjYXNlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuXG4ucmVzdWx0LWgge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogMnB4OyB9XG5cbi5yZXN1bHQtaCBzcGFuIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuXG4uaDItYyB7XG4gIGZvbnQtc2l6ZTogMjBweDsgfVxuXG4ucHItOCB7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDsgfVxuXG4ucGItMjAge1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDsgfVxuXG4ubWItMjAge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XG5cbi5wLTEwIHtcbiAgcGFkZGluZzogMTBweDsgfVxuXG4ucHItNHJlbSB7XG4gIHBhZGRpbmctcmlnaHQ6IDRyZW07IH1cblxuLnJpZ2h0LWFsaWduIHtcbiAgZmxvYXQ6IHJpZ2h0OyB9XG5cbi5sZWZ0LWFsaWduIHtcbiAgZmxvYXQ6IGxlZnQ7IH1cblxuLmxvZ28taW1nIHtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgbWF4LWhlaWdodDogMTAwcHg7IH1cblxuLnRleHQtbGcge1xuICBmb250LXNpemU6IDI1cHg7IH1cblxuLnNjaG9vbC1zdGFtcCB7XG4gIHdpZHRoOiAxMzBweDtcbiAgbWluLXdpZHRoOiAxMzBweDtcbiAgbWF4LXdpZHRoOiAxMzBweDtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuXG4uc2Nob29sLXN0YW1wOjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNiU7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBjb250ZW50OiBcIlNjaG9vbCBzZWFsIExvZ29cIjsgfVxuXG4udG9wLXNwYWNlIHtcbiAgcGFkZGluZy10b3A6IDEuNHJlbTsgfVxuXG4ub3JkZXItbGlzdCAubGlzdCB7XG4gIC8qIGRpc3BsYXk6ZmxleDsgXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDsgKi9cbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGlzdC1zdHlsZS10eXBlOiBkZWNpbWFsO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cblxuLm9yZGVyLWxpc3QgLmxpc3QgLnRleHQge1xuICB3aGl0ZS1zcGFjZTogcHJlO1xuICBvdmVyZmxvdzogaGlkZGVuOyB9XG5cbi5vcmRlci1saXN0IC5saXN0IC50aXRsZSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG5cbi5zaW5nbGUtbGluZSB7XG4gIHdpZHRoOiAxMDUwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmctdG9wOiAxNXB4OyB9XG5cbi5vcmRlci1saXN0IC5saXN0IC5pbi13b3JkcyB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDsgfVxuXG4ubWFpbi10aXRsZSB7XG4gIGJhY2tncm91bmQ6ICM1ZjVmNWY7XG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcbiAgY29sb3I6ICNmZmY7IH1cblxuLmF0dGVuZGFuY2Uge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IH1cblxuLmF0dGVuZGFuY2UgdGhlYWQge1xuICBiYWNrZ3JvdW5kOiAjNWY1ZjVmO1xuICBjb2xvcjogI2ZmZjsgfVxuXG4uYXR0ZW5kYW5jZSB0ciB0aCxcbi5hdHRlbmRhbmNlIHRyIHRkIHtcbiAgcGFkZGluZzogMTVweCAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4uYXR0ZW5kYW5jZTIge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IH1cblxuLmF0dGVuZGFuY2UyIHRoZWFkIHtcbiAgYmFja2dyb3VuZDogIzVmNWY1ZjtcbiAgY29sb3I6ICNmZmY7IH1cblxuLmF0dGVuZGFuY2UyIHRyIHRoIHtcbiAgcGFkZGluZzogMTVweCAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4uYXR0ZW5kYW5jZTIgdHIgdGQge1xuICBwYWRkaW5nOiA1cHggMHB4OyB9XG5cbi5hdHRlbmRhbmNlMiB0ciB0ZDpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctbGVmdDogMTBweDsgfVxuXG4uYXR0ZW5kYW5jZTIgdHIgdGQ6bm90KDpmaXJzdC1jaGlsZCkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLmF0dGVuZGFuY2UyIHRyOm50aC1jaGlsZCgzbikge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7IH1cblxuLm91dGVyLWxpbmUge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIG1hcmdpbjogNXB4IDMwcHg7IH1cblxuLm91dGVyLWxpbmUgLmhlbHBlci10YWJsZTpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgYm9yZGVyLXRvcDogbm9uZTsgfVxuXG4uaGVscGVyLXRhYmxlIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwYWRkaW5nOiA5cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpOyB9XG5cbi50b3RhbC10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBwYWRkaW5nOiAxM3B4O1xuICBtYXJnaW4tdG9wOiAyMHB4OyB9XG5cbi50b3RhbC10YWJsZSB0aDpmaXJzdC1jaGlsZCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgbWF4LXdpZHRoOiA1NXB4OyB9XG5cbi50b3RhbC10YWJsZSB0aDpsYXN0LWNoaWxkIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7IH1cblxuLm1hcmtzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1zcGFjaW5nOiAwOyB9XG5cbi5tYXJrcyB0aGVhZCB0ciB0aCB7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgYmFja2dyb3VuZDogI2RlZGVkZTsgfVxuXG4ubWFya3MgdGJvZHkgdHIgdGQge1xuICBwYWRkaW5nOiA4cHggMTBweDsgfVxuXG4ubWFya3MuYm9yZGVyLXRyIHRoLFxuLm1hcmtzLmJvcmRlci10ciB0ZCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIC8qIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgKi8gfVxuXG4ubWFya3MuYm9yZGVyLXRyIHRkIC5jb250ZW50IHtcbiAgd2lkdGg6IDEycHg7XG4gIG1hcmdpbjogYXV0bztcbiAgb3ZlcmZsb3c6IHZpc2libGU7IH1cblxuLm0tdy0yMDAge1xuICAvKiB3aWR0aDogMjAwcHg7XG4gICAgICAgIG1heC13aWR0aDogMjAwcHg7ICovXG4gIG1pbi13aWR0aDogMjAwcHg7IH1cblxuLm1hcmtzLmJvcmRlci10ciB0aDpsYXN0LWNoaWxkLFxuLm1hcmtzLmJvcmRlci10ciB0ZDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXJpZ2h0OiBub25lOyB9XG5cbi5oZWFkZXItdGl0bGUyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZGVkZTtcbiAgcGFkZGluZzogOHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XG5cbi50ZXJtcyB7XG4gIHBhZGRpbmc6IDIwcHggNTVweCA1cHg7IH1cblxuLnRlbS10YWJsZSB7XG4gIHBhZGRpbmc6IDBweCAxMyU7IH1cblxuLmZlZS1yZWNpcHQgdHIgdGgsIC5mZWUtcmVjaXB0IHRyIHRkIHtcbiAgbWF4LXdpZHRoOiAyMDBweDsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/reports/pre-addm-std-application-report/pre-addm-std-application-report.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/reports/pre-addm-std-application-report/pre-addm-std-application-report.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: PreAddmStdApplicationReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreAddmStdApplicationReportComponent", function() { return PreAddmStdApplicationReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_service_reports_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/service/reports/reports.service */ "./src/app/service/reports/reports.service.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");






var PreAddmStdApplicationReportComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PreAddmStdApplicationReportComponent, _super);
    function PreAddmStdApplicationReportComponent(schoolReportsService, commonService) {
        var _this = _super.call(this) || this;
        _this.schoolReportsService = schoolReportsService;
        _this.commonService = commonService;
        _this.filterView = {
            classes: [],
            status: []
        };
        _this.filters = [];
        return _this;
    }
    PreAddmStdApplicationReportComponent.prototype.ngOnInit = function () {
        this.setColumns();
        this.getPreStudentApplicationReports(true);
    };
    PreAddmStdApplicationReportComponent.prototype.customizeLabel = function (point) {
        return point.argumentText + ': ' + point.valueText;
    };
    PreAddmStdApplicationReportComponent.prototype.setColumns = function () {
        this.columns = [
            { field: 'studentName', header: 'Name', sort: false, dataKey: 'studentName' },
            { field: 'dateOfBirth', header: 'Date Of Birth', sort: false, dataKey: 'dateOfBirth' },
            { field: 'className', header: 'Class', sort: false, dataKey: 'className' },
            { field: 'fatherName', header: 'Father Name', sort: false, dataKey: 'fatherName' },
            { field: 'motherName', header: 'Mother Name', sort: false, dataKey: 'motherName' },
            { field: 'primaryEmail', header: 'Contact Information', sort: false, dataKey: 'primaryEmail' }
        ];
    };
    PreAddmStdApplicationReportComponent.prototype.getPreStudentApplicationReports = function (onlyFilters) {
        var _this = this;
        if (onlyFilters === void 0) { onlyFilters = false; }
        this.schoolReportsService.getPreStudentApplicationReports(this.filterView.classes, this.filterView.status).subscribe(function (res) {
            if (onlyFilters) {
                _this.filters = res.filters;
            }
            else {
                _this.filters = res.filters;
                _this.resultApplicationReports = res;
                _this.initializeTableSettings();
            }
        });
    };
    PreAddmStdApplicationReportComponent.prototype.initializeTableSettings = function () {
        var _this = this;
        if (this.resultApplicationReports.studentApplicationDetailsView) {
            this.applicants = null;
            var totalCount = null;
            if (this.resultApplicationReports.studentApplicationDetailsView.rejectedApplications.length) {
                this.resultApplicationReports.studentApplicationDetailsView.rejectedApplications.forEach(function (element) {
                    element.dateOfBirth = (element.dateOfBirth == null) ? null : _this.commonService.customDateFormat(element.dateOfBirth, _this.getSchoolDateFormat()).date;
                });
                this.resultApplicationReports.studentApplicationDetailsView.
                    rejectedApplications.push({
                    primaryEmail: 'Total: ' + this.resultApplicationReports.studentApplicationDetailsView.rejectedApplications.length + ' Rejected Applications'
                });
                this.applicants = this.applicants ? [this.applicants,
                    this.resultApplicationReports.studentApplicationDetailsView.rejectedApplications.length + ' Rejected Applications'].filter(function (a) { return a; }).join(' , ') :
                    this.resultApplicationReports.studentApplicationDetailsView.rejectedApplications.length + ' Rejected Applications';
                totalCount += this.resultApplicationReports.studentApplicationDetailsView.rejectedApplications.length;
            }
            else {
                this.resultApplicationReports.studentApplicationDetailsView.rejectedApplications = [];
            }
            if (this.resultApplicationReports.studentApplicationDetailsView.pendingApplications.length) {
                this.resultApplicationReports.studentApplicationDetailsView.pendingApplications.forEach(function (element) {
                    element.dateOfBirth = (element.dateOfBirth == null) ? null : _this.commonService.customDateFormat(element.dateOfBirth, _this.getSchoolDateFormat()).date;
                });
                this.resultApplicationReports.studentApplicationDetailsView.pendingApplications
                    .push({
                    primaryEmail: 'Total: ' + this.resultApplicationReports.studentApplicationDetailsView.pendingApplications.length + ' Pending Applications'
                });
                this.applicants = this.applicants ? [this.applicants,
                    this.resultApplicationReports.studentApplicationDetailsView.pendingApplications.length + ' Pending Applications'].filter(function (a) { return a; }).join(' , ') :
                    this.resultApplicationReports.studentApplicationDetailsView.pendingApplications.length + ' Pending Applications';
                totalCount += this.resultApplicationReports.studentApplicationDetailsView.pendingApplications.length;
            }
            else {
                this.resultApplicationReports.studentApplicationDetailsView.pendingApplications = [];
            }
            if (this.resultApplicationReports.studentApplicationDetailsView.approvedApplications.length > 0) {
                this.resultApplicationReports.studentApplicationDetailsView.approvedApplications.forEach(function (element) {
                    element.dateOfBirth = (element.dateOfBirth == null) ? null : _this.commonService.customDateFormat(element.dateOfBirth, _this.getSchoolDateFormat()).date;
                });
                this.resultApplicationReports.studentApplicationDetailsView.approvedApplications
                    .push({ primaryEmail: 'Total: ' + this.resultApplicationReports.studentApplicationDetailsView.approvedApplications.length + ' Approved Applications' });
                this.applicants = this.applicants ? [this.applicants,
                    this.resultApplicationReports.studentApplicationDetailsView.approvedApplications.length + ' Approved Applications'].filter(function (a) { return a; }).join(' , ') :
                    this.resultApplicationReports.studentApplicationDetailsView.approvedApplications.length + ' Approved Applications';
                totalCount += this.resultApplicationReports.studentApplicationDetailsView.approvedApplications.length;
            }
            else {
                this.resultApplicationReports.studentApplicationDetailsView.approvedApplications = [];
            }
            this.applicants = this.applicants ? [this.applicants,
                '       Total: ' + totalCount].filter(function (a) { return a; }).join() : null;
        }
    };
    PreAddmStdApplicationReportComponent.prototype.onSelectFilter = function (event) {
        if (event.type === 'Class') {
            this.filterView.classes.push(event.event.value);
        }
        if (event.type === 'Status') {
            this.filterView.status.push(event.event.value);
        }
    };
    PreAddmStdApplicationReportComponent.prototype.reset = function () {
        this.filterView.classes = [];
        this.filterView.status = [];
        this.resultApplicationReports = null;
    };
    PreAddmStdApplicationReportComponent.prototype.generateReport = function (rp) {
        if (rp === 'generatePdfReport') {
            this.schoolReportsService.generatePdf(document.getElementById('admitted-std'), app_app_constants__WEBPACK_IMPORTED_MODULE_5__["Messages"].COMMON_TABLE_CSS);
        }
        if (rp === 'generateExcelReport') {
            this.schoolReportsService.exportToExcel('adm-report', 'payment_due_report');
        }
    };
    PreAddmStdApplicationReportComponent.prototype.createResultRow = function (data, count, key) {
        return data.push({ primaryEmail: 'Total: ' + count + key });
    };
    PreAddmStdApplicationReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pre-addm-std-application-report',
            template: __webpack_require__(/*! ./pre-addm-std-application-report.component.html */ "./src/app/modules/reports/pre-addm-std-application-report/pre-addm-std-application-report.component.html"),
            styles: [__webpack_require__(/*! ./pre-addm-std-application-report.component.scss */ "./src/app/modules/reports/pre-addm-std-application-report/pre-addm-std-application-report.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_reports_reports_service__WEBPACK_IMPORTED_MODULE_2__["SchoolReportsService"], app_service_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]])
    ], PreAddmStdApplicationReportComponent);
    return PreAddmStdApplicationReportComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/reports/reports-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/reports/reports-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsRoutingModule", function() { return ReportsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reports/reports.component */ "./src/app/modules/reports/reports/reports.component.ts");




var routes = [
    { path: 'run-reports', component: _reports_reports_component__WEBPACK_IMPORTED_MODULE_3__["ReportsComponent"], data: { title: 'Reports' } },
];
var ReportsRoutingModule = /** @class */ (function () {
    function ReportsRoutingModule() {
    }
    ReportsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ReportsRoutingModule);
    return ReportsRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/reports/reports.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/reports/reports.module.ts ***!
  \***************************************************/
/*! exports provided: ReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _reports_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reports-routing.module */ "./src/app/modules/reports/reports-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var app_main_matcomponents_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/main/matcomponents.module */ "./src/app/main/matcomponents.module.ts");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var ng2_tel_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-tel-input */ "./node_modules/ng2-tel-input/ng2-tel-input.js");
/* harmony import */ var _pre_addm_std_application_report_pre_addm_std_application_report_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pre-addm-std-application-report/pre-addm-std-application-report.component */ "./src/app/modules/reports/pre-addm-std-application-report/pre-addm-std-application-report.component.ts");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./reports/reports.component */ "./src/app/modules/reports/reports/reports.component.ts");
/* harmony import */ var _adm_app_summary_report_adm_app_summary_report_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./adm-app-summary-report/adm-app-summary-report.component */ "./src/app/modules/reports/adm-app-summary-report/adm-app-summary-report.component.ts");
/* harmony import */ var app_service_reports_reports_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/service/reports/reports.service */ "./src/app/service/reports/reports.service.ts");
/* harmony import */ var _inactive_std_applications_report_inactive_std_applications_report_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./inactive-std-applications-report/inactive-std-applications-report.component */ "./src/app/modules/reports/inactive-std-applications-report/inactive-std-applications-report.component.ts");
/* harmony import */ var _students_strength_students_strength_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./students-strength/students-strength.component */ "./src/app/modules/reports/students-strength/students-strength.component.ts");
/* harmony import */ var _students_attendance_report_students_attendance_report_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./students-attendance-report/students-attendance-report.component */ "./src/app/modules/reports/students-attendance-report/students-attendance-report.component.ts");
/* harmony import */ var _concession_std_report_concession_std_report_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./concession-std-report/concession-std-report.component */ "./src/app/modules/reports/concession-std-report/concession-std-report.component.ts");
/* harmony import */ var _payment_correction_report_payment_correction_report_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./payment-correction-report/payment-correction-report.component */ "./src/app/modules/reports/payment-correction-report/payment-correction-report.component.ts");
/* harmony import */ var _staff_attnd_report_staff_attnd_report_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./staff-attnd-report/staff-attnd-report.component */ "./src/app/modules/reports/staff-attnd-report/staff-attnd-report.component.ts");
/* harmony import */ var _adm_std_report_adm_std_report_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./adm-std-report/adm-std-report.component */ "./src/app/modules/reports/adm-std-report/adm-std-report.component.ts");
/* harmony import */ var _failed_payment_report_failed_payment_report_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./failed-payment-report/failed-payment-report.component */ "./src/app/modules/reports/failed-payment-report/failed-payment-report.component.ts");
/* harmony import */ var _payment_due_report_payment_due_report_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./payment-due-report/payment-due-report.component */ "./src/app/modules/reports/payment-due-report/payment-due-report.component.ts");
/* harmony import */ var app_service_general_api_classes_config_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! app/service/general/api/classes-config.service */ "./src/app/service/general/api/classes-config.service.ts");
/* harmony import */ var app_service_reports_generate_pdf_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! app/service/reports/generate-pdf.service */ "./src/app/service/reports/generate-pdf.service.ts");
/* harmony import */ var _fee_collection_report_fee_collection_report_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./fee-collection-report/fee-collection-report.component */ "./src/app/modules/reports/fee-collection-report/fee-collection-report.component.ts");
/* harmony import */ var _examination_schedule_report_examination_schedule_report_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./examination-schedule-report/examination-schedule-report.component */ "./src/app/modules/reports/examination-schedule-report/examination-schedule-report.component.ts");
/* harmony import */ var _student_fee_receipt_student_fee_receipt_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./student-fee-receipt/student-fee-receipt.component */ "./src/app/modules/reports/student-fee-receipt/student-fee-receipt.component.ts");
/* harmony import */ var app_service_academic_service_api_student_database_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! app/service/academic-service/api/student-database.service */ "./src/app/service/academic-service/api/student-database.service.ts");
/* harmony import */ var saturn_datepicker__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! saturn-datepicker */ "./node_modules/saturn-datepicker/fesm5/saturn-datepicker.js");
/* harmony import */ var _marks_entry_report_marks_entry_report_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./marks-entry-report/marks-entry-report.component */ "./src/app/modules/reports/marks-entry-report/marks-entry-report.component.ts");
/* harmony import */ var app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! app/service/grading-service/api/grade-setup.service */ "./src/app/service/grading-service/api/grade-setup.service.ts");
/* harmony import */ var app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! app/service/class-schedules/class-time-table.service */ "./src/app/service/class-schedules/class-time-table.service.ts");


































var ReportsModule = /** @class */ (function () {
    function ReportsModule() {
    }
    ReportsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_pre_addm_std_application_report_pre_addm_std_application_report_component__WEBPACK_IMPORTED_MODULE_11__["PreAddmStdApplicationReportComponent"], _reports_reports_component__WEBPACK_IMPORTED_MODULE_12__["ReportsComponent"], _adm_app_summary_report_adm_app_summary_report_component__WEBPACK_IMPORTED_MODULE_13__["AdmAppSummaryReportComponent"],
                _inactive_std_applications_report_inactive_std_applications_report_component__WEBPACK_IMPORTED_MODULE_15__["InactiveStdApplicationsReportComponent"], _students_strength_students_strength_component__WEBPACK_IMPORTED_MODULE_16__["StudentsStrengthComponent"], _students_attendance_report_students_attendance_report_component__WEBPACK_IMPORTED_MODULE_17__["StudentsAttendanceReportComponent"], _concession_std_report_concession_std_report_component__WEBPACK_IMPORTED_MODULE_18__["ConcessionStdReportComponent"],
                _payment_correction_report_payment_correction_report_component__WEBPACK_IMPORTED_MODULE_19__["PaymentCorrectionReportComponent"], _staff_attnd_report_staff_attnd_report_component__WEBPACK_IMPORTED_MODULE_20__["StaffAttndReportComponent"],
                _adm_std_report_adm_std_report_component__WEBPACK_IMPORTED_MODULE_21__["AdmStdReportComponent"], _failed_payment_report_failed_payment_report_component__WEBPACK_IMPORTED_MODULE_22__["FailedPaymentReportComponent"],
                _payment_due_report_payment_due_report_component__WEBPACK_IMPORTED_MODULE_23__["PaymentDueReportComponent"], _fee_collection_report_fee_collection_report_component__WEBPACK_IMPORTED_MODULE_26__["FeeCollectionReportComponent"], _examination_schedule_report_examination_schedule_report_component__WEBPACK_IMPORTED_MODULE_27__["ExaminationScheduleReportComponent"], _student_fee_receipt_student_fee_receipt_component__WEBPACK_IMPORTED_MODULE_28__["StudentFeeReceiptComponent"], _marks_entry_report_marks_entry_report_component__WEBPACK_IMPORTED_MODULE_31__["MarksEntryReportComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _reports_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReportsRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedManagementModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_9__["FuseSharedModule"],
                app_main_matcomponents_module__WEBPACK_IMPORTED_MODULE_8__["MatcomponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ng2_tel_input__WEBPACK_IMPORTED_MODULE_10__["Ng2TelInputModule"],
                saturn_datepicker__WEBPACK_IMPORTED_MODULE_30__["SatDatepickerModule"]
            ],
            providers: [app_service_reports_reports_service__WEBPACK_IMPORTED_MODULE_14__["SchoolReportsService"], app_service_general_api_classes_config_service__WEBPACK_IMPORTED_MODULE_24__["ClassesConfigService"], app_service_reports_generate_pdf_service__WEBPACK_IMPORTED_MODULE_25__["ReportGenerationService"], app_service_academic_service_api_student_database_service__WEBPACK_IMPORTED_MODULE_29__["StudentDatabaseService"], app_service_grading_service_api_grade_setup_service__WEBPACK_IMPORTED_MODULE_32__["GradeSetupService"], app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_33__["ClassTimetableService"]]
        })
    ], ReportsModule);
    return ReportsModule;
}());



/***/ }),

/***/ "./src/app/modules/reports/reports/reports.component.html":
/*!****************************************************************!*\
  !*** ./src/app/modules/reports/reports/reports.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-sm-32\">\n  <div class=\"py-8 px-20 font-size-18 text-uppercase\" translate>Select Report</div>\n  <div class=\"mat-elevation-z8 simple-table-container radius-t-20 pb-20\">\n    <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"start center\">\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxFlex=\"100\">\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"60\"\n          class=\"pt-sm-20\">\n          <mat-label translate #reports>Reports</mat-label>\n          <mat-select required (selectionChange)=\"onSelectReport($event)\">\n            <mat-option *ngFor=\"let report of reportLists\" [value]=\"report.code\">\n              {{ report.name }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n      <div fxLayout=\"row\" fxLayoutAlign=\"center end\" class=\"mr-8\">\n        <button mat-button type='button' (click)=\"getHelpText('Staff Attendance')\">\n          <mat-icon class=\"grey-600-fg\">info</mat-icon>\n        </button>\n      </div>\n    </div>\n    <mat-divider *ngIf=\"slectedReportGeneration?.value\"></mat-divider>\n    <app-adm-app-summary-report *ngIf=\"slectedReportGeneration?.value == 'ADM_APP_SM'\"></app-adm-app-summary-report>\n    <app-pre-addm-std-application-report *ngIf=\"slectedReportGeneration?.value == 'PRE_ADM_STD_APP'\">\n    </app-pre-addm-std-application-report>\n    <app-inactive-std-applications-report *ngIf=\"slectedReportGeneration?.value == 'IN_STD_SM'\">\n    </app-inactive-std-applications-report>\n    <app-students-strength *ngIf=\"slectedReportGeneration?.value == 'STD_STR'\"></app-students-strength>\n    <app-students-attendance-report *ngIf=\"slectedReportGeneration?.value == 'STD_ATD'\">\n    </app-students-attendance-report>\n    <app-concession-std-report *ngIf=\"slectedReportGeneration?.value == 'FEE_CON_STD'\"></app-concession-std-report>\n    <app-payment-correction-report *ngIf=\"slectedReportGeneration?.value == 'PMT_COR'\"></app-payment-correction-report>\n    <app-staff-attnd-report *ngIf=\"slectedReportGeneration?.value == 'STF_ATD'\"></app-staff-attnd-report>\n    <app-adm-std-report *ngIf=\"slectedReportGeneration?.value == 'ADM_STD_RPT'\"></app-adm-std-report>\n    <app-failed-payment-report *ngIf=\"slectedReportGeneration?.value == 'FAIL_PMT_RPT'\"></app-failed-payment-report>\n    <app-payment-due-report *ngIf=\"slectedReportGeneration?.value == 'PMT_DUE_RPT'\"></app-payment-due-report>\n    <app-fee-collection-report *ngIf=\"slectedReportGeneration?.value == 'FEE_COL_RPT'\"></app-fee-collection-report>\n    <app-examination-schedule-report *ngIf=\"slectedReportGeneration?.value == 'EXE_SCH_RPT'\"></app-examination-schedule-report>\n    <app-student-fee-receipt *ngIf=\"slectedReportGeneration?.value == 'STD_RCPT_RPT'\"></app-student-fee-receipt>\n    <app-marks-entry-report *ngIf=\"slectedReportGeneration?.value == 'MARKS_ENTRY_RPT'\"></app-marks-entry-report>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/reports/reports/reports.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/modules/reports/reports/reports.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVwb3J0cy9yZXBvcnRzL3JlcG9ydHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/reports/reports/reports.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/reports/reports/reports.component.ts ***!
  \**************************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");



var ReportsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ReportsComponent, _super);
    function ReportsComponent() {
        var _this = _super.call(this) || this;
        _this.reportLists = [
            { name: 'Admission Applications Summary Report', code: 'ADM_APP_SM' },
            { name: 'Inactive Students Summary Report', code: 'IN_STD_SM' },
            { name: 'Pre Addmission Student Application Report', code: 'PRE_ADM_STD_APP' },
            { name: 'Students Strength Report', code: 'STD_STR' },
            { name: 'Students Attendance Report', code: 'STD_ATD' },
            { name: 'Fee Concessions Students Report', code: 'FEE_CON_STD' },
            { name: 'Staff Attendance Summary Report', code: 'STF_ATD' },
            { name: 'Payment Corrections Report', code: 'PMT_COR' },
            { name: 'Admitted Student Applications Report', code: 'ADM_STD_RPT' },
            { name: 'Failed Payments Report', code: 'FAIL_PMT_RPT' },
            { name: 'Payment Due Report', code: 'PMT_DUE_RPT' },
            { name: 'Fee Collection Report', code: 'FEE_COL_RPT' },
            { name: 'Examination Schedule Report', code: 'EXE_SCH_RPT' },
            { name: 'Student Receipt Report', code: 'STD_RCPT_RPT' },
        ].sort(function (a, b) {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        });
        return _this;
    }
    ReportsComponent.prototype.ngOnInit = function () {
    };
    ReportsComponent.prototype.onSelectReport = function (evnt) {
        this.slectedReportGeneration = evnt;
    };
    ReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reports',
            template: __webpack_require__(/*! ./reports.component.html */ "./src/app/modules/reports/reports/reports.component.html"),
            styles: [__webpack_require__(/*! ./reports.component.scss */ "./src/app/modules/reports/reports/reports.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReportsComponent);
    return ReportsComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/reports/staff-attnd-report/staff-attnd-report.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/reports/staff-attnd-report/staff-attnd-report.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayout.gt-sm=\"row wrap\" fxLayoutAlign=\"center center\" class=\"px-24 pt-20 pb-12\">\n    <form [formGroup]=\"searchForm\">\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"30\"\n            class=\"icon-center pr-sm-12\">\n            <mat-label translate #fromDate>From Date</mat-label>\n            <input matInput (keyup)=\"forceValidation('fromDate',searchForm)\" formControlName=\"fromDate\"\n                [matDatepicker]=\"picker\" required placeholder=\"Choose a from date\" (dateChange)=\"setValidation()\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n            <mat-datepicker #picker></mat-datepicker>\n            <mat-error>\n                <app-validation [labelName]='fromDate.innerText' [validationControl]=\"searchForm.controls.fromDate\"\n                    [doValidate]=\"true\">\n                </app-validation>\n            </mat-error>\n        </mat-form-field>\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"32\"\n            class=\"icon-center\">\n            <mat-label translate #toDate>To Date</mat-label>\n            <input matInput (keyup)=\"forceValidation('toDate',searchForm)\" formControlName=\"toDate\"\n                [matDatepicker]=\"toDatePicker\" [min]=\"searchForm.value.fromDate\" [max]=\"maxDate\" required\n                placeholder=\"Choose a to date\">\n            <mat-datepicker-toggle matSuffix [for]=\"toDatePicker\"></mat-datepicker-toggle>\n            <mat-datepicker #toDatePicker></mat-datepicker>\n            <mat-error>\n                <app-validation [labelName]='toDate.innerText' [validationControl]=\"searchForm.controls.toDate\"\n                    [doValidate]=\"true\">\n                </app-validation>\n            </mat-error>\n        </mat-form-field>\n        <div fxLayoutAlign=\"end center\">\n            <button mat-raised-button translate color=\"primary\" class=\"text-uppercase ml-12 mb-20\" (click)=\"reset()\" type=\"reset\">\n                Reset\n            </button>\n            <button mat-raised-button translate color=\"accent\" class=\"text-uppercase ml-12 mb-20\"\n                (click)=\"getStaffAttendanceReport()\">\n                {{'Search' | translate}}\n            </button>\n        </div>\n    </form>\n</div>\n\n<div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"px-32 py-12\" *ngIf=\"resultApplicationReports\">\n    <button mat-stroked-button class=\"mr-12\" (click)=\"generateReport('generatePdfReport')\">\n        <mat-icon class=\"mr-4\">save_alt</mat-icon>Download PDF\n    </button>\n</div>\n<div class='invoice-container' id=\"admitted-std\" *ngIf=\"resultApplicationReports\" style=\"padding: 25px; padding-top: 0px;\">\n    <span class=\"dark-theme-color\" style=\"color:#fff\">A</span>\n    <div class='b flex-d-c invoice-body' style='overflow: hidden;'>\n        <h2 class=\"text-center text-uppercase\" translate>STAFF ATTENDANCE SUMMARY REPORT</h2>\n        <div class=\"p-20 mb-20 main-title\">\n            <div class=\"left-align flex\">\n                <div>{{searchForm.value.fromDate | date: 'MMM d, y'}}</div>\n                <div class=\"px-20\">To</div>\n                <div>{{searchForm.value.toDate | date: 'MMM d, y'}}</div>\n            </div>\n            <div class=\"right-align\">TOTAL NUMBER OF STAFF: {{resultApplicationReports.totalNumberOfStaff}}</div>\n        </div>\n        <div class=\"p-10\">\n            <table class=\"attendance b\">\n                <thead>\n                    <tr>\n                        <th></th>\n                        <th style=\"text-transform:capitalize;\"\n                            *ngFor=\"let key of objectKeys(resultApplicationReports?.numberOFWorkingDays)\">{{key}}</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td>No. of Working days</td>\n                        <td *ngFor=\"let key of objectKeys(resultApplicationReports?.numberOFWorkingDays)\">\n                            {{resultApplicationReports?.numberOFWorkingDays[key]}}</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        <div class=\"px-20 pt-20 text-uppercase\">STAFF ATTENDANCE</div>\n        <div class=\"p-10 scroll-tab\">\n            <table class=\"attendance2 staff-attendence b\">\n                <thead>\n                    <tr>\n                        <th>Staff overall</th>\n                        <th></th>\n                        <th style=\"text-transform:capitalize;\"\n                            *ngFor=\"let key of objectKeys(resultApplicationReports?.numberOFWorkingDays)\">{{key}}</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <ng-container *ngFor=\"let staff of resultApplicationReports?.staffDetails\">\n                        <tr>\n                            <td>{{staff.staffName}}</td>\n                            <td>Days Present</td>\n                            <td *ngFor=\"let key of objectKeys(resultApplicationReports?.numberOFWorkingDays)\">\n                                {{staff?.staffAttendanceDetails[key]?.presentDays}}</td>\n                        </tr>\n                        <tr>\n                            <td>{{staff?.department}}</td>\n                            <td>Days Absent</td>\n                            <td *ngFor=\"let key of objectKeys(resultApplicationReports?.numberOFWorkingDays)\">\n                                {{staff?.staffAttendanceDetails[key]?.absentDays}}</td>\n                        </tr>\n                        <tr>\n                            <td>{{staff.staffCode}}</td>\n                            <td>Hours Logged</td>\n                            <td *ngFor=\"let key of objectKeys(resultApplicationReports?.numberOFWorkingDays)\">\n                                {{staff?.staffAttendanceDetails[key]?.hoursLogged}}</td>\n                        </tr>\n                    </ng-container>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/reports/staff-attnd-report/staff-attnd-report.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/reports/staff-attnd-report/staff-attnd-report.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invoice-container {\n  padding: 0px 25px;\n  margin: 0px auto; }\n\n.b {\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.b-b {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.b-t {\n  border-top: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.b-r {\n  border-right: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.flex {\n  display: -webkit-box;\n  display: flex;\n  display: -webkit-flex; }\n\n.flex-d-c {\n  flex-direction: -webkit-column;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n\n.flex-d-r {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row; }\n\n.flex-a {\n  -webkit-place-content: center center;\n  place-content: center center;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.align-item-center {\n  -webkit-box-align: center;\n          align-items: center; }\n\n.w-50-p {\n  width: 50%; }\n\n.w-100-p {\n  width: 100%; }\n\n.p-20 {\n  padding: 20px; }\n\n.py-4 {\n  padding: 4px 0px; }\n\n.px-20 {\n  padding: 0px 20px; }\n\n.pt-30 {\n  padding-top: 30px; }\n\n.pt-20 {\n  padding-top: 20px; }\n\n.text-left {\n  text-align: left; }\n\n.text-right {\n  text-align: right; }\n\n.text-center {\n  text-align: center; }\n\n.text-uppercase {\n  text-transform: uppercase; }\n\n.result-h {\n  font-size: 20px;\n  padding: 20px;\n  margin: 2px; }\n\n.result-h span {\n  width: 80px;\n  display: inline-block; }\n\n.h2-c {\n  font-size: 20px; }\n\n.pr-8 {\n  padding-right: 8px; }\n\n.pb-20 {\n  padding-bottom: 20px; }\n\n.mb-20 {\n  margin-bottom: 20px; }\n\n.p-10 {\n  padding: 10px; }\n\n.pr-4rem {\n  padding-right: 4rem; }\n\n.right-align {\n  float: right; }\n\n.left-align {\n  float: left; }\n\n.logo-img {\n  max-width: 200px;\n  max-height: 100px; }\n\n.text-lg {\n  font-size: 25px; }\n\n.school-stamp {\n  width: 130px;\n  min-width: 130px;\n  max-width: 130px;\n  height: 130px;\n  border: 1px solid;\n  border-radius: 100%;\n  position: relative; }\n\n.school-stamp::after {\n  position: absolute;\n  top: 36%;\n  left: 0;\n  width: 100%;\n  content: \"School seal Logo\"; }\n\n.top-space {\n  padding-top: 1.4rem; }\n\n.order-list .list {\n  /* display:flex; \n        display: -webkit-flex; */\n  padding-right: 20px;\n  padding-bottom: 25px;\n  font-size: 18px;\n  list-style-type: decimal;\n  display: inline-block; }\n\n.order-list .list .text {\n  white-space: pre;\n  overflow: hidden; }\n\n.order-list .list .title {\n  white-space: nowrap;\n  margin-right: 20px;\n  display: inline-block; }\n\n.single-line {\n  width: 1050px;\n  white-space: nowrap;\n  overflow: hidden;\n  padding-top: 15px; }\n\n.order-list .list .in-words {\n  padding-right: 5px; }\n\n.main-title {\n  background: #5f5f5f;\n  display: list-item;\n  color: #fff; }\n\n.attendance {\n  width: 100%;\n  border-spacing: 0;\n  border-collapse: collapse; }\n\n.attendance thead {\n  background: #5f5f5f;\n  color: #fff; }\n\n.attendance tr th,\n.attendance tr td {\n  padding: 15px 0px;\n  text-align: center; }\n\n.attendance2 {\n  width: 100%;\n  border-spacing: 0;\n  border-collapse: collapse; }\n\n.attendance2 thead {\n  background: #5f5f5f;\n  color: #fff; }\n\n.attendance2 tr th {\n  padding: 15px 0px;\n  text-align: center; }\n\n.attendance2 tr td {\n  padding: 5px 0px; }\n\n.attendance2 tr td:first-child {\n  padding-left: 10px; }\n\n.attendance2 tr td:not(:first-child) {\n  text-align: center; }\n\n.attendance2 tr:nth-child(3n) {\n  border-bottom: 1px solid; }\n\n.outer-line {\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  margin: 5px 30px; }\n\n.outer-line .helper-table:first-child {\n  margin-top: 0px;\n  border-top: none; }\n\n.helper-table {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n  margin-bottom: 0px;\n  margin-top: 20px;\n  padding: 9px;\n  width: 100%;\n  border-top: 1px solid rgba(0, 0, 0, 0.3); }\n\n.total-table {\n  width: 100%;\n  border-top: 1px solid rgba(0, 0, 0, 0.3);\n  padding: 13px;\n  margin-top: 20px; }\n\n.total-table th:first-child {\n  text-align: left;\n  padding-left: 20px;\n  max-width: 55px; }\n\n.total-table th:last-child {\n  text-align: right;\n  padding-right: 20px; }\n\n.marks {\n  width: 100%;\n  border-spacing: 0; }\n\n.marks thead tr th {\n  padding: 10px 10px;\n  background: #dedede; }\n\n.marks tbody tr td {\n  padding: 8px 10px; }\n\n.marks.border-tr th,\n.marks.border-tr td {\n  border-right: 1px solid rgba(0, 0, 0, 0.3);\n  text-align: center;\n  font-size: 18px;\n  word-break: break-word;\n  /* text-transform: uppercase */ }\n\n.marks.border-tr td .content {\n  width: 12px;\n  margin: auto;\n  overflow: visible; }\n\n.m-w-200 {\n  /* width: 200px;\n        max-width: 200px; */\n  min-width: 200px; }\n\n.marks.border-tr th:last-child,\n.marks.border-tr td:last-child {\n  border-right: none; }\n\n.header-title2 {\n  background-color: #dedede;\n  padding: 8px;\n  font-size: 18px;\n  font-weight: bold; }\n\n.terms {\n  padding: 20px 55px 5px; }\n\n.tem-table {\n  padding: 0px 13%; }\n\n.fee-recipt tr th, .fee-recipt tr td {\n  max-width: 200px; }\n\n.scroll-tab {\n  overflow: auto;\n  overflow: overlay; }\n\n.staff-attendence th {\n  min-width: 100px;\n  max-width: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvcmVwb3J0cy9jb21tb24tcmVwb3J0cy5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3JlcG9ydHMvc3RhZmYtYXR0bmQtcmVwb3J0L3N0YWZmLWF0dG5kLXJlcG9ydC5jb21wb25lbnQuc2NzcyIsIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvcmVwb3J0cy9zdGFmZi1hdHRuZC1yZXBvcnQvc3RhZmYtYXR0bmQtcmVwb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUlwQjtFQUNJLG9DQUFvQztFQUNwQyx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSwyQ0FBMkM7RUFDM0MseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksd0NBQXdDO0VBQ3hDLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLDBDQUEwQztFQUMxQyx5QkFDSixFQUFBOztBQUVBO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksOEJBQThCO0VBQzlCLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksOEJBQW1CO0VBQW5CLDZCQUFtQjtVQUFuQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxvQ0FBb0M7RUFDcEMsNEJBQTRCO0VBRTVCLHlCQUFtQjtVQUFuQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSx5QkFBbUI7VUFBbkIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksVUFBVSxFQUFBOztBQUdkO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGlCQUFpQixFQUFB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OztFQUVJLGtCQUNKLEVBQUE7O0FBQ0E7RUFDQSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFDSixFQUFBOztBQUNBO0VBQ0ksc0JBQXNCLEVBQUE7O0FBRXRCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FFL1V4QjtFQUNJLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFFckI7RUFDQSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3JlcG9ydHMvc3RhZmYtYXR0bmQtcmVwb3J0L3N0YWZmLWF0dG5kLXJlcG9ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnZvaWNlLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMHB4IDI1cHg7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgIFxufVxuXG4uYiB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzApO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbi5iLWIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zMCk7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxuLmItdCB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMwKTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG4uYi1yIHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zMCk7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZVxufVxuXG4uZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG59XG5cbi5mbGV4LWQtYyB7XG4gICAgZmxleC1kaXJlY3Rpb246IC13ZWJraXQtY29sdW1uO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5mbGV4LWQtciB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmZsZXgtYSB7XG4gICAgLXdlYmtpdC1wbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hbGlnbi1pdGVtLWNlbnRlciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnctNTAtcCB7XG4gICAgd2lkdGg6IDUwJTtcbn1cblxuLnctMTAwLXAge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ucC0yMCB7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLnB5LTQge1xuICAgIHBhZGRpbmc6IDRweCAwcHg7XG59XG5cbi5weC0yMCB7XG4gICAgcGFkZGluZzogMHB4IDIwcHg7XG59XG5cbi5wdC0zMCB7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG59XG4ucHQtMjB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi50ZXh0LWxlZnQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi50ZXh0LXJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnRleHQtY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50ZXh0LXVwcGVyY2FzZSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnJlc3VsdC1oIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBtYXJnaW46IDJweDtcbn1cblxuLnJlc3VsdC1oIHNwYW4ge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmgyLWMge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnByLTgge1xuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICA7XG59XG5cbi5wYi0yMCB7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgO1xufVxuXG4ubWItMjAge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5wLTEwIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ucHItNHJlbSB7XG4gICAgcGFkZGluZy1yaWdodDogNHJlbTtcbn1cblxuLnJpZ2h0LWFsaWduIHtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbi5sZWZ0LWFsaWduIHtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuLmxvZ28taW1nIHtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDEwMHB4XG59XG5cbi50ZXh0LWxnIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5zY2hvb2wtc3RhbXAge1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBtaW4td2lkdGg6IDEzMHB4O1xuICAgIG1heC13aWR0aDogMTMwcHg7XG4gICAgaGVpZ2h0OiAxMzBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNjaG9vbC1zdGFtcDo6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDM2JTtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbnRlbnQ6IFwiU2Nob29sIHNlYWwgTG9nb1wiO1xufVxuXG4udG9wLXNwYWNlIHtcbiAgICBwYWRkaW5nLXRvcDogMS40cmVtO1xufVxuXG4ub3JkZXItbGlzdCAubGlzdCB7XG4gICAgLyogZGlzcGxheTpmbGV4OyBcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4OyAqL1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogZGVjaW1hbDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5vcmRlci1saXN0IC5saXN0IC50ZXh0IHtcbiAgICB3aGl0ZS1zcGFjZTogcHJlO1xuICAgIG92ZXJmbG93OiBoaWRkZW5cbn1cblxuLm9yZGVyLWxpc3QgLmxpc3QgLnRpdGxlIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xufVxuXG4uc2luZ2xlLWxpbmUge1xuICAgIHdpZHRoOiAxMDUwcHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmctdG9wOiAxNXB4XG59XG5cbi5vcmRlci1saXN0IC5saXN0IC5pbi13b3JkcyB7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4ubWFpbi10aXRsZSB7XG4gICAgYmFja2dyb3VuZDogIzVmNWY1ZjtcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5hdHRlbmRhbmNlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlXG59XG5cbi5hdHRlbmRhbmNlIHRoZWFkIHtcbiAgICBiYWNrZ3JvdW5kOiAjNWY1ZjVmO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuLmF0dGVuZGFuY2UgdHIgdGgsXG4uYXR0ZW5kYW5jZSB0ciB0ZCB7XG4gICAgcGFkZGluZzogMTVweCAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmF0dGVuZGFuY2UyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlXG59XG5cbi5hdHRlbmRhbmNlMiB0aGVhZCB7XG4gICAgYmFja2dyb3VuZDogIzVmNWY1ZjtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi5hdHRlbmRhbmNlMiB0ciB0aHtcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYXR0ZW5kYW5jZTIgdHIgdGQge1xuICAgIHBhZGRpbmc6IDVweCAwcHg7ICAgICAgICAgXG59XG4uYXR0ZW5kYW5jZTIgdHIgdGQ6Zmlyc3QtY2hpbGQge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDsgICAgICBcbn1cbi5hdHRlbmRhbmNlMiB0ciB0ZDpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmF0dGVuZGFuY2UyIHRyOm50aC1jaGlsZCgzbikgeyBcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZDtcbiAgIH1cblxuICAgLm91dGVyLWxpbmUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMwKTtcbiAgICBtYXJnaW46IDVweCAzMHB4O1xufVxuLm91dGVyLWxpbmUgLmhlbHBlci10YWJsZTpmaXJzdC1jaGlsZHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbn1cblxuLmhlbHBlci10YWJsZSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMwKTtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBwYWRkaW5nOiA5cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMwKTtcbn1cblxuLnRvdGFsLXRhYmxle1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zMCk7IFxuICAgIHBhZGRpbmc6IDEzcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDsgIFxufVxuLnRvdGFsLXRhYmxlIHRoOmZpcnN0LWNoaWxke1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIG1heC13aWR0aDogNTVweDtcbn1cbi50b3RhbC10YWJsZSB0aDpsYXN0LWNoaWxke1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG4gLm1hcmtzIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICAgIH1cbiAgICBcbiAgICAubWFya3MgdGhlYWQgdHIgdGgge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgICAgIDtcbiAgICAgICAgYmFja2dyb3VuZDogI2RlZGVkZTtcbiAgICB9XG4gICAgXG4gICAgLm1hcmtzIHRib2R5IHRyIHRkIHtcbiAgICAgICAgcGFkZGluZzogOHB4IDEwcHhcbiAgICB9XG4gICAgXG4gICAgLm1hcmtzLmJvcmRlci10ciB0aCxcbiAgICAubWFya3MuYm9yZGVyLXRyIHRkIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzApO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICAgICAgLyogdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAqL1xuICAgIH1cbiAgICBcbiAgICAubWFya3MuYm9yZGVyLXRyIHRkIC5jb250ZW50IHtcbiAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGVcbiAgICB9XG4gICAgXG4gICAgLm0tdy0yMDAge1xuICAgICAgICAvKiB3aWR0aDogMjAwcHg7XG4gICAgICAgIG1heC13aWR0aDogMjAwcHg7ICovXG4gICAgICAgIG1pbi13aWR0aDogMjAwcHhcbiAgICB9IFxuICAgIFxuICAgIC5tYXJrcy5ib3JkZXItdHIgdGg6bGFzdC1jaGlsZCxcbiAgICAubWFya3MuYm9yZGVyLXRyIHRkOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmVcbiAgICB9XG4gICAgLmhlYWRlci10aXRsZTIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZWRlZGU7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogYm9sZFxufVxuLnRlcm1ze1xuICAgIHBhZGRpbmc6IDIwcHggNTVweCA1cHg7XG59XG4gICAgLnRlbS10YWJsZXtcbiAgICAgICAgcGFkZGluZzogMHB4IDEzJTtcbiAgICB9XG5cbiAgICAuZmVlLXJlY2lwdCB0ciB0aCwgLmZlZS1yZWNpcHQgdHIgdGR7XG4gICAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgfSIsIi5pbnZvaWNlLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDBweCAyNXB4O1xuICBtYXJnaW46IDBweCBhdXRvOyB9XG5cbi5iIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyB9XG5cbi5iLWIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyB9XG5cbi5iLXQge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyB9XG5cbi5iLXIge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IH1cblxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7IH1cblxuLmZsZXgtZC1jIHtcbiAgZmxleC1kaXJlY3Rpb246IC13ZWJraXQtY29sdW1uO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG5cbi5mbGV4LWQtciB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cblxuLmZsZXgtYSB7XG4gIC13ZWJraXQtcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcbiAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG5cbi5hbGlnbi1pdGVtLWNlbnRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cblxuLnctNTAtcCB7XG4gIHdpZHRoOiA1MCU7IH1cblxuLnctMTAwLXAge1xuICB3aWR0aDogMTAwJTsgfVxuXG4ucC0yMCB7XG4gIHBhZGRpbmc6IDIwcHg7IH1cblxuLnB5LTQge1xuICBwYWRkaW5nOiA0cHggMHB4OyB9XG5cbi5weC0yMCB7XG4gIHBhZGRpbmc6IDBweCAyMHB4OyB9XG5cbi5wdC0zMCB7XG4gIHBhZGRpbmctdG9wOiAzMHB4OyB9XG5cbi5wdC0yMCB7XG4gIHBhZGRpbmctdG9wOiAyMHB4OyB9XG5cbi50ZXh0LWxlZnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XG5cbi50ZXh0LXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cblxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi50ZXh0LXVwcGVyY2FzZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cblxuLnJlc3VsdC1oIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IDJweDsgfVxuXG4ucmVzdWx0LWggc3BhbiB7XG4gIHdpZHRoOiA4MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cblxuLmgyLWMge1xuICBmb250LXNpemU6IDIwcHg7IH1cblxuLnByLTgge1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7IH1cblxuLnBiLTIwIHtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7IH1cblxuLm1iLTIwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxuXG4ucC0xMCB7XG4gIHBhZGRpbmc6IDEwcHg7IH1cblxuLnByLTRyZW0ge1xuICBwYWRkaW5nLXJpZ2h0OiA0cmVtOyB9XG5cbi5yaWdodC1hbGlnbiB7XG4gIGZsb2F0OiByaWdodDsgfVxuXG4ubGVmdC1hbGlnbiB7XG4gIGZsb2F0OiBsZWZ0OyB9XG5cbi5sb2dvLWltZyB7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIG1heC1oZWlnaHQ6IDEwMHB4OyB9XG5cbi50ZXh0LWxnIHtcbiAgZm9udC1zaXplOiAyNXB4OyB9XG5cbi5zY2hvb2wtc3RhbXAge1xuICB3aWR0aDogMTMwcHg7XG4gIG1pbi13aWR0aDogMTMwcHg7XG4gIG1heC13aWR0aDogMTMwcHg7XG4gIGhlaWdodDogMTMwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuLnNjaG9vbC1zdGFtcDo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzYlO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgY29udGVudDogXCJTY2hvb2wgc2VhbCBMb2dvXCI7IH1cblxuLnRvcC1zcGFjZSB7XG4gIHBhZGRpbmctdG9wOiAxLjRyZW07IH1cblxuLm9yZGVyLWxpc3QgLmxpc3Qge1xuICAvKiBkaXNwbGF5OmZsZXg7IFxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7ICovXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpc3Qtc3R5bGUtdHlwZTogZGVjaW1hbDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG5cbi5vcmRlci1saXN0IC5saXN0IC50ZXh0IHtcbiAgd2hpdGUtc3BhY2U6IHByZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuXG4ub3JkZXItbGlzdCAubGlzdCAudGl0bGUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuXG4uc2luZ2xlLWxpbmUge1xuICB3aWR0aDogMTA1MHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nLXRvcDogMTVweDsgfVxuXG4ub3JkZXItbGlzdCAubGlzdCAuaW4td29yZHMge1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7IH1cblxuLm1haW4tdGl0bGUge1xuICBiYWNrZ3JvdW5kOiAjNWY1ZjVmO1xuICBkaXNwbGF5OiBsaXN0LWl0ZW07XG4gIGNvbG9yOiAjZmZmOyB9XG5cbi5hdHRlbmRhbmNlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyB9XG5cbi5hdHRlbmRhbmNlIHRoZWFkIHtcbiAgYmFja2dyb3VuZDogIzVmNWY1ZjtcbiAgY29sb3I6ICNmZmY7IH1cblxuLmF0dGVuZGFuY2UgdHIgdGgsXG4uYXR0ZW5kYW5jZSB0ciB0ZCB7XG4gIHBhZGRpbmc6IDE1cHggMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLmF0dGVuZGFuY2UyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyB9XG5cbi5hdHRlbmRhbmNlMiB0aGVhZCB7XG4gIGJhY2tncm91bmQ6ICM1ZjVmNWY7XG4gIGNvbG9yOiAjZmZmOyB9XG5cbi5hdHRlbmRhbmNlMiB0ciB0aCB7XG4gIHBhZGRpbmc6IDE1cHggMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLmF0dGVuZGFuY2UyIHRyIHRkIHtcbiAgcGFkZGluZzogNXB4IDBweDsgfVxuXG4uYXR0ZW5kYW5jZTIgdHIgdGQ6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7IH1cblxuLmF0dGVuZGFuY2UyIHRyIHRkOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi5hdHRlbmRhbmNlMiB0cjpudGgtY2hpbGQoM24pIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkOyB9XG5cbi5vdXRlci1saW5lIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBtYXJnaW46IDVweCAzMHB4OyB9XG5cbi5vdXRlci1saW5lIC5oZWxwZXItdGFibGU6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGJvcmRlci10b3A6IG5vbmU7IH1cblxuLmhlbHBlci10YWJsZSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZzogOXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTsgfVxuXG4udG90YWwtdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgcGFkZGluZzogMTNweDtcbiAgbWFyZ2luLXRvcDogMjBweDsgfVxuXG4udG90YWwtdGFibGUgdGg6Zmlyc3QtY2hpbGQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIG1heC13aWR0aDogNTVweDsgfVxuXG4udG90YWwtdGFibGUgdGg6bGFzdC1jaGlsZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4OyB9XG5cbi5tYXJrcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItc3BhY2luZzogMDsgfVxuXG4ubWFya3MgdGhlYWQgdHIgdGgge1xuICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNkZWRlZGU7IH1cblxuLm1hcmtzIHRib2R5IHRyIHRkIHtcbiAgcGFkZGluZzogOHB4IDEwcHg7IH1cblxuLm1hcmtzLmJvcmRlci10ciB0aCxcbi5tYXJrcy5ib3JkZXItdHIgdGQge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAvKiB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICovIH1cblxuLm1hcmtzLmJvcmRlci10ciB0ZCAuY29udGVudCB7XG4gIHdpZHRoOiAxMnB4O1xuICBtYXJnaW46IGF1dG87XG4gIG92ZXJmbG93OiB2aXNpYmxlOyB9XG5cbi5tLXctMjAwIHtcbiAgLyogd2lkdGg6IDIwMHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDIwMHB4OyAqL1xuICBtaW4td2lkdGg6IDIwMHB4OyB9XG5cbi5tYXJrcy5ib3JkZXItdHIgdGg6bGFzdC1jaGlsZCxcbi5tYXJrcy5ib3JkZXItdHIgdGQ6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1yaWdodDogbm9uZTsgfVxuXG4uaGVhZGVyLXRpdGxlMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZWRlZGU7XG4gIHBhZGRpbmc6IDhweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDsgfVxuXG4udGVybXMge1xuICBwYWRkaW5nOiAyMHB4IDU1cHggNXB4OyB9XG5cbi50ZW0tdGFibGUge1xuICBwYWRkaW5nOiAwcHggMTMlOyB9XG5cbi5mZWUtcmVjaXB0IHRyIHRoLCAuZmVlLXJlY2lwdCB0ciB0ZCB7XG4gIG1heC13aWR0aDogMjAwcHg7IH1cblxuLnNjcm9sbC10YWIge1xuICBvdmVyZmxvdzogYXV0bztcbiAgb3ZlcmZsb3c6IG92ZXJsYXk7IH1cblxuLnN0YWZmLWF0dGVuZGVuY2UgdGgge1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICBtYXgtd2lkdGg6IDIwMHB4OyB9XG4iLCJcbkBpbXBvcnQgXCIuLi9jb21tb24tcmVwb3J0cy5zY3NzXCI7XG5cbi5zY3JvbGwtdGFie1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIG92ZXJmbG93OiBvdmVybGF5O1xufVxuLnN0YWZmLWF0dGVuZGVuY2UgdGh7XG5taW4td2lkdGg6IDEwMHB4O1xubWF4LXdpZHRoOiAyMDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/reports/staff-attnd-report/staff-attnd-report.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/reports/staff-attnd-report/staff-attnd-report.component.ts ***!
  \************************************************************************************/
/*! exports provided: StaffAttndReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffAttndReportComponent", function() { return StaffAttndReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_service_reports_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/service/reports/reports.service */ "./src/app/service/reports/reports.service.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_shared_custom_date_adaptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/custom-date-adaptor */ "./src/app/shared/custom-date-adaptor.ts");
/* harmony import */ var saturn_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! saturn-datepicker */ "./node_modules/saturn-datepicker/fesm5/saturn-datepicker.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");









var StaffAttndReportComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StaffAttndReportComponent, _super);
    function StaffAttndReportComponent(schoolReportsService, commonService) {
        var _this = _super.call(this) || this;
        _this.schoolReportsService = schoolReportsService;
        _this.commonService = commonService;
        _this.objectKeys = Object.keys;
        return _this;
    }
    StaffAttndReportComponent.prototype.ngOnInit = function () {
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            fromDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            toDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required)
        });
    };
    StaffAttndReportComponent.prototype.getStaffAttendanceReport = function () {
        var _this = this;
        if (this.searchForm.invalid) {
            return;
        }
        var beginDate = null;
        var endDate = null;
        if (this.searchForm.value.fromDate != null) {
            beginDate = this.searchForm.value.fromDate.format(app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].API_DATE_PATTERN);
        }
        if (this.searchForm.value.toDate != null) {
            endDate = this.searchForm.value.toDate.format(app_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].API_DATE_PATTERN);
        }
        this.schoolReportsService.staffAttendanceSummaryReport(beginDate, endDate).subscribe(function (res) {
            _this.resultApplicationReports = res.staffAttendanceSummary;
        });
    };
    StaffAttndReportComponent.prototype.generateReport = function (rp) {
        if (rp === 'generatePdfReport') {
            this.schoolReportsService.generatePdf(document.getElementById('admitted-std'), app_app_constants__WEBPACK_IMPORTED_MODULE_4__["Messages"].STAFF_ATTENDANCE_CSS, 'landscape');
        }
        if (rp === 'generateExcelReport') {
            this.schoolReportsService.exportToExcel('pmt-cor-rpt', 'payment_correction_report');
        }
    };
    StaffAttndReportComponent.prototype.setValidation = function () {
        this.maxDate = new Date(this.searchForm.value.fromDate);
        this.maxDate = new Date(this.maxDate.setFullYear(this.maxDate.getFullYear() + 1));
    };
    StaffAttndReportComponent.prototype.reset = function () {
        this.resultApplicationReports = null;
        this.searchForm.reset();
    };
    StaffAttndReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-staff-attnd-report',
            template: __webpack_require__(/*! ./staff-attnd-report.component.html */ "./src/app/modules/reports/staff-attnd-report/staff-attnd-report.component.html"),
            providers: [{ provide: saturn_datepicker__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"], useClass: app_shared_custom_date_adaptor__WEBPACK_IMPORTED_MODULE_6__["CustomDateAdapter"], deps: [saturn_datepicker__WEBPACK_IMPORTED_MODULE_7__["MAT_DATE_LOCALE"]] },
                { provide: saturn_datepicker__WEBPACK_IMPORTED_MODULE_7__["MAT_DATE_FORMATS"], useValue: app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_8__["AF_DATE_FORMATS"] }],
            styles: [__webpack_require__(/*! ./staff-attnd-report.component.scss */ "./src/app/modules/reports/staff-attnd-report/staff-attnd-report.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_reports_reports_service__WEBPACK_IMPORTED_MODULE_2__["SchoolReportsService"], app_service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
    ], StaffAttndReportComponent);
    return StaffAttndReportComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_8__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/reports/student-fee-receipt/student-fee-receipt.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/reports/student-fee-receipt/student-fee-receipt.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayout.gt-sm=\"row wrap\" fxLayoutAlign=\"center center\" class=\"px-24 pt-20 pb-12\">\n  <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex.gt-sm=\"50\" fxFlex=\"100\" class=\"pr-sm-20\">\n    <mat-label #studentId translate>Student</mat-label>\n    <input required #studentName matInput placeholder=\"Search Student\" [formControl]=\"studentSearch\"\n      aria-label=\"StudentName\" matInput [matAutocomplete]=\"studentNameSearch\">\n    <mat-icon class=\"grey-400-fg\" matSuffix>search</mat-icon>\n    <mat-autocomplete #studentNameSearch=\"matAutocomplete\" (optionSelected)='getSelectedStudent($event.option.value)'\n      [displayWith]=\"displayFn\">\n      <mat-option *ngFor=\"let option of filterdStudents\" [value]=\"option\">\n        {{option.studentName}}\n        <span class=\"grey-400-fg\"> {{option.currentClassName}} {{option.currentSectionName}} </span>\n      </mat-option>\n    </mat-autocomplete>\n    <mat-error>\n      <app-validation [labelName]='studentId.innerText' [validationControl]=\"studentSearch\" [doValidate]=\"true\">\n      </app-validation>\n    </mat-error>\n  </mat-form-field>\n  <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"mr-20 pb-20\">\n    <button mat-raised-button translate color=\"primary\" class=\"text-uppercase\" (click)=\"reset()\" type=\"reset\">\n      Reset\n    </button>\n  </div>\n</div>\n\n<div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"px-32 py-12\" *ngIf=\"resultApplicationReports\">\n  <button mat-stroked-button class=\"mr-12\" (click)=\"generateReport('generatePdfReport')\">\n    <mat-icon class=\"mr-4\">save_alt</mat-icon>Download PDF\n  </button>\n</div>\n<div class='invoice-container' *ngIf=\"resultApplicationReports\" id=\"admitted-std\" style=\"padding: 25px; padding-top: 0px;\">\n  <span class=\"dark-theme-color\" style=\"color:#fff\">A</span>\n  <div class='b flex-d-c invoice-body' style='overflow: hidden; '>\n    <h3 class=\"text-center text-uppercase\">Fee Receipt</h3>\n    <div class=\"px-20 mb-20\" style=\"display: flow-root;\">\n      <div class=\"left-align\">\n        <div>Student Name : {{resultApplicationReports.studentName}}</div>\n        <div class=\"py-4\">Admission Number : {{resultApplicationReports.admissionNumber}}</div>\n        <div>Class - Section : {{resultApplicationReports.classSection}}</div>\n      </div>\n      <div class=\"right-align\">\n        <div> Parent Name : {{resultApplicationReports.parentName}}</div>\n        <div class=\"py-4\" *ngIf=\"resultApplicationReports?.studentCategory\">Student Category :\n          {{resultApplicationReports.studentCategory}}</div>\n        <div> Date Generated : {{ date }}</div>\n      </div>\n    </div>\n    <div class=\"px-20 b-t\" style=\"clear: both;\">\n      <h3 class=\"text-center text-uppercase\">Fee Receipt</h3>\n    </div>\n    <div class=\"px-10 scroll-table\">\n      <table class=\"attendance fee-recipt b table-border\">\n        <thead>\n          <tr>\n            <th>Invoice No</th>\n            <th>Fee Term</th>\n            <th>fee Item</th>\n            <th>Fee Amount</th>\n            <th>Discounts </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of resultApplicationReports?.invoiceDetails\">\n            <td>{{item.invoiceInformation.invoiceNumber}} </td>\n            <td>{{item.invoiceInformation.feeTerm}}</td>\n            <td>\n              <div *ngFor=\"let invPerticular of item.invoiceParticulars; let odd = odd\">\n                <div [ngClass]=\"(odd) ? 'py-4': '' \">{{invPerticular.feeType}}</div>\n              </div>\n            </td>\n            <td>\n              <div *ngFor=\"let invPerticular of item.invoiceParticulars; let odd = odd\">\n                <div [ngClass]=\" (odd) ? 'py-4': '' \">{{invPerticular.feeAmount}}</div>\n              </div>\n            </td>\n            <td>\n              <div *ngFor=\"let invPerticular of item.invoiceParticulars; let odd = odd\">\n                <div [ngClass]=\" (odd) ? 'py-4': ''\">{{invPerticular.discount}}</div>\n              </div>\n            </td>\n          </tr>\n\n          <tr>\n            <td style=\"text-align: left;\" class=\"text-left b-t\" colspan=\"3\">Total</td>\n            <td class=\"text-left b-t\">\n              <div>\n                <div>{{resultApplicationReports.studentTotalInvoiceAmount}}</div>\n              </div>\n            </td>\n            <td>\n              <div>-</div>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"px-20\">\n      <h3 class=\"text-center text-uppercase\">Payment Details</h3>\n    </div>\n    <div class=\"px-10 scroll-table\">\n      <table class=\"attendance b\">\n        <thead>\n          <tr>\n            <th>Payment Date</th>\n            <th>Mode</th>\n            <th>Payment details</th>\n            <th>Payment Amount</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let payment of resultApplicationReports?.invoicePayments\">\n            <td>{{payment.expiryDate}}</td>\n            <td>{{payment.paymentMode}}</td>\n            <td>{{payment.paymentDetails}}</td>\n            <td>{{payment.paymentAmount}}</td>\n          </tr>\n          <tr>\n            <td style=\"text-align: left;\" class=\"text-left b-t\" colspan=\"3\">Total</td>\n            <td class=\"text-left b-t\">\n              <div>\n                <div>{{resultApplicationReports.studentTotalPaymentAmount}} </div>\n              </div>\n            </td>\n\n          </tr>\n          <tr>\n            <td style=\"text-align: left;\" class=\"text-left b-t\" colspan=\"3\">Balance</td>\n            <td class=\"text-left b-t\">\n              <div>\n                {{resultApplicationReports.studentTotalBalanceAmount}}\n              </div>\n            </td>\n\n          </tr>\n        </tbody>\n\n      </table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/reports/student-fee-receipt/student-fee-receipt.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/reports/student-fee-receipt/student-fee-receipt.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invoice-container {\n  padding: 0px 25px;\n  margin: 0px auto; }\n\n.b {\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.b-b {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.b-t {\n  border-top: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.b-r {\n  border-right: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.flex {\n  display: -webkit-box;\n  display: flex;\n  display: -webkit-flex; }\n\n.flex-d-c {\n  flex-direction: -webkit-column;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n\n.flex-d-r {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row; }\n\n.flex-a {\n  -webkit-place-content: center center;\n  place-content: center center;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.align-item-center {\n  -webkit-box-align: center;\n          align-items: center; }\n\n.w-50-p {\n  width: 50%; }\n\n.w-100-p {\n  width: 100%; }\n\n.p-20 {\n  padding: 20px; }\n\n.py-4 {\n  padding: 4px 0px; }\n\n.px-20 {\n  padding: 0px 20px; }\n\n.pt-30 {\n  padding-top: 30px; }\n\n.pt-20 {\n  padding-top: 20px; }\n\n.text-left {\n  text-align: left; }\n\n.text-right {\n  text-align: right; }\n\n.text-center {\n  text-align: center; }\n\n.text-uppercase {\n  text-transform: uppercase; }\n\n.result-h {\n  font-size: 20px;\n  padding: 20px;\n  margin: 2px; }\n\n.result-h span {\n  width: 80px;\n  display: inline-block; }\n\n.h2-c {\n  font-size: 20px; }\n\n.pr-8 {\n  padding-right: 8px; }\n\n.pb-20 {\n  padding-bottom: 20px; }\n\n.mb-20 {\n  margin-bottom: 20px; }\n\n.p-10 {\n  padding: 10px; }\n\n.pr-4rem {\n  padding-right: 4rem; }\n\n.right-align {\n  float: right; }\n\n.left-align {\n  float: left; }\n\n.logo-img {\n  max-width: 200px;\n  max-height: 100px; }\n\n.text-lg {\n  font-size: 25px; }\n\n.school-stamp {\n  width: 130px;\n  min-width: 130px;\n  max-width: 130px;\n  height: 130px;\n  border: 1px solid;\n  border-radius: 100%;\n  position: relative; }\n\n.school-stamp::after {\n  position: absolute;\n  top: 36%;\n  left: 0;\n  width: 100%;\n  content: \"School seal Logo\"; }\n\n.top-space {\n  padding-top: 1.4rem; }\n\n.order-list .list {\n  /* display:flex; \n        display: -webkit-flex; */\n  padding-right: 20px;\n  padding-bottom: 25px;\n  font-size: 18px;\n  list-style-type: decimal;\n  display: inline-block; }\n\n.order-list .list .text {\n  white-space: pre;\n  overflow: hidden; }\n\n.order-list .list .title {\n  white-space: nowrap;\n  margin-right: 20px;\n  display: inline-block; }\n\n.single-line {\n  width: 1050px;\n  white-space: nowrap;\n  overflow: hidden;\n  padding-top: 15px; }\n\n.order-list .list .in-words {\n  padding-right: 5px; }\n\n.main-title {\n  background: #5f5f5f;\n  display: list-item;\n  color: #fff; }\n\n.attendance {\n  width: 100%;\n  border-spacing: 0;\n  border-collapse: collapse; }\n\n.attendance thead {\n  background: #5f5f5f;\n  color: #fff; }\n\n.attendance tr th,\n.attendance tr td {\n  padding: 15px 0px;\n  text-align: center; }\n\n.attendance2 {\n  width: 100%;\n  border-spacing: 0;\n  border-collapse: collapse; }\n\n.attendance2 thead {\n  background: #5f5f5f;\n  color: #fff; }\n\n.attendance2 tr th {\n  padding: 15px 0px;\n  text-align: center; }\n\n.attendance2 tr td {\n  padding: 5px 0px; }\n\n.attendance2 tr td:first-child {\n  padding-left: 10px; }\n\n.attendance2 tr td:not(:first-child) {\n  text-align: center; }\n\n.attendance2 tr:nth-child(3n) {\n  border-bottom: 1px solid; }\n\n.outer-line {\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  margin: 5px 30px; }\n\n.outer-line .helper-table:first-child {\n  margin-top: 0px;\n  border-top: none; }\n\n.helper-table {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n  margin-bottom: 0px;\n  margin-top: 20px;\n  padding: 9px;\n  width: 100%;\n  border-top: 1px solid rgba(0, 0, 0, 0.3); }\n\n.total-table {\n  width: 100%;\n  border-top: 1px solid rgba(0, 0, 0, 0.3);\n  padding: 13px;\n  margin-top: 20px; }\n\n.total-table th:first-child {\n  text-align: left;\n  padding-left: 20px;\n  max-width: 55px; }\n\n.total-table th:last-child {\n  text-align: right;\n  padding-right: 20px; }\n\n.marks {\n  width: 100%;\n  border-spacing: 0; }\n\n.marks thead tr th {\n  padding: 10px 10px;\n  background: #dedede; }\n\n.marks tbody tr td {\n  padding: 8px 10px; }\n\n.marks.border-tr th,\n.marks.border-tr td {\n  border-right: 1px solid rgba(0, 0, 0, 0.3);\n  text-align: center;\n  font-size: 18px;\n  word-break: break-word;\n  /* text-transform: uppercase */ }\n\n.marks.border-tr td .content {\n  width: 12px;\n  margin: auto;\n  overflow: visible; }\n\n.m-w-200 {\n  /* width: 200px;\n        max-width: 200px; */\n  min-width: 200px; }\n\n.marks.border-tr th:last-child,\n.marks.border-tr td:last-child {\n  border-right: none; }\n\n.header-title2 {\n  background-color: #dedede;\n  padding: 8px;\n  font-size: 18px;\n  font-weight: bold; }\n\n.terms {\n  padding: 20px 55px 5px; }\n\n.tem-table {\n  padding: 0px 13%; }\n\n.fee-recipt tr th, .fee-recipt tr td {\n  max-width: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvcmVwb3J0cy9jb21tb24tcmVwb3J0cy5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3JlcG9ydHMvc3R1ZGVudC1mZWUtcmVjZWlwdC9zdHVkZW50LWZlZS1yZWNlaXB0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUlwQjtFQUNJLG9DQUFvQztFQUNwQyx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSwyQ0FBMkM7RUFDM0MseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksd0NBQXdDO0VBQ3hDLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLDBDQUEwQztFQUMxQyx5QkFDSixFQUFBOztBQUVBO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksOEJBQThCO0VBQzlCLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksOEJBQW1CO0VBQW5CLDZCQUFtQjtVQUFuQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxvQ0FBb0M7RUFDcEMsNEJBQTRCO0VBRTVCLHlCQUFtQjtVQUFuQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSx5QkFBbUI7VUFBbkIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksVUFBVSxFQUFBOztBQUdkO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLHlCQUF5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LEVBQUE7O0FBR3BCO0VBQ0ksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3JlcG9ydHMvc3R1ZGVudC1mZWUtcmVjZWlwdC9zdHVkZW50LWZlZS1yZWNlaXB0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmludm9pY2UtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwcHggMjVweDtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgXG59XG5cbi5iIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zMCk7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxuLmItYiB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMwKTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG4uYi10IHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzApO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbi5iLXIge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMwKTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlXG59XG5cbi5mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbn1cblxuLmZsZXgtZC1jIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogLXdlYmtpdC1jb2x1bW47XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmZsZXgtZC1yIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uZmxleC1hIHtcbiAgICAtd2Via2l0LXBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFsaWduLWl0ZW0tY2VudGVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udy01MC1wIHtcbiAgICB3aWR0aDogNTAlO1xufVxuXG4udy0xMDAtcCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5wLTIwIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG4ucHktNCB7XG4gICAgcGFkZGluZzogNHB4IDBweDtcbn1cblxuLnB4LTIwIHtcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcbn1cblxuLnB0LTMwIHtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbn1cbi5wdC0yMHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLnRleHQtbGVmdCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnRleHQtcmlnaHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4udGV4dC1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRleHQtdXBwZXJjYXNlIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ucmVzdWx0LWgge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG1hcmdpbjogMnB4O1xufVxuXG4ucmVzdWx0LWggc3BhbiB7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uaDItYyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ucHItOCB7XG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xuICAgIDtcbn1cblxuLnBiLTIwIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICA7XG59XG5cbi5tYi0yMCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnAtMTAge1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5wci00cmVtIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cmVtO1xufVxuXG4ucmlnaHQtYWxpZ24ge1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuLmxlZnQtYWxpZ24ge1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4ubG9nby1pbWcge1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgbWF4LWhlaWdodDogMTAwcHhcbn1cblxuLnRleHQtbGcge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLnNjaG9vbC1zdGFtcCB7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIG1pbi13aWR0aDogMTMwcHg7XG4gICAgbWF4LXdpZHRoOiAxMzBweDtcbiAgICBoZWlnaHQ6IDEzMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2Nob29sLXN0YW1wOjphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzYlO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29udGVudDogXCJTY2hvb2wgc2VhbCBMb2dvXCI7XG59XG5cbi50b3Atc3BhY2Uge1xuICAgIHBhZGRpbmctdG9wOiAxLjRyZW07XG59XG5cbi5vcmRlci1saXN0IC5saXN0IHtcbiAgICAvKiBkaXNwbGF5OmZsZXg7IFxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7ICovXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBkZWNpbWFsO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLm9yZGVyLWxpc3QgLmxpc3QgLnRleHQge1xuICAgIHdoaXRlLXNwYWNlOiBwcmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlblxufVxuXG4ub3JkZXItbGlzdCAubGlzdCAudGl0bGUge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrXG59XG5cbi5zaW5nbGUtbGluZSB7XG4gICAgd2lkdGg6IDEwNTBweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZy10b3A6IDE1cHhcbn1cblxuLm9yZGVyLWxpc3QgLmxpc3QgLmluLXdvcmRzIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5tYWluLXRpdGxlIHtcbiAgICBiYWNrZ3JvdW5kOiAjNWY1ZjVmO1xuICAgIGRpc3BsYXk6IGxpc3QtaXRlbTtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLmF0dGVuZGFuY2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2Vcbn1cblxuLmF0dGVuZGFuY2UgdGhlYWQge1xuICAgIGJhY2tncm91bmQ6ICM1ZjVmNWY7XG4gICAgY29sb3I6ICNmZmY7XG59XG4uYXR0ZW5kYW5jZSB0ciB0aCxcbi5hdHRlbmRhbmNlIHRyIHRkIHtcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYXR0ZW5kYW5jZTIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2Vcbn1cblxuLmF0dGVuZGFuY2UyIHRoZWFkIHtcbiAgICBiYWNrZ3JvdW5kOiAjNWY1ZjVmO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuLmF0dGVuZGFuY2UyIHRyIHRoe1xuICAgIHBhZGRpbmc6IDE1cHggMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hdHRlbmRhbmNlMiB0ciB0ZCB7XG4gICAgcGFkZGluZzogNXB4IDBweDsgICAgICAgICBcbn1cbi5hdHRlbmRhbmNlMiB0ciB0ZDpmaXJzdC1jaGlsZCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4OyAgICAgIFxufVxuLmF0dGVuZGFuY2UyIHRyIHRkOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYXR0ZW5kYW5jZTIgdHI6bnRoLWNoaWxkKDNuKSB7IFxuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkO1xuICAgfVxuXG4gICAub3V0ZXItbGluZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzApO1xuICAgIG1hcmdpbjogNXB4IDMwcHg7XG59XG4ub3V0ZXItbGluZSAuaGVscGVyLXRhYmxlOmZpcnN0LWNoaWxke1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBib3JkZXItdG9wOiBub25lO1xufVxuXG4uaGVscGVyLXRhYmxlIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzApO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHBhZGRpbmc6IDlweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzApO1xufVxuXG4udG90YWwtdGFibGV7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMwKTsgXG4gICAgcGFkZGluZzogMTNweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4OyAgXG59XG4udG90YWwtdGFibGUgdGg6Zmlyc3QtY2hpbGR7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgbWF4LXdpZHRoOiA1NXB4O1xufVxuLnRvdGFsLXRhYmxlIHRoOmxhc3QtY2hpbGR7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cbiAubWFya3Mge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gICAgfVxuICAgIFxuICAgIC5tYXJrcyB0aGVhZCB0ciB0aCB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICAgICAgO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZGVkZWRlO1xuICAgIH1cbiAgICBcbiAgICAubWFya3MgdGJvZHkgdHIgdGQge1xuICAgICAgICBwYWRkaW5nOiA4cHggMTBweFxuICAgIH1cbiAgICBcbiAgICAubWFya3MuYm9yZGVyLXRyIHRoLFxuICAgIC5tYXJrcy5ib3JkZXItdHIgdGQge1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zMCk7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgICAgICAvKiB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICovXG4gICAgfVxuICAgIFxuICAgIC5tYXJrcy5ib3JkZXItdHIgdGQgLmNvbnRlbnQge1xuICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZVxuICAgIH1cbiAgICBcbiAgICAubS13LTIwMCB7XG4gICAgICAgIC8qIHdpZHRoOiAyMDBweDtcbiAgICAgICAgbWF4LXdpZHRoOiAyMDBweDsgKi9cbiAgICAgICAgbWluLXdpZHRoOiAyMDBweFxuICAgIH0gXG4gICAgXG4gICAgLm1hcmtzLmJvcmRlci10ciB0aDpsYXN0LWNoaWxkLFxuICAgIC5tYXJrcy5ib3JkZXItdHIgdGQ6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZVxuICAgIH1cbiAgICAuaGVhZGVyLXRpdGxlMiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RlZGVkZTtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkXG59XG4udGVybXN7XG4gICAgcGFkZGluZzogMjBweCA1NXB4IDVweDtcbn1cbiAgICAudGVtLXRhYmxle1xuICAgICAgICBwYWRkaW5nOiAwcHggMTMlO1xuICAgIH1cblxuICAgIC5mZWUtcmVjaXB0IHRyIHRoLCAuZmVlLXJlY2lwdCB0ciB0ZHtcbiAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICB9IiwiLmludm9pY2UtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMHB4IDI1cHg7XG4gIG1hcmdpbjogMHB4IGF1dG87IH1cblxuLmIge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IH1cblxuLmItYiB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IH1cblxuLmItdCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IH1cblxuLmItciB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgfVxuXG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDsgfVxuXG4uZmxleC1kLWMge1xuICBmbGV4LWRpcmVjdGlvbjogLXdlYmtpdC1jb2x1bW47XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cblxuLmZsZXgtZC1yIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdzsgfVxuXG4uZmxleC1hIHtcbiAgLXdlYmtpdC1wbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cblxuLmFsaWduLWl0ZW0tY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuXG4udy01MC1wIHtcbiAgd2lkdGg6IDUwJTsgfVxuXG4udy0xMDAtcCB7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi5wLTIwIHtcbiAgcGFkZGluZzogMjBweDsgfVxuXG4ucHktNCB7XG4gIHBhZGRpbmc6IDRweCAwcHg7IH1cblxuLnB4LTIwIHtcbiAgcGFkZGluZzogMHB4IDIwcHg7IH1cblxuLnB0LTMwIHtcbiAgcGFkZGluZy10b3A6IDMwcHg7IH1cblxuLnB0LTIwIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7IH1cblxuLnRleHQtbGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cblxuLnRleHQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDsgfVxuXG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLnRleHQtdXBwZXJjYXNlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuXG4ucmVzdWx0LWgge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogMnB4OyB9XG5cbi5yZXN1bHQtaCBzcGFuIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuXG4uaDItYyB7XG4gIGZvbnQtc2l6ZTogMjBweDsgfVxuXG4ucHItOCB7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDsgfVxuXG4ucGItMjAge1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDsgfVxuXG4ubWItMjAge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XG5cbi5wLTEwIHtcbiAgcGFkZGluZzogMTBweDsgfVxuXG4ucHItNHJlbSB7XG4gIHBhZGRpbmctcmlnaHQ6IDRyZW07IH1cblxuLnJpZ2h0LWFsaWduIHtcbiAgZmxvYXQ6IHJpZ2h0OyB9XG5cbi5sZWZ0LWFsaWduIHtcbiAgZmxvYXQ6IGxlZnQ7IH1cblxuLmxvZ28taW1nIHtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgbWF4LWhlaWdodDogMTAwcHg7IH1cblxuLnRleHQtbGcge1xuICBmb250LXNpemU6IDI1cHg7IH1cblxuLnNjaG9vbC1zdGFtcCB7XG4gIHdpZHRoOiAxMzBweDtcbiAgbWluLXdpZHRoOiAxMzBweDtcbiAgbWF4LXdpZHRoOiAxMzBweDtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuXG4uc2Nob29sLXN0YW1wOjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNiU7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBjb250ZW50OiBcIlNjaG9vbCBzZWFsIExvZ29cIjsgfVxuXG4udG9wLXNwYWNlIHtcbiAgcGFkZGluZy10b3A6IDEuNHJlbTsgfVxuXG4ub3JkZXItbGlzdCAubGlzdCB7XG4gIC8qIGRpc3BsYXk6ZmxleDsgXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDsgKi9cbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGlzdC1zdHlsZS10eXBlOiBkZWNpbWFsO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cblxuLm9yZGVyLWxpc3QgLmxpc3QgLnRleHQge1xuICB3aGl0ZS1zcGFjZTogcHJlO1xuICBvdmVyZmxvdzogaGlkZGVuOyB9XG5cbi5vcmRlci1saXN0IC5saXN0IC50aXRsZSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG5cbi5zaW5nbGUtbGluZSB7XG4gIHdpZHRoOiAxMDUwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmctdG9wOiAxNXB4OyB9XG5cbi5vcmRlci1saXN0IC5saXN0IC5pbi13b3JkcyB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDsgfVxuXG4ubWFpbi10aXRsZSB7XG4gIGJhY2tncm91bmQ6ICM1ZjVmNWY7XG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcbiAgY29sb3I6ICNmZmY7IH1cblxuLmF0dGVuZGFuY2Uge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IH1cblxuLmF0dGVuZGFuY2UgdGhlYWQge1xuICBiYWNrZ3JvdW5kOiAjNWY1ZjVmO1xuICBjb2xvcjogI2ZmZjsgfVxuXG4uYXR0ZW5kYW5jZSB0ciB0aCxcbi5hdHRlbmRhbmNlIHRyIHRkIHtcbiAgcGFkZGluZzogMTVweCAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4uYXR0ZW5kYW5jZTIge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IH1cblxuLmF0dGVuZGFuY2UyIHRoZWFkIHtcbiAgYmFja2dyb3VuZDogIzVmNWY1ZjtcbiAgY29sb3I6ICNmZmY7IH1cblxuLmF0dGVuZGFuY2UyIHRyIHRoIHtcbiAgcGFkZGluZzogMTVweCAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4uYXR0ZW5kYW5jZTIgdHIgdGQge1xuICBwYWRkaW5nOiA1cHggMHB4OyB9XG5cbi5hdHRlbmRhbmNlMiB0ciB0ZDpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctbGVmdDogMTBweDsgfVxuXG4uYXR0ZW5kYW5jZTIgdHIgdGQ6bm90KDpmaXJzdC1jaGlsZCkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLmF0dGVuZGFuY2UyIHRyOm50aC1jaGlsZCgzbikge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7IH1cblxuLm91dGVyLWxpbmUge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIG1hcmdpbjogNXB4IDMwcHg7IH1cblxuLm91dGVyLWxpbmUgLmhlbHBlci10YWJsZTpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgYm9yZGVyLXRvcDogbm9uZTsgfVxuXG4uaGVscGVyLXRhYmxlIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwYWRkaW5nOiA5cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpOyB9XG5cbi50b3RhbC10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBwYWRkaW5nOiAxM3B4O1xuICBtYXJnaW4tdG9wOiAyMHB4OyB9XG5cbi50b3RhbC10YWJsZSB0aDpmaXJzdC1jaGlsZCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgbWF4LXdpZHRoOiA1NXB4OyB9XG5cbi50b3RhbC10YWJsZSB0aDpsYXN0LWNoaWxkIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7IH1cblxuLm1hcmtzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1zcGFjaW5nOiAwOyB9XG5cbi5tYXJrcyB0aGVhZCB0ciB0aCB7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgYmFja2dyb3VuZDogI2RlZGVkZTsgfVxuXG4ubWFya3MgdGJvZHkgdHIgdGQge1xuICBwYWRkaW5nOiA4cHggMTBweDsgfVxuXG4ubWFya3MuYm9yZGVyLXRyIHRoLFxuLm1hcmtzLmJvcmRlci10ciB0ZCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIC8qIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgKi8gfVxuXG4ubWFya3MuYm9yZGVyLXRyIHRkIC5jb250ZW50IHtcbiAgd2lkdGg6IDEycHg7XG4gIG1hcmdpbjogYXV0bztcbiAgb3ZlcmZsb3c6IHZpc2libGU7IH1cblxuLm0tdy0yMDAge1xuICAvKiB3aWR0aDogMjAwcHg7XG4gICAgICAgIG1heC13aWR0aDogMjAwcHg7ICovXG4gIG1pbi13aWR0aDogMjAwcHg7IH1cblxuLm1hcmtzLmJvcmRlci10ciB0aDpsYXN0LWNoaWxkLFxuLm1hcmtzLmJvcmRlci10ciB0ZDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXJpZ2h0OiBub25lOyB9XG5cbi5oZWFkZXItdGl0bGUyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZGVkZTtcbiAgcGFkZGluZzogOHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XG5cbi50ZXJtcyB7XG4gIHBhZGRpbmc6IDIwcHggNTVweCA1cHg7IH1cblxuLnRlbS10YWJsZSB7XG4gIHBhZGRpbmc6IDBweCAxMyU7IH1cblxuLmZlZS1yZWNpcHQgdHIgdGgsIC5mZWUtcmVjaXB0IHRyIHRkIHtcbiAgbWF4LXdpZHRoOiAyMDBweDsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/reports/student-fee-receipt/student-fee-receipt.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/reports/student-fee-receipt/student-fee-receipt.component.ts ***!
  \**************************************************************************************/
/*! exports provided: StudentFeeReceiptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentFeeReceiptComponent", function() { return StudentFeeReceiptComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_service_reports_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/service/reports/reports.service */ "./src/app/service/reports/reports.service.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_service_academic_service_api_student_database_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/academic-service/api/student-database.service */ "./src/app/service/academic-service/api/student-database.service.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");








var StudentFeeReceiptComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StudentFeeReceiptComponent, _super);
    function StudentFeeReceiptComponent(schoolReportsService, studentService, cd, commonService) {
        var _this = _super.call(this) || this;
        _this.schoolReportsService = schoolReportsService;
        _this.studentService = studentService;
        _this.cd = cd;
        _this.commonService = commonService;
        _this.studentSearch = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
        return _this;
    }
    StudentFeeReceiptComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.studentSearch.valueChanges.debounceTime(200).subscribe(function (name) {
            name = typeof (name) === 'string' ? name.trim() : name;
            if (name !== null && name.length >= 3) {
                _this.filterdStudents = [];
                _this.studentService.studentNamesBaseOnAcademicSession(parseInt(_this.getTokenParam('_as'), 10), null, null, null, name).subscribe(function (res) {
                    _this.filterdStudents = (res.studentsList.length > 0) ? res.studentsList : [];
                    _this.cd.detectChanges();
                });
            }
            else {
                _this.filterdStudents = [];
            }
        });
    };
    StudentFeeReceiptComponent.prototype.generateReport = function (rp) {
        if (rp === 'generatePdfReport') {
            this.schoolReportsService.generatePdf(document.getElementById('admitted-std'), app_app_constants__WEBPACK_IMPORTED_MODULE_3__["Messages"].STUDENT_RECEIPT_CSS);
        }
        if (rp === 'generateExcelReport') {
            this.schoolReportsService.exportToExcel('adm-report', 'adm_sum_report');
        }
    };
    StudentFeeReceiptComponent.prototype.getSelectedStudent = function (data) {
        var _this = this;
        this.schoolReportsService.studentFeeReceipts(data.id).subscribe(function (res) {
            _this.resultApplicationReports = res;
            _this.resultApplicationReports.invoicePayments.forEach(function (pmt) {
                pmt.expiryDate = (pmt.expiryDate == null) ? null : _this.commonService.customDateFormat(pmt.expiryDate, _this.getSchoolDateFormat()).date;
            });
        });
    };
    StudentFeeReceiptComponent.prototype.displayFn = function (data) {
        return data ? data.studentName : undefined;
    };
    StudentFeeReceiptComponent.prototype.reset = function () {
        this.resultApplicationReports = null;
        this.studentSearch.reset();
    };
    StudentFeeReceiptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-fee-receipt',
            template: __webpack_require__(/*! ./student-fee-receipt.component.html */ "./src/app/modules/reports/student-fee-receipt/student-fee-receipt.component.html"),
            styles: [__webpack_require__(/*! ./student-fee-receipt.component.scss */ "./src/app/modules/reports/student-fee-receipt/student-fee-receipt.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_reports_reports_service__WEBPACK_IMPORTED_MODULE_2__["SchoolReportsService"], app_service_academic_service_api_student_database_service__WEBPACK_IMPORTED_MODULE_6__["StudentDatabaseService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            app_service_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]])
    ], StudentFeeReceiptComponent);
    return StudentFeeReceiptComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_5__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/reports/students-attendance-report/students-attendance-report.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/reports/students-attendance-report/students-attendance-report.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"searchForm\">\n\n    <div fxLayout=\"column\" fxLayout.gt-sm=\"row wrap\" fxLayoutAlign=\"center center\" class=\"px-24 pt-20\">\n        <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"pr-sm-20\">\n            <mat-label translate #board>Board</mat-label>\n            <mat-select required (selectionChange)=\"onBoardChange($event)\" formControlName=\"boardId\">\n                <mat-option *ngFor=\"let option of availableSchoolBoards\" [value]=\"option?.value\">\n                    {{ option?.label }}</mat-option>\n            </mat-select>\n            <mat-error>\n                <app-validation [labelName]='board.innerText' [validationControl]=\"searchForm.controls.boardId\"\n                    [doValidate]=\"true\">\n                </app-validation>\n            </mat-error>\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"pr-sm-20\">\n            <mat-label translate #class>Class</mat-label>\n            <mat-select required (selectionChange)=\"onClassChange($event)\" formControlName=\"classId\">\n                <mat-option *ngFor=\"let option of availableClasses\" [value]=\"option?.value\">\n                    {{ option?.label }}</mat-option>\n            </mat-select>\n            <mat-error>\n                <app-validation [labelName]='class.innerText' [validationControl]=\"searchForm.controls.classId\"\n                    [doValidate]=\"true\">\n                </app-validation>\n            </mat-error>\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"33.3\">\n            <mat-label translate #sections>Sections</mat-label>\n            <mat-select required formControlName=\"sectionId\">\n                <mat-option *ngFor=\"let option of availableSections\" [value]=\"option?.value\">\n                    {{ option?.label }}</mat-option>\n            </mat-select>\n            <mat-error>\n                <app-validation [labelName]='sections.innerText' [validationControl]=\"searchForm.controls.sectionId\"\n                    [doValidate]=\"true\">\n                </app-validation>\n            </mat-error>\n        </mat-form-field>\n    </div>\n    <div fxLayout=\"column\" fxLayout.gt-sm=\"row\"  class=\"px-24 pt-12 pb-12\">\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"33.3\"\n            class=\"pr-sm-20\">\n            <mat-label #title translate>Minimum Attendace Required</mat-label>\n            <input matInput autocomplete=\"off\" formControlName=\"minimumAttendanceRequired\"\n                (keyup)=\"preventSpace($event,'searchForm','minimumAttendanceRequired')\"\n                (blur)=\"trimTextBoxSpaces('searchForm','minimumAttendanceRequired')\">\n            <mat-error>\n                <app-validation [labelName]='title.innerText'\n                    [validationControl]=\"searchForm.controls.minimumAttendanceRequired\" [doValidate]=\"true\">\n                </app-validation>\n            </mat-error>\n        </mat-form-field>\n    </div>\n    <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"mr-20 pb-20\">\n        <button mat-raised-button translate color=\"primary\" class=\"text-uppercase\" (click)=\"reset()\" type=\"reset\">\n            Reset\n        </button>\n        <button type=\"submit\" mat-raised-button translate color=\"accent\" class=\"text-uppercase ml-12\"\n            (click)=\"filterSearch()\">\n            Search\n        </button>\n    </div>\n</form>\n\n<div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"px-32 py-12\" *ngIf=\"resultApplicationReports\">\n    <button mat-stroked-button class=\"mr-12\" (click)=\"generateReport('generatePdfReport')\">\n        <mat-icon class=\"mr-4\">save_alt</mat-icon>Download PDF\n    </button>\n</div>\n\n<div class='invoice-container' *ngIf=\"resultApplicationReports\" id=\"admitted-std\" style=\"padding: 25px; padding-top: 0px;\">\n    <span class=\"dark-theme-color\" style=\"color:#fff\">A</span>\n    <div class='b flex-d-c invoice-body' style='overflow: hidden; '>\n        <div class=\"flex details mb-20\" style=\" place-content: space-between;\">\n            <div class=\"text-uppercase w-15-p\"><strong>Bord</strong> <br />\n                <small>{{resultApplicationReports?.boradName}}</small></div>\n            <div class=\"text-uppercase w-10-p\"><strong>Class</strong> <br />\n                <small>{{resultApplicationReports?.className}}</small></div>\n            <div class=\"text-uppercase w-10-p\"><strong>Section</strong> <br />\n                <small>{{resultApplicationReports?.sectionName}}</small></div>\n            <div class=\"text-uppercase w-20-p\"><strong>ACADEMIC SESSION</strong> <br />\n                <small>{{acadmicSession?.name}}</small></div>\n            <div class=\"text-uppercase w-15-p\"><strong>From</strong> <br />\n                <small>{{acadmicSession?.startDate | date: 'MMM d, y'}}</small></div>\n            <div class=\"text-uppercase w-10-p\"><strong>To</strong> <br />\n                <small>{{acadmicSession?.endDate | date: 'MMM d, y'}}</small></div>\n            <div class=\"text-uppercase w-20-p\"> <strong>CLASS TEACHER</strong> <br />\n                <small>{{resultApplicationReports?.classTeacherName}}</small></div>\n        </div>\n        <div class=\"p-10 flex\" style=\" place-content: space-between;\">\n            <div class=\"b text-uppercase\" style=\"width: 29%; padding:10px\">CLASS ATTENDANCE SUMMARY REPORT</div>\n            <div class=\"text-uppercase text-center\" style=\"width: 22%;\"><strong>Total Number of Students</strong> <br />\n                <small>{{resultApplicationReports?.studentsCount}}</small></div>\n            <div class=\"text-uppercase text-center\" style=\"width: 22%;\"><strong> MIN ATTENDANCE REQUIRED</strong> <br />\n                <small *ngIf=\"searchForm?.value?.minimumAttendanceRequired\">{{searchForm?.value?.minimumAttendanceRequired}}%</small>\n                <small *ngIf=\"!searchForm?.value?.minimumAttendanceRequired\">-</small></div>\n            <div class=\"text-uppercase text-center\" style=\"width: 23%;\"><strong>STUDENTS NOT MEETING MIN\n                    ATTENDANCE</strong> <br /> <small>{{resultApplicationReports?.detainedStudentsCount}}</small>\n            </div>\n\n        </div>\n        <div class=\"px-20 pt-20 text-uppercase\" style=\"font-size: 18px;\">CLASS ATTENDANCE RATE</div>\n        <div class=\"px-10 scroll-table\">\n            <table class=\"attendance2 b\" style=\"background: #eaeaea;\">\n                <thead>\n                    <tr>\n                        <th></th>\n                        <th style=\"text-transform:capitalize;\"\n                            *ngFor=\"let key of objectKeys(resultApplicationReports?.monthYearWithDays)\">{{key}}</th>\n                    </tr>\n                </thead>\n                <tbody>\n\n                    <tr>\n                        <td>\n                            NUMBER OF WORKING DAYS\n                        </td>\n                        <td *ngFor=\"let key of objectKeys(resultApplicationReports?.monthYearWithDays)\">\n                            {{resultApplicationReports?.monthYearWithDays[key].workingDays}}</td>\n                    </tr>\n                    <tr>\n                        <td>AVERAGE ATTENDANCE RATE </td>\n                        <td *ngFor=\"let key of objectKeys(resultApplicationReports?.monthYearWithDays)\">\n                            {{resultApplicationReports?.monthYearWithDays[key].percentage}}</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        <div class=\"px-20 pt-20 text-uppercase\" style=\"font-size: 18px;\">CLASS ATTENDANCE RATE</div>\n        <div class=\"px-10 scroll-table\">\n            <table class=\"attendance2 b\">\n                <thead>\n                    <tr>\n                        <th>Student</th>\n                        <th style=\"text-transform:capitalize;\"\n                            *ngFor=\"let key of objectKeys(resultApplicationReports?.monthYearWithDays)\">{{key}}</th>\n                    </tr>\n                </thead>\n                <tbody>\n\n                    <tr *ngFor=\"let student of resultApplicationReports?.studentDetails\">\n                        <td>\n                            <div>\n                                <div>{{student.name}}</div>\n                                <div>{{student.admissionNumber}}</div>\n                            </div>\n                        </td>\n\n                        <td *ngFor=\"let key of objectKeys(resultApplicationReports?.monthYearWithDays)\">\n                            {{student.attendance[key].percentage}}%</td>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/reports/students-attendance-report/students-attendance-report.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/reports/students-attendance-report/students-attendance-report.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invoice-container {\n  padding: 0px 25px;\n  margin: 0px auto; }\n\n.b {\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.b-b {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.b-t {\n  border-top: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.b-r {\n  border-right: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.flex {\n  display: -webkit-box;\n  display: flex;\n  display: -webkit-flex; }\n\n.flex-d-c {\n  flex-direction: -webkit-column;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n\n.flex-d-r {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row; }\n\n.flex-a {\n  -webkit-place-content: center center;\n  place-content: center center;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.align-item-center {\n  -webkit-box-align: center;\n          align-items: center; }\n\n.w-50-p {\n  width: 50%; }\n\n.w-100-p {\n  width: 100%; }\n\n.p-20 {\n  padding: 20px; }\n\n.py-4 {\n  padding: 4px 0px; }\n\n.px-20 {\n  padding: 0px 20px; }\n\n.pt-30 {\n  padding-top: 30px; }\n\n.pt-20 {\n  padding-top: 20px; }\n\n.text-left {\n  text-align: left; }\n\n.text-right {\n  text-align: right; }\n\n.text-center {\n  text-align: center; }\n\n.text-uppercase {\n  text-transform: uppercase; }\n\n.result-h {\n  font-size: 20px;\n  padding: 20px;\n  margin: 2px; }\n\n.result-h span {\n  width: 80px;\n  display: inline-block; }\n\n.h2-c {\n  font-size: 20px; }\n\n.pr-8 {\n  padding-right: 8px; }\n\n.pb-20 {\n  padding-bottom: 20px; }\n\n.mb-20 {\n  margin-bottom: 20px; }\n\n.p-10 {\n  padding: 10px; }\n\n.pr-4rem {\n  padding-right: 4rem; }\n\n.right-align {\n  float: right; }\n\n.left-align {\n  float: left; }\n\n.logo-img {\n  max-width: 200px;\n  max-height: 100px; }\n\n.text-lg {\n  font-size: 25px; }\n\n.school-stamp {\n  width: 130px;\n  min-width: 130px;\n  max-width: 130px;\n  height: 130px;\n  border: 1px solid;\n  border-radius: 100%;\n  position: relative; }\n\n.school-stamp::after {\n  position: absolute;\n  top: 36%;\n  left: 0;\n  width: 100%;\n  content: \"School seal Logo\"; }\n\n.top-space {\n  padding-top: 1.4rem; }\n\n.order-list .list {\n  /* display:flex; \n        display: -webkit-flex; */\n  padding-right: 20px;\n  padding-bottom: 25px;\n  font-size: 18px;\n  list-style-type: decimal;\n  display: inline-block; }\n\n.order-list .list .text {\n  white-space: pre;\n  overflow: hidden; }\n\n.order-list .list .title {\n  white-space: nowrap;\n  margin-right: 20px;\n  display: inline-block; }\n\n.single-line {\n  width: 1050px;\n  white-space: nowrap;\n  overflow: hidden;\n  padding-top: 15px; }\n\n.order-list .list .in-words {\n  padding-right: 5px; }\n\n.main-title {\n  background: #5f5f5f;\n  display: list-item;\n  color: #fff; }\n\n.attendance {\n  width: 100%;\n  border-spacing: 0;\n  border-collapse: collapse; }\n\n.attendance thead {\n  background: #5f5f5f;\n  color: #fff; }\n\n.attendance tr th,\n.attendance tr td {\n  padding: 15px 0px;\n  text-align: center; }\n\n.attendance2 {\n  width: 100%;\n  border-spacing: 0;\n  border-collapse: collapse; }\n\n.attendance2 thead {\n  background: #5f5f5f;\n  color: #fff; }\n\n.attendance2 tr th {\n  padding: 15px 0px;\n  text-align: center; }\n\n.attendance2 tr td {\n  padding: 5px 0px; }\n\n.attendance2 tr td:first-child {\n  padding-left: 10px; }\n\n.attendance2 tr td:not(:first-child) {\n  text-align: center; }\n\n.attendance2 tr:nth-child(3n) {\n  border-bottom: 1px solid; }\n\n.outer-line {\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  margin: 5px 30px; }\n\n.outer-line .helper-table:first-child {\n  margin-top: 0px;\n  border-top: none; }\n\n.helper-table {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n  margin-bottom: 0px;\n  margin-top: 20px;\n  padding: 9px;\n  width: 100%;\n  border-top: 1px solid rgba(0, 0, 0, 0.3); }\n\n.total-table {\n  width: 100%;\n  border-top: 1px solid rgba(0, 0, 0, 0.3);\n  padding: 13px;\n  margin-top: 20px; }\n\n.total-table th:first-child {\n  text-align: left;\n  padding-left: 20px;\n  max-width: 55px; }\n\n.total-table th:last-child {\n  text-align: right;\n  padding-right: 20px; }\n\n.marks {\n  width: 100%;\n  border-spacing: 0; }\n\n.marks thead tr th {\n  padding: 10px 10px;\n  background: #dedede; }\n\n.marks tbody tr td {\n  padding: 8px 10px; }\n\n.marks.border-tr th,\n.marks.border-tr td {\n  border-right: 1px solid rgba(0, 0, 0, 0.3);\n  text-align: center;\n  font-size: 18px;\n  word-break: break-word;\n  /* text-transform: uppercase */ }\n\n.marks.border-tr td .content {\n  width: 12px;\n  margin: auto;\n  overflow: visible; }\n\n.m-w-200 {\n  /* width: 200px;\n        max-width: 200px; */\n  min-width: 200px; }\n\n.marks.border-tr th:last-child,\n.marks.border-tr td:last-child {\n  border-right: none; }\n\n.header-title2 {\n  background-color: #dedede;\n  padding: 8px;\n  font-size: 18px;\n  font-weight: bold; }\n\n.terms {\n  padding: 20px 55px 5px; }\n\n.tem-table {\n  padding: 0px 13%; }\n\n.fee-recipt tr th, .fee-recipt tr td {\n  max-width: 200px; }\n\n.scroll-table {\n  overflow: auto;\n  overflow: overlay; }\n\n.attendance2 tr th,\n.attendance2 tr td {\n  min-width: 120px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvcmVwb3J0cy9jb21tb24tcmVwb3J0cy5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3JlcG9ydHMvc3R1ZGVudHMtYXR0ZW5kYW5jZS1yZXBvcnQvc3R1ZGVudHMtYXR0ZW5kYW5jZS1yZXBvcnQuY29tcG9uZW50LnNjc3MiLCIvdmFyL3d3dy9odG1sL3NjaG9vbC1tYW5hZ2VtZW50LWZ1c2Uvc3JjL2FwcC9tb2R1bGVzL3JlcG9ydHMvc3R1ZGVudHMtYXR0ZW5kYW5jZS1yZXBvcnQvc3R1ZGVudHMtYXR0ZW5kYW5jZS1yZXBvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBSXBCO0VBQ0ksb0NBQW9DO0VBQ3BDLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLDJDQUEyQztFQUMzQyx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSx3Q0FBd0M7RUFDeEMseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksMENBQTBDO0VBQzFDLHlCQUNKLEVBQUE7O0FBRUE7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYixxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSw4QkFBOEI7RUFDOUIsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSw4QkFBbUI7RUFBbkIsNkJBQW1CO1VBQW5CLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLG9DQUFvQztFQUNwQyw0QkFBNEI7RUFFNUIseUJBQW1CO1VBQW5CLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLHlCQUFtQjtVQUFuQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxVQUFVLEVBQUE7O0FBR2Q7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksaUJB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OzJCQ3ZEbUI7RUR5RG5CLGdCQUNKLEVBQUE7O0FBRUE7O0VBRUksa0JBQ0osRUFBQTs7QUFDQTtFQUNBLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUNKLEVBQUE7O0FBQ0E7RUFDSSxzQkFBc0IsRUFBQTs7QUFFdEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUVqVnhCO0VBQ0csY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUVwQjs7RUFFRyxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVwb3J0cy9zdHVkZW50cy1hdHRlbmRhbmNlLXJlcG9ydC9zdHVkZW50cy1hdHRlbmRhbmNlLXJlcG9ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnZvaWNlLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMHB4IDI1cHg7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgIFxufVxuXG4uYiB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzApO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbi5iLWIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zMCk7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxuLmItdCB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMwKTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG4uYi1yIHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zMCk7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZVxufVxuXG4uZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG59XG5cbi5mbGV4LWQtYyB7XG4gICAgZmxleC1kaXJlY3Rpb246IC13ZWJraXQtY29sdW1uO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5mbGV4LWQtciB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmZsZXgtYSB7XG4gICAgLXdlYmtpdC1wbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hbGlnbi1pdGVtLWNlbnRlciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnctNTAtcCB7XG4gICAgd2lkdGg6IDUwJTtcbn1cblxuLnctMTAwLXAge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ucC0yMCB7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLnB5LTQge1xuICAgIHBhZGRpbmc6IDRweCAwcHg7XG59XG5cbi5weC0yMCB7XG4gICAgcGFkZGluZzogMHB4IDIwcHg7XG59XG5cbi5wdC0zMCB7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG59XG4ucHQtMjB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi50ZXh0LWxlZnQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi50ZXh0LXJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnRleHQtY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50ZXh0LXVwcGVyY2FzZSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnJlc3VsdC1oIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBtYXJnaW46IDJweDtcbn1cblxuLnJlc3VsdC1oIHNwYW4ge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmgyLWMge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnByLTgge1xuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICA7XG59XG5cbi5wYi0yMCB7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgO1xufVxuXG4ubWItMjAge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5wLTEwIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ucHItNHJlbSB7XG4gICAgcGFkZGluZy1yaWdodDogNHJlbTtcbn1cblxuLnJpZ2h0LWFsaWduIHtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbi5sZWZ0LWFsaWduIHtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuLmxvZ28taW1nIHtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDEwMHB4XG59XG5cbi50ZXh0LWxnIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5zY2hvb2wtc3RhbXAge1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBtaW4td2lkdGg6IDEzMHB4O1xuICAgIG1heC13aWR0aDogMTMwcHg7XG4gICAgaGVpZ2h0OiAxMzBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNjaG9vbC1zdGFtcDo6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDM2JTtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbnRlbnQ6IFwiU2Nob29sIHNlYWwgTG9nb1wiO1xufVxuXG4udG9wLXNwYWNlIHtcbiAgICBwYWRkaW5nLXRvcDogMS40cmVtO1xufVxuXG4ub3JkZXItbGlzdCAubGlzdCB7XG4gICAgLyogZGlzcGxheTpmbGV4OyBcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4OyAqL1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogZGVjaW1hbDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5vcmRlci1saXN0IC5saXN0IC50ZXh0IHtcbiAgICB3aGl0ZS1zcGFjZTogcHJlO1xuICAgIG92ZXJmbG93OiBoaWRkZW5cbn1cblxuLm9yZGVyLWxpc3QgLmxpc3QgLnRpdGxlIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xufVxuXG4uc2luZ2xlLWxpbmUge1xuICAgIHdpZHRoOiAxMDUwcHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmctdG9wOiAxNXB4XG59XG5cbi5vcmRlci1saXN0IC5saXN0IC5pbi13b3JkcyB7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4ubWFpbi10aXRsZSB7XG4gICAgYmFja2dyb3VuZDogIzVmNWY1ZjtcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5hdHRlbmRhbmNlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlXG59XG5cbi5hdHRlbmRhbmNlIHRoZWFkIHtcbiAgICBiYWNrZ3JvdW5kOiAjNWY1ZjVmO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuLmF0dGVuZGFuY2UgdHIgdGgsXG4uYXR0ZW5kYW5jZSB0ciB0ZCB7XG4gICAgcGFkZGluZzogMTVweCAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmF0dGVuZGFuY2UyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlXG59XG5cbi5hdHRlbmRhbmNlMiB0aGVhZCB7XG4gICAgYmFja2dyb3VuZDogIzVmNWY1ZjtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi5hdHRlbmRhbmNlMiB0ciB0aHtcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYXR0ZW5kYW5jZTIgdHIgdGQge1xuICAgIHBhZGRpbmc6IDVweCAwcHg7ICAgICAgICAgXG59XG4uYXR0ZW5kYW5jZTIgdHIgdGQ6Zmlyc3QtY2hpbGQge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDsgICAgICBcbn1cbi5hdHRlbmRhbmNlMiB0ciB0ZDpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmF0dGVuZGFuY2UyIHRyOm50aC1jaGlsZCgzbikgeyBcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZDtcbiAgIH1cblxuICAgLm91dGVyLWxpbmUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMwKTtcbiAgICBtYXJnaW46IDVweCAzMHB4O1xufVxuLm91dGVyLWxpbmUgLmhlbHBlci10YWJsZTpmaXJzdC1jaGlsZHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbn1cblxuLmhlbHBlci10YWJsZSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMwKTtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBwYWRkaW5nOiA5cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMwKTtcbn1cblxuLnRvdGFsLXRhYmxle1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zMCk7IFxuICAgIHBhZGRpbmc6IDEzcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDsgIFxufVxuLnRvdGFsLXRhYmxlIHRoOmZpcnN0LWNoaWxke1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIG1heC13aWR0aDogNTVweDtcbn1cbi50b3RhbC10YWJsZSB0aDpsYXN0LWNoaWxke1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG4gLm1hcmtzIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICAgIH1cbiAgICBcbiAgICAubWFya3MgdGhlYWQgdHIgdGgge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgICAgIDtcbiAgICAgICAgYmFja2dyb3VuZDogI2RlZGVkZTtcbiAgICB9XG4gICAgXG4gICAgLm1hcmtzIHRib2R5IHRyIHRkIHtcbiAgICAgICAgcGFkZGluZzogOHB4IDEwcHhcbiAgICB9XG4gICAgXG4gICAgLm1hcmtzLmJvcmRlci10ciB0aCxcbiAgICAubWFya3MuYm9yZGVyLXRyIHRkIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzApO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICAgICAgLyogdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAqL1xuICAgIH1cbiAgICBcbiAgICAubWFya3MuYm9yZGVyLXRyIHRkIC5jb250ZW50IHtcbiAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGVcbiAgICB9XG4gICAgXG4gICAgLm0tdy0yMDAge1xuICAgICAgICAvKiB3aWR0aDogMjAwcHg7XG4gICAgICAgIG1heC13aWR0aDogMjAwcHg7ICovXG4gICAgICAgIG1pbi13aWR0aDogMjAwcHhcbiAgICB9IFxuICAgIFxuICAgIC5tYXJrcy5ib3JkZXItdHIgdGg6bGFzdC1jaGlsZCxcbiAgICAubWFya3MuYm9yZGVyLXRyIHRkOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmVcbiAgICB9XG4gICAgLmhlYWRlci10aXRsZTIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZWRlZGU7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogYm9sZFxufVxuLnRlcm1ze1xuICAgIHBhZGRpbmc6IDIwcHggNTVweCA1cHg7XG59XG4gICAgLnRlbS10YWJsZXtcbiAgICAgICAgcGFkZGluZzogMHB4IDEzJTtcbiAgICB9XG5cbiAgICAuZmVlLXJlY2lwdCB0ciB0aCwgLmZlZS1yZWNpcHQgdHIgdGR7XG4gICAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgfSIsIi5pbnZvaWNlLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDBweCAyNXB4O1xuICBtYXJnaW46IDBweCBhdXRvOyB9XG5cbi5iIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyB9XG5cbi5iLWIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyB9XG5cbi5iLXQge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyB9XG5cbi5iLXIge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IH1cblxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7IH1cblxuLmZsZXgtZC1jIHtcbiAgZmxleC1kaXJlY3Rpb246IC13ZWJraXQtY29sdW1uO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG5cbi5mbGV4LWQtciB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cblxuLmZsZXgtYSB7XG4gIC13ZWJraXQtcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcbiAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG5cbi5hbGlnbi1pdGVtLWNlbnRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cblxuLnctNTAtcCB7XG4gIHdpZHRoOiA1MCU7IH1cblxuLnctMTAwLXAge1xuICB3aWR0aDogMTAwJTsgfVxuXG4ucC0yMCB7XG4gIHBhZGRpbmc6IDIwcHg7IH1cblxuLnB5LTQge1xuICBwYWRkaW5nOiA0cHggMHB4OyB9XG5cbi5weC0yMCB7XG4gIHBhZGRpbmc6IDBweCAyMHB4OyB9XG5cbi5wdC0zMCB7XG4gIHBhZGRpbmctdG9wOiAzMHB4OyB9XG5cbi5wdC0yMCB7XG4gIHBhZGRpbmctdG9wOiAyMHB4OyB9XG5cbi50ZXh0LWxlZnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XG5cbi50ZXh0LXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cblxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi50ZXh0LXVwcGVyY2FzZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cblxuLnJlc3VsdC1oIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IDJweDsgfVxuXG4ucmVzdWx0LWggc3BhbiB7XG4gIHdpZHRoOiA4MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cblxuLmgyLWMge1xuICBmb250LXNpemU6IDIwcHg7IH1cblxuLnByLTgge1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7IH1cblxuLnBiLTIwIHtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7IH1cblxuLm1iLTIwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxuXG4ucC0xMCB7XG4gIHBhZGRpbmc6IDEwcHg7IH1cblxuLnByLTRyZW0ge1xuICBwYWRkaW5nLXJpZ2h0OiA0cmVtOyB9XG5cbi5yaWdodC1hbGlnbiB7XG4gIGZsb2F0OiByaWdodDsgfVxuXG4ubGVmdC1hbGlnbiB7XG4gIGZsb2F0OiBsZWZ0OyB9XG5cbi5sb2dvLWltZyB7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIG1heC1oZWlnaHQ6IDEwMHB4OyB9XG5cbi50ZXh0LWxnIHtcbiAgZm9udC1zaXplOiAyNXB4OyB9XG5cbi5zY2hvb2wtc3RhbXAge1xuICB3aWR0aDogMTMwcHg7XG4gIG1pbi13aWR0aDogMTMwcHg7XG4gIG1heC13aWR0aDogMTMwcHg7XG4gIGhlaWdodDogMTMwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuLnNjaG9vbC1zdGFtcDo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzYlO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgY29udGVudDogXCJTY2hvb2wgc2VhbCBMb2dvXCI7IH1cblxuLnRvcC1zcGFjZSB7XG4gIHBhZGRpbmctdG9wOiAxLjRyZW07IH1cblxuLm9yZGVyLWxpc3QgLmxpc3Qge1xuICAvKiBkaXNwbGF5OmZsZXg7IFxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7ICovXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpc3Qtc3R5bGUtdHlwZTogZGVjaW1hbDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG5cbi5vcmRlci1saXN0IC5saXN0IC50ZXh0IHtcbiAgd2hpdGUtc3BhY2U6IHByZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuXG4ub3JkZXItbGlzdCAubGlzdCAudGl0bGUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuXG4uc2luZ2xlLWxpbmUge1xuICB3aWR0aDogMTA1MHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nLXRvcDogMTVweDsgfVxuXG4ub3JkZXItbGlzdCAubGlzdCAuaW4td29yZHMge1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7IH1cblxuLm1haW4tdGl0bGUge1xuICBiYWNrZ3JvdW5kOiAjNWY1ZjVmO1xuICBkaXNwbGF5OiBsaXN0LWl0ZW07XG4gIGNvbG9yOiAjZmZmOyB9XG5cbi5hdHRlbmRhbmNlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyB9XG5cbi5hdHRlbmRhbmNlIHRoZWFkIHtcbiAgYmFja2dyb3VuZDogIzVmNWY1ZjtcbiAgY29sb3I6ICNmZmY7IH1cblxuLmF0dGVuZGFuY2UgdHIgdGgsXG4uYXR0ZW5kYW5jZSB0ciB0ZCB7XG4gIHBhZGRpbmc6IDE1cHggMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLmF0dGVuZGFuY2UyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyB9XG5cbi5hdHRlbmRhbmNlMiB0aGVhZCB7XG4gIGJhY2tncm91bmQ6ICM1ZjVmNWY7XG4gIGNvbG9yOiAjZmZmOyB9XG5cbi5hdHRlbmRhbmNlMiB0ciB0aCB7XG4gIHBhZGRpbmc6IDE1cHggMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLmF0dGVuZGFuY2UyIHRyIHRkIHtcbiAgcGFkZGluZzogNXB4IDBweDsgfVxuXG4uYXR0ZW5kYW5jZTIgdHIgdGQ6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7IH1cblxuLmF0dGVuZGFuY2UyIHRyIHRkOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi5hdHRlbmRhbmNlMiB0cjpudGgtY2hpbGQoM24pIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkOyB9XG5cbi5vdXRlci1saW5lIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBtYXJnaW46IDVweCAzMHB4OyB9XG5cbi5vdXRlci1saW5lIC5oZWxwZXItdGFibGU6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGJvcmRlci10b3A6IG5vbmU7IH1cblxuLmhlbHBlci10YWJsZSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZzogOXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTsgfVxuXG4udG90YWwtdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgcGFkZGluZzogMTNweDtcbiAgbWFyZ2luLXRvcDogMjBweDsgfVxuXG4udG90YWwtdGFibGUgdGg6Zmlyc3QtY2hpbGQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIG1heC13aWR0aDogNTVweDsgfVxuXG4udG90YWwtdGFibGUgdGg6bGFzdC1jaGlsZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4OyB9XG5cbi5tYXJrcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItc3BhY2luZzogMDsgfVxuXG4ubWFya3MgdGhlYWQgdHIgdGgge1xuICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNkZWRlZGU7IH1cblxuLm1hcmtzIHRib2R5IHRyIHRkIHtcbiAgcGFkZGluZzogOHB4IDEwcHg7IH1cblxuLm1hcmtzLmJvcmRlci10ciB0aCxcbi5tYXJrcy5ib3JkZXItdHIgdGQge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAvKiB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICovIH1cblxuLm1hcmtzLmJvcmRlci10ciB0ZCAuY29udGVudCB7XG4gIHdpZHRoOiAxMnB4O1xuICBtYXJnaW46IGF1dG87XG4gIG92ZXJmbG93OiB2aXNpYmxlOyB9XG5cbi5tLXctMjAwIHtcbiAgLyogd2lkdGg6IDIwMHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDIwMHB4OyAqL1xuICBtaW4td2lkdGg6IDIwMHB4OyB9XG5cbi5tYXJrcy5ib3JkZXItdHIgdGg6bGFzdC1jaGlsZCxcbi5tYXJrcy5ib3JkZXItdHIgdGQ6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1yaWdodDogbm9uZTsgfVxuXG4uaGVhZGVyLXRpdGxlMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZWRlZGU7XG4gIHBhZGRpbmc6IDhweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDsgfVxuXG4udGVybXMge1xuICBwYWRkaW5nOiAyMHB4IDU1cHggNXB4OyB9XG5cbi50ZW0tdGFibGUge1xuICBwYWRkaW5nOiAwcHggMTMlOyB9XG5cbi5mZWUtcmVjaXB0IHRyIHRoLCAuZmVlLXJlY2lwdCB0ciB0ZCB7XG4gIG1heC13aWR0aDogMjAwcHg7IH1cblxuLnNjcm9sbC10YWJsZSB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBvdmVyZmxvdzogb3ZlcmxheTsgfVxuXG4uYXR0ZW5kYW5jZTIgdHIgdGgsXG4uYXR0ZW5kYW5jZTIgdHIgdGQge1xuICBtaW4td2lkdGg6IDEyMHB4OyB9XG4iLCJAaW1wb3J0IFwiLi4vY29tbW9uLXJlcG9ydHMuc2Nzc1wiO1xuLnNjcm9sbC10YWJsZXtcbiAgIG92ZXJmbG93OiBhdXRvO1xuICAgb3ZlcmZsb3c6IG92ZXJsYXk7XG59XG4uYXR0ZW5kYW5jZTIgdHIgdGgsXG4uYXR0ZW5kYW5jZTIgdHIgdGQge1xuICAgbWluLXdpZHRoOiAxMjBweDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/modules/reports/students-attendance-report/students-attendance-report.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/reports/students-attendance-report/students-attendance-report.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: StudentsAttendanceReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsAttendanceReportComponent", function() { return StudentsAttendanceReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_service_reports_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/service/reports/reports.service */ "./src/app/service/reports/reports.service.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_service_general_api_classes_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/general/api/classes-config.service */ "./src/app/service/general/api/classes-config.service.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");








var StudentsAttendanceReportComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StudentsAttendanceReportComponent, _super);
    function StudentsAttendanceReportComponent(schoolReportsService, commonService, _fb, classService) {
        var _this = _super.call(this) || this;
        _this.schoolReportsService = schoolReportsService;
        _this.commonService = commonService;
        _this._fb = _fb;
        _this.classService = classService;
        _this.objectKeys = Object.keys;
        return _this;
    }
    StudentsAttendanceReportComponent.prototype.ngOnInit = function () {
        this.intiazilizeForm();
        this.getBoards();
    };
    StudentsAttendanceReportComponent.prototype.getBoards = function () {
        var _this = this;
        this.availableSchoolBoards = [];
        this.clearClassSections();
        this.classService.boardsBasedOnAcademicSession(parseInt(this.getTokenParam('_as'), 10)).subscribe(function (response) {
            if (response != null && response.listViews.length) {
                response.listViews.forEach(function (element) {
                    _this.availableSchoolBoards.push({
                        label: element.name,
                        value: element.id
                    });
                });
            }
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    StudentsAttendanceReportComponent.prototype.clearClassSections = function () {
        this.availableClasses = [];
        this.availableSections = [];
        this.searchForm.patchValue({ classId: null, sectionId: null });
    };
    StudentsAttendanceReportComponent.prototype.filterSearch = function () {
        var _this = this;
        if (this.searchForm.invalid) {
            return;
        }
        var data = this.searchForm.value;
        this.schoolReportsService.classAttendanceSummary(data.classId, data.sectionId, data.boardId, data.minimumAttendanceRequired)
            .subscribe(function (res) { return _this.onStudentAttendanceGet(res); }, function (err) { return _this.errorResponse(err); });
    };
    StudentsAttendanceReportComponent.prototype.reset = function () {
        this.resultApplicationReports = null;
        this.searchForm.reset();
        this.clearClassSections();
    };
    StudentsAttendanceReportComponent.prototype.intiazilizeForm = function () {
        this.searchForm = this._fb.group({
            classId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            sectionId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            boardId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            minimumAttendanceRequired: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].max(99)]),
        });
    };
    StudentsAttendanceReportComponent.prototype.onBoardChange = function (event) {
        this.clearClassSections();
        this.getAvailableClasses(event.value);
    };
    StudentsAttendanceReportComponent.prototype.onClassChange = function (event) {
        this.searchForm.patchValue({
            sectionId: null
        });
        this.availableSections = [];
        this.getAvailableSections(this.searchForm.value.boardId, this.searchForm.value.classId);
    };
    StudentsAttendanceReportComponent.prototype.onStudentAttendanceGet = function (res) {
        var _this = this;
        this.resultApplicationReports = res;
        this.resultApplicationReports['boradName'] = this.availableSchoolBoards.find(function (x) { return x.value === _this.searchForm.value.boardId; }).label;
        this.resultApplicationReports['className'] = this.availableClasses.find(function (x) { return x.value === _this.searchForm.value.classId; }).label;
        this.resultApplicationReports['sectionName'] = this.availableSections.find(function (x) { return x.value === _this.searchForm.value.sectionId; }).label;
    };
    StudentsAttendanceReportComponent.prototype.generateReport = function (rp) {
        if (rp === 'generatePdfReport') {
            this.schoolReportsService.generatePdf(document.getElementById('admitted-std'), app_app_constants__WEBPACK_IMPORTED_MODULE_7__["Messages"].STUDENT_ATTENDANCE_CSS);
        }
        if (rp === 'generateExcelReport') {
            this.schoolReportsService.exportToExcel('std-atd-app', 'std_atd_report');
        }
    };
    StudentsAttendanceReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-students-attendance-report',
            template: __webpack_require__(/*! ./students-attendance-report.component.html */ "./src/app/modules/reports/students-attendance-report/students-attendance-report.component.html"),
            styles: [__webpack_require__(/*! ./students-attendance-report.component.scss */ "./src/app/modules/reports/students-attendance-report/students-attendance-report.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_reports_reports_service__WEBPACK_IMPORTED_MODULE_2__["SchoolReportsService"], app_service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], app_service_general_api_classes_config_service__WEBPACK_IMPORTED_MODULE_6__["ClassesConfigService"]])
    ], StudentsAttendanceReportComponent);
    return StudentsAttendanceReportComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_4__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/reports/students-strength/students-strength.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/modules/reports/students-strength/students-strength.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-custom-card *ngIf=\"!(originalItems?.classes?.length)\" [inputMessage]=\"'No Record Found'\">\n</app-custom-card>\n<div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"px-32 py-12\" *ngIf=\"originalItems?.classes?.length\">\n    <button mat-stroked-button class=\"mr-12\" (click)=\"generateReport('generatePdfReport')\">\n        <mat-icon class=\"mr-4\">save_alt</mat-icon>Download PDF\n    </button>\n    <button mat-stroked-button (click)=\"generateReport('generateExcelReport')\">\n        <mat-icon class=\"mr-4\">save_alt</mat-icon> Download EXCEL\n    </button>\n</div>\n<div class='invoice-container' *ngIf=\"originalItems?.classes?.length\" id=\"admitted-std\" style=\"padding: 25px; padding-top: 0px;\">\n    <span class=\"dark-theme-color\" style=\"color:#fff\">A</span>\n    <div class='b flex-d-c invoice-body' style='overflow: hidden; '>\n        <h2 class=\"text-center text-uppercase\">Student Strength Report</h2>\n        <div class=\"p-20 mb-20 main-title\">\n            <div class=\"left-align\">Report Generated On : {{ date }}</div>\n            <div class=\"right-align flex\" *ngIf=\"acadmicSession\">\n                {{acadmicSession?.name}} ({{acadmicSession?.startDate | date: 'MMM d, y'}} -\n                {{acadmicSession?.endDate | date: 'MMM d, y'}})\n            </div>\n        </div>\n\n        <div class=\"outer-line scroll-table\">\n            <ng-container *ngFor=\"let item of originalItems?.classes\">\n                <table class=\"helper-table\">\n                    <thead>\n                        <th>{{item.name}}</th>\n                        <th> Current Strength:{{item.strength}} </th>\n                        <th> Total Capacity : {{item.capacity}}</th>\n                    </thead>\n                </table>\n                <div class=\"px-55 scroll-table\">\n                    <app-af-report-table [inputData]=\"item.sections\" [tableId]=\"'pnd-std-app'\" [columns]=\"columns\">\n                    </app-af-report-table>\n                </div>\n            </ng-container>\n            <table class=\"total-table\" *ngFor=\"let item of originalItems?.boardAdmissions\">\n                <thead>\n                    <tr>\n                        <th>Total School strength</th>\n                        <th>{{item.classesCount}} Class</th>\n                        <th>{{item.sectionsCount}} Sections</th>\n                        <th>{{item.strength}}</th>\n                        <th>{{item.capacity}}</th>\n                    </tr>\n                </thead>\n            </table>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/reports/students-strength/students-strength.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/reports/students-strength/students-strength.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invoice-container {\n  padding: 0px 25px;\n  margin: 0px auto; }\n\n.b {\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.b-b {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.b-t {\n  border-top: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.b-r {\n  border-right: 1px solid rgba(0, 0, 0, 0.3);\n  border-collapse: collapse; }\n\n.flex {\n  display: -webkit-box;\n  display: flex;\n  display: -webkit-flex; }\n\n.flex-d-c {\n  flex-direction: -webkit-column;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n\n.flex-d-r {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row; }\n\n.flex-a {\n  -webkit-place-content: center center;\n  place-content: center center;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.align-item-center {\n  -webkit-box-align: center;\n          align-items: center; }\n\n.w-50-p {\n  width: 50%; }\n\n.w-100-p {\n  width: 100%; }\n\n.p-20 {\n  padding: 20px; }\n\n.py-4 {\n  padding: 4px 0px; }\n\n.px-20 {\n  padding: 0px 20px; }\n\n.pt-30 {\n  padding-top: 30px; }\n\n.pt-20 {\n  padding-top: 20px; }\n\n.text-left {\n  text-align: left; }\n\n.text-right {\n  text-align: right; }\n\n.text-center {\n  text-align: center; }\n\n.text-uppercase {\n  text-transform: uppercase; }\n\n.result-h {\n  font-size: 20px;\n  padding: 20px;\n  margin: 2px; }\n\n.result-h span {\n  width: 80px;\n  display: inline-block; }\n\n.h2-c {\n  font-size: 20px; }\n\n.pr-8 {\n  padding-right: 8px; }\n\n.pb-20 {\n  padding-bottom: 20px; }\n\n.mb-20 {\n  margin-bottom: 20px; }\n\n.p-10 {\n  padding: 10px; }\n\n.pr-4rem {\n  padding-right: 4rem; }\n\n.right-align {\n  float: right; }\n\n.left-align {\n  float: left; }\n\n.logo-img {\n  max-width: 200px;\n  max-height: 100px; }\n\n.text-lg {\n  font-size: 25px; }\n\n.school-stamp {\n  width: 130px;\n  min-width: 130px;\n  max-width: 130px;\n  height: 130px;\n  border: 1px solid;\n  border-radius: 100%;\n  position: relative; }\n\n.school-stamp::after {\n  position: absolute;\n  top: 36%;\n  left: 0;\n  width: 100%;\n  content: \"School seal Logo\"; }\n\n.top-space {\n  padding-top: 1.4rem; }\n\n.order-list .list {\n  /* display:flex; \n        display: -webkit-flex; */\n  padding-right: 20px;\n  padding-bottom: 25px;\n  font-size: 18px;\n  list-style-type: decimal;\n  display: inline-block; }\n\n.order-list .list .text {\n  white-space: pre;\n  overflow: hidden; }\n\n.order-list .list .title {\n  white-space: nowrap;\n  margin-right: 20px;\n  display: inline-block; }\n\n.single-line {\n  width: 1050px;\n  white-space: nowrap;\n  overflow: hidden;\n  padding-top: 15px; }\n\n.order-list .list .in-words {\n  padding-right: 5px; }\n\n.main-title {\n  background: #5f5f5f;\n  display: list-item;\n  color: #fff; }\n\n.attendance {\n  width: 100%;\n  border-spacing: 0;\n  border-collapse: collapse; }\n\n.attendance thead {\n  background: #5f5f5f;\n  color: #fff; }\n\n.attendance tr th,\n.attendance tr td {\n  padding: 15px 0px;\n  text-align: center; }\n\n.attendance2 {\n  width: 100%;\n  border-spacing: 0;\n  border-collapse: collapse; }\n\n.attendance2 thead {\n  background: #5f5f5f;\n  color: #fff; }\n\n.attendance2 tr th {\n  padding: 15px 0px;\n  text-align: center; }\n\n.attendance2 tr td {\n  padding: 5px 0px; }\n\n.attendance2 tr td:first-child {\n  padding-left: 10px; }\n\n.attendance2 tr td:not(:first-child) {\n  text-align: center; }\n\n.attendance2 tr:nth-child(3n) {\n  border-bottom: 1px solid; }\n\n.outer-line {\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  margin: 5px 30px; }\n\n.outer-line .helper-table:first-child {\n  margin-top: 0px;\n  border-top: none; }\n\n.helper-table {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n  margin-bottom: 0px;\n  margin-top: 20px;\n  padding: 9px;\n  width: 100%;\n  border-top: 1px solid rgba(0, 0, 0, 0.3); }\n\n.total-table {\n  width: 100%;\n  border-top: 1px solid rgba(0, 0, 0, 0.3);\n  padding: 13px;\n  margin-top: 20px; }\n\n.total-table th:first-child {\n  text-align: left;\n  padding-left: 20px;\n  max-width: 55px; }\n\n.total-table th:last-child {\n  text-align: right;\n  padding-right: 20px; }\n\n.marks {\n  width: 100%;\n  border-spacing: 0; }\n\n.marks thead tr th {\n  padding: 10px 10px;\n  background: #dedede; }\n\n.marks tbody tr td {\n  padding: 8px 10px; }\n\n.marks.border-tr th,\n.marks.border-tr td {\n  border-right: 1px solid rgba(0, 0, 0, 0.3);\n  text-align: center;\n  font-size: 18px;\n  word-break: break-word;\n  /* text-transform: uppercase */ }\n\n.marks.border-tr td .content {\n  width: 12px;\n  margin: auto;\n  overflow: visible; }\n\n.m-w-200 {\n  /* width: 200px;\n        max-width: 200px; */\n  min-width: 200px; }\n\n.marks.border-tr th:last-child,\n.marks.border-tr td:last-child {\n  border-right: none; }\n\n.header-title2 {\n  background-color: #dedede;\n  padding: 8px;\n  font-size: 18px;\n  font-weight: bold; }\n\n.terms {\n  padding: 20px 55px 5px; }\n\n.tem-table {\n  padding: 0px 13%; }\n\n.fee-recipt tr th, .fee-recipt tr td {\n  max-width: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvcmVwb3J0cy9jb21tb24tcmVwb3J0cy5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3JlcG9ydHMvc3R1ZGVudHMtc3RyZW5ndGgvc3R1ZGVudHMtc3RyZW5ndGguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBSXBCO0VBQ0ksb0NBQW9DO0VBQ3BDLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLDJDQUEyQztFQUMzQyx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSx3Q0FBd0M7RUFDeEMseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksMENBQTBDO0VBQzFDLHlCQUNKLEVBQUE7O0FBRUE7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYixxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSw4QkFBOEI7RUFDOUIsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSw4QkFBbUI7RUFBbkIsNkJBQW1CO1VBQW5CLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLG9DQUFvQztFQUNwQyw0QkFBNEI7RUFFNUIseUJBQW1CO1VBQW5CLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLHlCQUFtQjtVQUFuQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxVQUFVLEVBQUE7O0FBR2Q7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0kseUJBQXlCLEVB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QTs7QUFHcEI7RUFDSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVwb3J0cy9zdHVkZW50cy1zdHJlbmd0aC9zdHVkZW50cy1zdHJlbmd0aC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnZvaWNlLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMHB4IDI1cHg7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgIFxufVxuXG4uYiB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzApO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbi5iLWIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zMCk7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxuLmItdCB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMwKTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG4uYi1yIHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zMCk7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZVxufVxuXG4uZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG59XG5cbi5mbGV4LWQtYyB7XG4gICAgZmxleC1kaXJlY3Rpb246IC13ZWJraXQtY29sdW1uO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5mbGV4LWQtciB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmZsZXgtYSB7XG4gICAgLXdlYmtpdC1wbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hbGlnbi1pdGVtLWNlbnRlciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnctNTAtcCB7XG4gICAgd2lkdGg6IDUwJTtcbn1cblxuLnctMTAwLXAge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ucC0yMCB7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLnB5LTQge1xuICAgIHBhZGRpbmc6IDRweCAwcHg7XG59XG5cbi5weC0yMCB7XG4gICAgcGFkZGluZzogMHB4IDIwcHg7XG59XG5cbi5wdC0zMCB7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG59XG4ucHQtMjB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi50ZXh0LWxlZnQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi50ZXh0LXJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnRleHQtY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50ZXh0LXVwcGVyY2FzZSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnJlc3VsdC1oIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBtYXJnaW46IDJweDtcbn1cblxuLnJlc3VsdC1oIHNwYW4ge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmgyLWMge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnByLTgge1xuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICA7XG59XG5cbi5wYi0yMCB7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgO1xufVxuXG4ubWItMjAge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5wLTEwIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ucHItNHJlbSB7XG4gICAgcGFkZGluZy1yaWdodDogNHJlbTtcbn1cblxuLnJpZ2h0LWFsaWduIHtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbi5sZWZ0LWFsaWduIHtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuLmxvZ28taW1nIHtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDEwMHB4XG59XG5cbi50ZXh0LWxnIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5zY2hvb2wtc3RhbXAge1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBtaW4td2lkdGg6IDEzMHB4O1xuICAgIG1heC13aWR0aDogMTMwcHg7XG4gICAgaGVpZ2h0OiAxMzBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNjaG9vbC1zdGFtcDo6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDM2JTtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbnRlbnQ6IFwiU2Nob29sIHNlYWwgTG9nb1wiO1xufVxuXG4udG9wLXNwYWNlIHtcbiAgICBwYWRkaW5nLXRvcDogMS40cmVtO1xufVxuXG4ub3JkZXItbGlzdCAubGlzdCB7XG4gICAgLyogZGlzcGxheTpmbGV4OyBcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4OyAqL1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogZGVjaW1hbDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5vcmRlci1saXN0IC5saXN0IC50ZXh0IHtcbiAgICB3aGl0ZS1zcGFjZTogcHJlO1xuICAgIG92ZXJmbG93OiBoaWRkZW5cbn1cblxuLm9yZGVyLWxpc3QgLmxpc3QgLnRpdGxlIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xufVxuXG4uc2luZ2xlLWxpbmUge1xuICAgIHdpZHRoOiAxMDUwcHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmctdG9wOiAxNXB4XG59XG5cbi5vcmRlci1saXN0IC5saXN0IC5pbi13b3JkcyB7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4ubWFpbi10aXRsZSB7XG4gICAgYmFja2dyb3VuZDogIzVmNWY1ZjtcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5hdHRlbmRhbmNlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlXG59XG5cbi5hdHRlbmRhbmNlIHRoZWFkIHtcbiAgICBiYWNrZ3JvdW5kOiAjNWY1ZjVmO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuLmF0dGVuZGFuY2UgdHIgdGgsXG4uYXR0ZW5kYW5jZSB0ciB0ZCB7XG4gICAgcGFkZGluZzogMTVweCAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmF0dGVuZGFuY2UyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlXG59XG5cbi5hdHRlbmRhbmNlMiB0aGVhZCB7XG4gICAgYmFja2dyb3VuZDogIzVmNWY1ZjtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi5hdHRlbmRhbmNlMiB0ciB0aHtcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYXR0ZW5kYW5jZTIgdHIgdGQge1xuICAgIHBhZGRpbmc6IDVweCAwcHg7ICAgICAgICAgXG59XG4uYXR0ZW5kYW5jZTIgdHIgdGQ6Zmlyc3QtY2hpbGQge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDsgICAgICBcbn1cbi5hdHRlbmRhbmNlMiB0ciB0ZDpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmF0dGVuZGFuY2UyIHRyOm50aC1jaGlsZCgzbikgeyBcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZDtcbiAgIH1cblxuICAgLm91dGVyLWxpbmUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMwKTtcbiAgICBtYXJnaW46IDVweCAzMHB4O1xufVxuLm91dGVyLWxpbmUgLmhlbHBlci10YWJsZTpmaXJzdC1jaGlsZHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbn1cblxuLmhlbHBlci10YWJsZSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMwKTtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBwYWRkaW5nOiA5cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMwKTtcbn1cblxuLnRvdGFsLXRhYmxle1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zMCk7IFxuICAgIHBhZGRpbmc6IDEzcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDsgIFxufVxuLnRvdGFsLXRhYmxlIHRoOmZpcnN0LWNoaWxke1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIG1heC13aWR0aDogNTVweDtcbn1cbi50b3RhbC10YWJsZSB0aDpsYXN0LWNoaWxke1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG4gLm1hcmtzIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICAgIH1cbiAgICBcbiAgICAubWFya3MgdGhlYWQgdHIgdGgge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgICAgIDtcbiAgICAgICAgYmFja2dyb3VuZDogI2RlZGVkZTtcbiAgICB9XG4gICAgXG4gICAgLm1hcmtzIHRib2R5IHRyIHRkIHtcbiAgICAgICAgcGFkZGluZzogOHB4IDEwcHhcbiAgICB9XG4gICAgXG4gICAgLm1hcmtzLmJvcmRlci10ciB0aCxcbiAgICAubWFya3MuYm9yZGVyLXRyIHRkIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzApO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICAgICAgLyogdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAqL1xuICAgIH1cbiAgICBcbiAgICAubWFya3MuYm9yZGVyLXRyIHRkIC5jb250ZW50IHtcbiAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGVcbiAgICB9XG4gICAgXG4gICAgLm0tdy0yMDAge1xuICAgICAgICAvKiB3aWR0aDogMjAwcHg7XG4gICAgICAgIG1heC13aWR0aDogMjAwcHg7ICovXG4gICAgICAgIG1pbi13aWR0aDogMjAwcHhcbiAgICB9IFxuICAgIFxuICAgIC5tYXJrcy5ib3JkZXItdHIgdGg6bGFzdC1jaGlsZCxcbiAgICAubWFya3MuYm9yZGVyLXRyIHRkOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmVcbiAgICB9XG4gICAgLmhlYWRlci10aXRsZTIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZWRlZGU7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogYm9sZFxufVxuLnRlcm1ze1xuICAgIHBhZGRpbmc6IDIwcHggNTVweCA1cHg7XG59XG4gICAgLnRlbS10YWJsZXtcbiAgICAgICAgcGFkZGluZzogMHB4IDEzJTtcbiAgICB9XG5cbiAgICAuZmVlLXJlY2lwdCB0ciB0aCwgLmZlZS1yZWNpcHQgdHIgdGR7XG4gICAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgfSIsIi5pbnZvaWNlLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDBweCAyNXB4O1xuICBtYXJnaW46IDBweCBhdXRvOyB9XG5cbi5iIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyB9XG5cbi5iLWIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyB9XG5cbi5iLXQge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyB9XG5cbi5iLXIge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IH1cblxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7IH1cblxuLmZsZXgtZC1jIHtcbiAgZmxleC1kaXJlY3Rpb246IC13ZWJraXQtY29sdW1uO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG5cbi5mbGV4LWQtciB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cblxuLmZsZXgtYSB7XG4gIC13ZWJraXQtcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcbiAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG5cbi5hbGlnbi1pdGVtLWNlbnRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cblxuLnctNTAtcCB7XG4gIHdpZHRoOiA1MCU7IH1cblxuLnctMTAwLXAge1xuICB3aWR0aDogMTAwJTsgfVxuXG4ucC0yMCB7XG4gIHBhZGRpbmc6IDIwcHg7IH1cblxuLnB5LTQge1xuICBwYWRkaW5nOiA0cHggMHB4OyB9XG5cbi5weC0yMCB7XG4gIHBhZGRpbmc6IDBweCAyMHB4OyB9XG5cbi5wdC0zMCB7XG4gIHBhZGRpbmctdG9wOiAzMHB4OyB9XG5cbi5wdC0yMCB7XG4gIHBhZGRpbmctdG9wOiAyMHB4OyB9XG5cbi50ZXh0LWxlZnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XG5cbi50ZXh0LXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cblxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi50ZXh0LXVwcGVyY2FzZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cblxuLnJlc3VsdC1oIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IDJweDsgfVxuXG4ucmVzdWx0LWggc3BhbiB7XG4gIHdpZHRoOiA4MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cblxuLmgyLWMge1xuICBmb250LXNpemU6IDIwcHg7IH1cblxuLnByLTgge1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7IH1cblxuLnBiLTIwIHtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7IH1cblxuLm1iLTIwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxuXG4ucC0xMCB7XG4gIHBhZGRpbmc6IDEwcHg7IH1cblxuLnByLTRyZW0ge1xuICBwYWRkaW5nLXJpZ2h0OiA0cmVtOyB9XG5cbi5yaWdodC1hbGlnbiB7XG4gIGZsb2F0OiByaWdodDsgfVxuXG4ubGVmdC1hbGlnbiB7XG4gIGZsb2F0OiBsZWZ0OyB9XG5cbi5sb2dvLWltZyB7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIG1heC1oZWlnaHQ6IDEwMHB4OyB9XG5cbi50ZXh0LWxnIHtcbiAgZm9udC1zaXplOiAyNXB4OyB9XG5cbi5zY2hvb2wtc3RhbXAge1xuICB3aWR0aDogMTMwcHg7XG4gIG1pbi13aWR0aDogMTMwcHg7XG4gIG1heC13aWR0aDogMTMwcHg7XG4gIGhlaWdodDogMTMwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuLnNjaG9vbC1zdGFtcDo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzYlO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgY29udGVudDogXCJTY2hvb2wgc2VhbCBMb2dvXCI7IH1cblxuLnRvcC1zcGFjZSB7XG4gIHBhZGRpbmctdG9wOiAxLjRyZW07IH1cblxuLm9yZGVyLWxpc3QgLmxpc3Qge1xuICAvKiBkaXNwbGF5OmZsZXg7IFxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7ICovXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpc3Qtc3R5bGUtdHlwZTogZGVjaW1hbDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG5cbi5vcmRlci1saXN0IC5saXN0IC50ZXh0IHtcbiAgd2hpdGUtc3BhY2U6IHByZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuXG4ub3JkZXItbGlzdCAubGlzdCAudGl0bGUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuXG4uc2luZ2xlLWxpbmUge1xuICB3aWR0aDogMTA1MHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nLXRvcDogMTVweDsgfVxuXG4ub3JkZXItbGlzdCAubGlzdCAuaW4td29yZHMge1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7IH1cblxuLm1haW4tdGl0bGUge1xuICBiYWNrZ3JvdW5kOiAjNWY1ZjVmO1xuICBkaXNwbGF5OiBsaXN0LWl0ZW07XG4gIGNvbG9yOiAjZmZmOyB9XG5cbi5hdHRlbmRhbmNlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyB9XG5cbi5hdHRlbmRhbmNlIHRoZWFkIHtcbiAgYmFja2dyb3VuZDogIzVmNWY1ZjtcbiAgY29sb3I6ICNmZmY7IH1cblxuLmF0dGVuZGFuY2UgdHIgdGgsXG4uYXR0ZW5kYW5jZSB0ciB0ZCB7XG4gIHBhZGRpbmc6IDE1cHggMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLmF0dGVuZGFuY2UyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyB9XG5cbi5hdHRlbmRhbmNlMiB0aGVhZCB7XG4gIGJhY2tncm91bmQ6ICM1ZjVmNWY7XG4gIGNvbG9yOiAjZmZmOyB9XG5cbi5hdHRlbmRhbmNlMiB0ciB0aCB7XG4gIHBhZGRpbmc6IDE1cHggMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLmF0dGVuZGFuY2UyIHRyIHRkIHtcbiAgcGFkZGluZzogNXB4IDBweDsgfVxuXG4uYXR0ZW5kYW5jZTIgdHIgdGQ6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7IH1cblxuLmF0dGVuZGFuY2UyIHRyIHRkOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi5hdHRlbmRhbmNlMiB0cjpudGgtY2hpbGQoM24pIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkOyB9XG5cbi5vdXRlci1saW5lIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBtYXJnaW46IDVweCAzMHB4OyB9XG5cbi5vdXRlci1saW5lIC5oZWxwZXItdGFibGU6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGJvcmRlci10b3A6IG5vbmU7IH1cblxuLmhlbHBlci10YWJsZSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZzogOXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTsgfVxuXG4udG90YWwtdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgcGFkZGluZzogMTNweDtcbiAgbWFyZ2luLXRvcDogMjBweDsgfVxuXG4udG90YWwtdGFibGUgdGg6Zmlyc3QtY2hpbGQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIG1heC13aWR0aDogNTVweDsgfVxuXG4udG90YWwtdGFibGUgdGg6bGFzdC1jaGlsZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4OyB9XG5cbi5tYXJrcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItc3BhY2luZzogMDsgfVxuXG4ubWFya3MgdGhlYWQgdHIgdGgge1xuICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNkZWRlZGU7IH1cblxuLm1hcmtzIHRib2R5IHRyIHRkIHtcbiAgcGFkZGluZzogOHB4IDEwcHg7IH1cblxuLm1hcmtzLmJvcmRlci10ciB0aCxcbi5tYXJrcy5ib3JkZXItdHIgdGQge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAvKiB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICovIH1cblxuLm1hcmtzLmJvcmRlci10ciB0ZCAuY29udGVudCB7XG4gIHdpZHRoOiAxMnB4O1xuICBtYXJnaW46IGF1dG87XG4gIG92ZXJmbG93OiB2aXNpYmxlOyB9XG5cbi5tLXctMjAwIHtcbiAgLyogd2lkdGg6IDIwMHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDIwMHB4OyAqL1xuICBtaW4td2lkdGg6IDIwMHB4OyB9XG5cbi5tYXJrcy5ib3JkZXItdHIgdGg6bGFzdC1jaGlsZCxcbi5tYXJrcy5ib3JkZXItdHIgdGQ6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1yaWdodDogbm9uZTsgfVxuXG4uaGVhZGVyLXRpdGxlMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZWRlZGU7XG4gIHBhZGRpbmc6IDhweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDsgfVxuXG4udGVybXMge1xuICBwYWRkaW5nOiAyMHB4IDU1cHggNXB4OyB9XG5cbi50ZW0tdGFibGUge1xuICBwYWRkaW5nOiAwcHggMTMlOyB9XG5cbi5mZWUtcmVjaXB0IHRyIHRoLCAuZmVlLXJlY2lwdCB0ciB0ZCB7XG4gIG1heC13aWR0aDogMjAwcHg7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/reports/students-strength/students-strength.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/reports/students-strength/students-strength.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DataItem, StudentsStrengthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataItem", function() { return DataItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsStrengthComponent", function() { return StudentsStrengthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_service_reports_reports_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/reports/reports.service */ "./src/app/service/reports/reports.service.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");






var DataItem = /** @class */ (function () {
    function DataItem() {
    }
    return DataItem;
}());

var StudentsStrengthComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StudentsStrengthComponent, _super);
    function StudentsStrengthComponent(schoolReportsService, commonService) {
        var _this = _super.call(this) || this;
        _this.schoolReportsService = schoolReportsService;
        _this.commonService = commonService;
        _this.columns = [];
        return _this;
    }
    StudentsStrengthComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setColumns();
        this.schoolReportsService.schoolAdmittedStudents()
            .subscribe(function (res) { return _this.setSchoolDetails(res); }, function (err) { return _this.errorResponse(err); });
    };
    StudentsStrengthComponent.prototype.setColumns = function () {
        this.columns = [
            { field: 'boardName', header: 'Board', sort: false, dataKey: 'boardName' },
            { field: 'name', header: 'Section', sort: false, dataKey: 'name' },
            { field: 'strength', header: 'Strength', sort: false, dataKey: 'strength' },
            { field: 'capacity', header: 'Capacity', sort: false, dataKey: 'capacity' },
        ];
    };
    StudentsStrengthComponent.prototype.setSchoolDetails = function (res) {
        this.originalItems = res;
        this.originalItems['classes'].forEach(function (element) {
            element['classinfo'] = [element.name, 'Current Strength ' + element.strength, 'Total Capacity ' + element.capacity].join('-');
        });
    };
    StudentsStrengthComponent.prototype.generateReport = function (rp) {
        if (rp === 'generatePdfReport') {
            this.schoolReportsService.generatePdf(document.getElementById('admitted-std'), app_app_constants__WEBPACK_IMPORTED_MODULE_5__["Messages"].STUDENT_STRENGTH_CSS);
        }
        if (rp === 'generateExcelReport') {
            for (var index = 0; index < this.originalItems.length; index++) {
                this.schoolReportsService.exportToExcel('std-strength' + index, 'students_strength_report');
            }
        }
    };
    StudentsStrengthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-students-strength',
            template: __webpack_require__(/*! ./students-strength.component.html */ "./src/app/modules/reports/students-strength/students-strength.component.html"),
            styles: [__webpack_require__(/*! ./students-strength.component.scss */ "./src/app/modules/reports/students-strength/students-strength.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_reports_reports_service__WEBPACK_IMPORTED_MODULE_4__["SchoolReportsService"], app_service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]])
    ], StudentsStrengthComponent);
    return StudentsStrengthComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__["CommonComponent"]));



/***/ }),

/***/ "./src/app/service/academic-service/api/status.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/service/academic-service/api/status.service.ts ***!
  \****************************************************************/
/*! exports provided: StatusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusService", function() { return StatusService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_service_base_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/base/configuration */ "./src/app/service/base/configuration.ts");
/* harmony import */ var app_service_base_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/base/variables */ "./src/app/service/base/variables.ts");
/* harmony import */ var app_service_base_encoder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/base/encoder */ "./src/app/service/base/encoder.ts");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/**
 * BaseWebAPI
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */







var StatusService = /** @class */ (function () {
    function StatusService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = app_url_config__WEBPACK_IMPORTED_MODULE_6__["BaseUrlConfig"].BasePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["ModuleConfig"].Base;
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.configuration = new app_service_base_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    StatusService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    StatusService.prototype.getAllStatuses = function (code, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getAllStatuses.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new app_service_base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        if (code !== undefined && code !== null) {
            queryParameters = queryParameters.set('Code', code);
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/Status/GetStatuses", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    /**
     * Payment Statuses
     *
     * @param code Gets or sets code
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    StatusService.prototype.paymentStatuses = function (code, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling paymentStatuses.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new app_service_base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        if (code !== undefined && code !== null) {
            queryParameters = queryParameters.set('Code', code);
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/Payment/statuses", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    StatusService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(app_service_base_variables__WEBPACK_IMPORTED_MODULE_4__["BASE_PATH"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String, app_service_base_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]])
    ], StatusService);
    return StatusService;
}());



/***/ }),

/***/ "./src/app/service/reports/generate-pdf.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/service/reports/generate-pdf.service.ts ***!
  \*********************************************************/
/*! exports provided: ReportGenerationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportGenerationService", function() { return ReportGenerationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base/configuration */ "./src/app/service/base/configuration.ts");
/* harmony import */ var _base_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base/variables */ "./src/app/service/base/variables.ts");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");

/**
 * BaseWebAPI
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */





var ReportGenerationService = /** @class */ (function () {
    function ReportGenerationService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = app_url_config__WEBPACK_IMPORTED_MODULE_5__["BaseUrlConfig"].BasePath + app_url_config__WEBPACK_IMPORTED_MODULE_5__["ModuleConfig"].Base;
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.configuration = new _base_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    ReportGenerationService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    ReportGenerationService.prototype.generatePdf = function (html, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        // this.basePath = 'http://localhost:8013';
        return this.httpClient.post(this.basePath + "/ReportGeneration/generate-pdf", html, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    ReportGenerationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_base_variables__WEBPACK_IMPORTED_MODULE_4__["BASE_PATH"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String, _base_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]])
    ], ReportGenerationService);
    return ReportGenerationService;
}());



/***/ }),

/***/ "./src/app/service/reports/reports.service.ts":
/*!****************************************************!*\
  !*** ./src/app/service/reports/reports.service.ts ***!
  \****************************************************/
/*! exports provided: SchoolReportsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolReportsService", function() { return SchoolReportsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base/configuration */ "./src/app/service/base/configuration.ts");
/* harmony import */ var _base_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base/variables */ "./src/app/service/base/variables.ts");
/* harmony import */ var _base_encoder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base/encoder */ "./src/app/service/base/encoder.ts");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var _file_management_store_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../file-management/store.service */ "./src/app/service/file-management/store.service.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _manage_school_school_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../manage-school/school.service */ "./src/app/service/manage-school/school.service.ts");
/* harmony import */ var _generate_pdf_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./generate-pdf.service */ "./src/app/service/reports/generate-pdf.service.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/**
 * BaseWebAPI
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */












var SchoolReportsService = /** @class */ (function () {
    function SchoolReportsService(httpClient, basePath, configuration, reportGenerationService, storeService, schoolService) {
        this.httpClient = httpClient;
        this.reportGenerationService = reportGenerationService;
        this.storeService = storeService;
        this.schoolService = schoolService;
        this.basePath = app_url_config__WEBPACK_IMPORTED_MODULE_6__["BaseUrlConfig"].BasePath + app_url_config__WEBPACK_IMPORTED_MODULE_6__["ModuleConfig"].Base;
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.configuration = new _base_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    SchoolReportsService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    SchoolReportsService.prototype.getPreStudentApplicationReports = function (classes, status, sortBy, sortOrder, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        if (classes) {
            classes.forEach(function (element) {
                queryParameters = queryParameters.append('Classes', element);
            });
        }
        if (status) {
            status.forEach(function (element) {
                queryParameters = queryParameters.append('Status', element);
            });
        }
        if (sortBy !== undefined && sortBy !== null) {
            queryParameters = queryParameters.set('SortBy', sortBy);
        }
        if (sortOrder !== undefined && sortOrder !== null) {
            queryParameters = queryParameters.set('SortOrder', sortOrder);
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/SchoolReports/pre-student-application-reports", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SchoolReportsService.prototype.inActiveStudentsReports = function (status, classIds, section, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        if (classIds) {
            classIds.forEach(function (element) {
                queryParameters = queryParameters.append('ClassIds', element);
            });
        }
        if (status) {
            status.forEach(function (element) {
                queryParameters = queryParameters.append('Status', element);
            });
        }
        if (section) {
            section.forEach(function (element) {
                queryParameters = queryParameters.append('Section', element);
            });
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/SchoolReports/inactive-students-report", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SchoolReportsService.prototype.schoolAdmittedStudents = function (schoolId, schoolAcademicSessionIds, classSectionIds, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        if (schoolId !== undefined && schoolId !== null) {
            queryParameters = queryParameters.set('SchoolId', schoolId);
        }
        if (schoolAcademicSessionIds) {
            schoolAcademicSessionIds.forEach(function (element) {
                queryParameters = queryParameters.append('SchoolAcademicSessionIds', element);
            });
        }
        if (classSectionIds) {
            classSectionIds.forEach(function (element) {
                queryParameters = queryParameters.append('ClassSectionIds', element);
            });
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/SchoolReports/student-strength", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SchoolReportsService.prototype.studentsApplicationSummary = function (classIds, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        if (classIds) {
            classIds.forEach(function (element) {
                queryParameters = queryParameters.append('ClassIds', element);
            });
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/SchoolReports/student-application-summary", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SchoolReportsService.prototype.studentsFeeConcessions = function (classId, studentConcessionGroupId, sectionId, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        if (studentConcessionGroupId !== undefined && studentConcessionGroupId !== null) {
            queryParameters = queryParameters.set('StudentConcessionGroupId', studentConcessionGroupId);
        }
        if (classId !== undefined && classId !== null) {
            queryParameters = queryParameters.set('ClassId', classId);
        }
        if (sectionId !== undefined && sectionId !== null) {
            queryParameters = queryParameters.set('SectionId', sectionId);
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/SchoolReports/student-fee-concessions", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SchoolReportsService.prototype.exportToExcel = function (tableId, name) {
        var timeSpan = new Date().toISOString();
        var prefix = name || 'ExportResult';
        var fileName = "" + prefix;
        var targetTableElm = document.getElementById(tableId);
        var wb = xlsx__WEBPACK_IMPORTED_MODULE_8__["utils"].table_to_book(targetTableElm, { sheet: prefix });
        xlsx__WEBPACK_IMPORTED_MODULE_8__["writeFile"](wb, fileName + ".xlsx");
    };
    // tslint:disable-next-line: max-line-length
    SchoolReportsService.prototype.studentAttendance = function (boardId, classId, sectionId, attendanceDate, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        if (boardId !== undefined && boardId !== null) {
            queryParameters = queryParameters.set('BoardId', boardId);
        }
        if (classId !== undefined && classId !== null) {
            queryParameters = queryParameters.set('ClassId', classId);
        }
        if (sectionId !== undefined && sectionId !== null) {
            queryParameters = queryParameters.set('SectionId', sectionId);
        }
        if (attendanceDate !== undefined && attendanceDate !== null) {
            queryParameters = queryParameters.set('AttendanceDate', attendanceDate.toISOString());
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/SchoolReports/student-attendance-report", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SchoolReportsService.prototype.studentPaymentCorrections = function (paymentCorrectionDateBegin, paymentCorrectionDateEnd, students, statuses, paymentModes, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        if (paymentCorrectionDateBegin !== undefined && paymentCorrectionDateBegin !== null) {
            queryParameters = queryParameters.set('PaymentCorrectionDateBegin', paymentCorrectionDateBegin);
        }
        if (paymentCorrectionDateEnd !== undefined && paymentCorrectionDateEnd !== null) {
            queryParameters = queryParameters.set('PaymentCorrectionDateEnd', paymentCorrectionDateEnd);
        }
        if (students) {
            students.forEach(function (element) {
                queryParameters = queryParameters.append('Students', element);
            });
        }
        if (statuses) {
            statuses.forEach(function (element) {
                queryParameters = queryParameters.append('Statuses', element);
            });
        }
        if (paymentModes) {
            paymentModes.forEach(function (element) {
                queryParameters = queryParameters.append('PaymentModes', element);
            });
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/SchoolReports/student-payment-corrections", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SchoolReportsService.prototype.staffAttendanceSummaryReport = function (fromDate, toDate, month, department, staffName, staffCode, sortOrder, sortBy, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        if (fromDate !== undefined && fromDate !== null) {
            queryParameters = queryParameters.set('FromDate', fromDate);
        }
        if (toDate !== undefined && toDate !== null) {
            queryParameters = queryParameters.set('ToDate', toDate);
        }
        if (month) {
            month.forEach(function (element) {
                queryParameters = queryParameters.append('Month', element);
            });
        }
        if (department !== undefined && department !== null) {
            queryParameters = queryParameters.set('Department', department);
        }
        if (staffName !== undefined && staffName !== null) {
            queryParameters = queryParameters.set('StaffName', staffName);
        }
        if (staffCode !== undefined && staffCode !== null) {
            queryParameters = queryParameters.set('StaffCode', staffCode);
        }
        if (sortOrder !== undefined && sortOrder !== null) {
            queryParameters = queryParameters.set('SortOrder', sortOrder);
        }
        if (sortBy !== undefined && sortBy !== null) {
            queryParameters = queryParameters.set('SortBy', sortBy);
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/SchoolReports/staff-attendance-summary-report", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SchoolReportsService.prototype.admittedStudents = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        if (id !== undefined && id !== null) {
            queryParameters = queryParameters.set('Id', id);
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/SchoolReports/admitted-students", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SchoolReportsService.prototype.failedPaymentsReport = function (failedPaymentsDateBegin, failedPaymentsDateEnd, studentId, statusId, paymentMode, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        if (failedPaymentsDateBegin !== undefined && failedPaymentsDateBegin !== null) {
            queryParameters = queryParameters.set('FailedPaymentsDateBegin', failedPaymentsDateBegin);
        }
        if (failedPaymentsDateEnd !== undefined && failedPaymentsDateEnd !== null) {
            queryParameters = queryParameters.set('FailedPaymentsDateEnd', failedPaymentsDateEnd);
        }
        if (studentId !== undefined && studentId !== null) {
            queryParameters = queryParameters.set('StudentId', studentId);
        }
        if (statusId !== undefined && statusId !== null) {
            queryParameters = queryParameters.set('StatusId', statusId);
        }
        if (paymentMode !== undefined && paymentMode !== null) {
            queryParameters = queryParameters.set('PaymentMode', paymentMode);
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/SchoolReports/failed-payments-report", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SchoolReportsService.prototype.paymentsDue = function (classIds, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        if (classIds) {
            classIds.forEach(function (element) {
                queryParameters = queryParameters.append('classIds', element);
            });
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/SchoolReports/student-payment-dues", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SchoolReportsService.prototype.classAttendanceSummary = function (classId, sectionId, schoolBoadId, minimumPercentageRequired, fromDate, toDate, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        if (classId !== undefined && classId !== null) {
            queryParameters = queryParameters.set('ClassId', classId);
        }
        if (sectionId !== undefined && sectionId !== null) {
            queryParameters = queryParameters.set('SectionId', sectionId);
        }
        if (schoolBoadId !== undefined && schoolBoadId !== null) {
            queryParameters = queryParameters.set('SchoolBoadId', schoolBoadId);
        }
        if (fromDate !== undefined && fromDate !== null) {
            queryParameters = queryParameters.set('FromDate', fromDate.toISOString());
        }
        if (toDate !== undefined && toDate !== null) {
            queryParameters = queryParameters.set('ToDate', toDate.toISOString());
        }
        if (minimumPercentageRequired !== undefined && minimumPercentageRequired !== null) {
            queryParameters = queryParameters.set('MinimumPercentageRequired', minimumPercentageRequired);
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/SchoolReports/class-attendace-summary", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SchoolReportsService.prototype.getBase64Value = function (path) {
        var toDataURL = null;
        return toDataURL = fetch(path)
            .then(function (response) { return response.blob(); })
            .then(function (blob) { return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.onloadend = function () { return resolve(reader.result); };
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        }); });
    };
    SchoolReportsService.prototype.getSchoolDetails = function () {
        var _this = this;
        return this.schoolService.schoolDetailsWithPromise().then(function (res) {
            if (res.schoolData) {
                res.schoolData.brandingSymbolLogo = res.schoolData.brandingSymbolLogo !== null ? _this.storeService.getFilePath(res.schoolData.brandingSymbolLogo.filename)
                    : 'https://dev-school.lshpdev.com/assets/images/logos/academy-front-logo.png';
                res.schoolData.line1 = [res.schoolData.line1, res.schoolData.line2, res.schoolData.line3].filter(function (c) { return c; }).join(',');
                res.schoolData.city = [res.schoolData.city,
                    res.schoolData.state, res.schoolData.country, res.schoolData.pincode].filter(function (a) { return a; }).join(',');
                return res.schoolData;
            }
        });
    };
    SchoolReportsService.prototype.htmlToStringConversion = function (id) {
        var html = id;
        var htmlToString;
        if (html.outerHTML) {
            htmlToString = html.outerHTML;
        }
        else if (XMLSerializer) {
            htmlToString = new XMLSerializer().serializeToString(html);
        }
        return htmlToString;
    };
    SchoolReportsService.prototype.generatePdf = function (inputHtml, css, orientation) {
        var _this = this;
        if (orientation === void 0) { orientation = 'landscape'; }
        var outputHtml = {
            id: null,
            name: null
        };
        var htmlToString = this.htmlToStringConversion(inputHtml);
        this.getSchoolDetails().then(function (schoolDetails) {
            // tslint:disable-next-line:max-line-length
            var header = '<div class="page-header" style="height:94px;"> <div style="padding:10px"> <table class="w100p" style="border: 1px solid rgba(0, 0, 0, .30); width:100%"> <tr> <td style="width:200px;"> <div> <span style="color:#fff">AF</span> <img src= "' + schoolDetails.brandingSymbolLogo + '" width="150" /> </div> </td> <td> <div> <div class="py-4 text-uppercase">' + schoolDetails.name + '</div> <div class="py-4">' + schoolDetails.line1 + '</div> <div class="py-4">' + schoolDetails.city + '</div><div><small>(School Registation Code: ' + schoolDetails.schoolRegCode + ')</small></div> </div> </td> </tr> </table> </div> </div>';
            var targetTableElm = '<html>' + css + '<body>' + header + htmlToString + app_app_constants__WEBPACK_IMPORTED_MODULE_11__["Messages"].FOOTER + '</body></html>';
            outputHtml.id = targetTableElm;
            outputHtml.name = orientation;
            _this.reportGenerationService.generatePdf(outputHtml).subscribe(function (res) {
                if (res.fileName) {
                    window.open(_this.storeService.getFilePath(res.fileName));
                }
            });
        });
    };
    SchoolReportsService.prototype.studentFeeCollections = function (paymentDateBegin, paymentDateEnd, classes, sections, students, statuses, paymentModes, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        if (paymentDateBegin !== undefined && paymentDateBegin !== null) {
            queryParameters = queryParameters.set('PaymentDateBegin', paymentDateBegin);
        }
        if (paymentDateEnd !== undefined && paymentDateEnd !== null) {
            queryParameters = queryParameters.set('PaymentDateEnd', paymentDateEnd);
        }
        if (classes) {
            classes.forEach(function (element) {
                queryParameters = queryParameters.append('Classes', element);
            });
        }
        if (sections) {
            sections.forEach(function (element) {
                queryParameters = queryParameters.append('Sections', element);
            });
        }
        if (students) {
            students.forEach(function (element) {
                queryParameters = queryParameters.append('Students', element);
            });
        }
        if (statuses) {
            statuses.forEach(function (element) {
                queryParameters = queryParameters.append('Statuses', element);
            });
        }
        if (paymentModes) {
            paymentModes.forEach(function (element) {
                queryParameters = queryParameters.append('PaymentModes', element);
            });
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/SchoolReports/student-fee-collections", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SchoolReportsService.prototype.examinationSchedule = function (classes, sections, terms, classTeacher, testDateBegin, testDateEnd, testName, subject, subjectTeacher, testStatus, sortOrder, sortBy, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        if (classes) {
            classes.forEach(function (element) {
                queryParameters = queryParameters.append('Classes', element);
            });
        }
        if (sections) {
            sections.forEach(function (element) {
                queryParameters = queryParameters.append('Sections', element);
            });
        }
        if (terms) {
            terms.forEach(function (element) {
                queryParameters = queryParameters.append('Terms', element);
            });
        }
        if (classTeacher !== undefined && classTeacher !== null) {
            queryParameters = queryParameters.set('ClassTeacher', classTeacher);
        }
        if (testDateBegin !== undefined && testDateBegin !== null) {
            queryParameters = queryParameters.set('TestDateBegin', testDateBegin.toISOString());
        }
        if (testDateEnd !== undefined && testDateEnd !== null) {
            queryParameters = queryParameters.set('TestDateEnd', testDateEnd.toISOString());
        }
        if (testName !== undefined && testName !== null) {
            queryParameters = queryParameters.set('TestName', testName);
        }
        if (subject !== undefined && subject !== null) {
            queryParameters = queryParameters.set('Subject', subject);
        }
        if (subjectTeacher !== undefined && subjectTeacher !== null) {
            queryParameters = queryParameters.set('SubjectTeacher', subjectTeacher);
        }
        if (testStatus) {
            testStatus.forEach(function (element) {
                queryParameters = queryParameters.append('TestStatus', element);
            });
        }
        if (sortOrder !== undefined && sortOrder !== null) {
            queryParameters = queryParameters.set('SortOrder', sortOrder);
        }
        if (sortBy !== undefined && sortBy !== null) {
            queryParameters = queryParameters.set('SortBy', sortBy);
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/SchoolReports/Examination-schedule-report", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SchoolReportsService.prototype.studentFeeReceipts = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling studentFeeReceipts.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        if (id !== undefined && id !== null) {
            queryParameters = queryParameters.set('Id', id);
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/SchoolReports/student-fee-recipts", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SchoolReportsService.prototype.marksEntryReport = function (classes, sections, gradingTerms, courseCategories, courses, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_5__["CustomHttpUrlEncodingCodec"]() });
        if (classes) {
            classes.forEach(function (element) {
                queryParameters = queryParameters.append('Classes', element);
            });
        }
        if (sections) {
            sections.forEach(function (element) {
                queryParameters = queryParameters.append('Sections', element);
            });
        }
        if (gradingTerms) {
            gradingTerms.forEach(function (element) {
                queryParameters = queryParameters.append('GradingTerms', element);
            });
        }
        if (courseCategories) {
            courseCategories.forEach(function (element) {
                queryParameters = queryParameters.append('CourseCategories', element);
            });
        }
        if (courses) {
            courses.forEach(function (element) {
                queryParameters = queryParameters.append('Courses', element);
            });
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/SchoolReports/students-marks-entry", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SchoolReportsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_base_variables__WEBPACK_IMPORTED_MODULE_4__["BASE_PATH"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String, _base_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"],
            _generate_pdf_service__WEBPACK_IMPORTED_MODULE_10__["ReportGenerationService"],
            _file_management_store_service__WEBPACK_IMPORTED_MODULE_7__["StoreService"], _manage_school_school_service__WEBPACK_IMPORTED_MODULE_9__["SchoolService"]])
    ], SchoolReportsService);
    return SchoolReportsService;
}());



/***/ })

}]);
//# sourceMappingURL=app-modules-reports-reports-module.js.map