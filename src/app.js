import { LightningElement, track } from 'lwc';

export default class PerformanceReport extends LightningElement {

  @track selectedUser = 'None';
  @track selectedAccordian='';
  @track Userlist = ["Aman", "Kripa", "Sahil", "Mubsher", "Rizvi"];

  showUserList() {
      this.template.querySelector('.slds-dropdown-trigger_click').classList.add('slds-is-open');
  }
  onOutMous(event) {
      this.template.querySelector('.slds-dropdown-trigger_click').classList.remove('slds-is-open');
      this.selectedUser = event.currentTarget.dataset.picklistvalue;
  }
  tabchange() {


      this.template.querySelector('.tab2019').classList.add('slds-is-active');
      this.template.querySelector('.tab2018').classList.remove('slds-is-active');

  }

  // This method used for only dynammic toggle handling
  isShow(event)
  {
    
const currentClass='[data-accordian="'+event.currentTarget.dataset.currentAcco+'"]';

console.log('Selected accordians:'+this.selectedAccordian);

if(this.selectedAccordian!=null && this.selectedAccordian!='' && this.selectedAccordian!=''&& !currentClass.includes(this.selectedAccordian)){
console.log(currentClass.includes(this.selectedAccordian));//[data-id="overview"]
this.template.querySelector(this.selectedAccordian).classList.add('slds-hide');
this.template.querySelector(currentClass).classList.remove('slds-hide');
this.template.querySelector(currentClass).classList.add('slds-show');
this.selectedAccordian=currentClass;

} 
if(currentClass.includes(this.selectedAccordian) && this.selectedAccordian!=''&&  this.selectedAccordian!=null)
{
this.template.querySelector(this.selectedAccordian).classList.add('slds-hide');
this.selectedAccordian='';
}
else
{
this.template.querySelector(currentClass).classList.remove('slds-hide');
this.template.querySelector(currentClass).classList.add('slds-show');

this.selectedAccordian=currentClass;
}

  }






}