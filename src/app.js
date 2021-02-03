import { LightningElement, track } from 'lwc';


export default class PerformanceReport extends LightningElement {

  @track selectedUser = 'None';
  @track getclassName='';
  @track selectedAccordian='';
  @track Userlist = ["Aman", "Kripa", "Sahil", "Mubsher", "Rizvi"];
  @track Quaters=["Quater 1","Quater 2","Quater 3","Quater 4"]

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
// class name
const getclassName=''+this.template.querySelector(currentClass).classList;
console.log('Current class '+(getclassName).includes('slds-hide'));
console.log('Selected accordians:'+this.selectedAccordian);
console.log('Current accordians:'+currentClass);

if(this.selectedAccordian!=null && this.selectedAccordian!='' && this.selectedAccordian!=''&& !currentClass.includes(this.selectedAccordian)){
console.log(currentClass.includes(this.selectedAccordian));//[data-id="overview"]
this.template.querySelector(this.selectedAccordian).classList.remove('slds-shows');
this.template.querySelector(this.selectedAccordian).classList.add('slds-hide');
this.template.querySelector(currentClass).classList.remove('slds-hide');
this.template.querySelector(currentClass).classList.add('slds-shows');


} 
if(currentClass.includes(this.selectedAccordian) && this.selectedAccordian!=''&&  this.selectedAccordian!=null)
{


if(getclassName.includes('slds-hide')){
  this.template.querySelector(this.selectedAccordian).classList.remove('slds-hide');
this.template.querySelector(this.selectedAccordian).classList.add('slds-shows');
}
else
{
  this.template.querySelector(this.selectedAccordian).classList.add('slds-hide');
}

}
else if(!this.selectedAccordian)
{
  
   
  console.log('else execute'+currentClass)
this.template.querySelector(currentClass).classList.remove('slds-hide');


console.log(event.currentTarget.dataset.class);
this.template.querySelector(currentClass).classList.add('slds-shows');


}
this.selectedAccordian=currentClass;
  }

  

}