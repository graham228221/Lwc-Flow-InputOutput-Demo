import { LightningElement, api } from 'lwc';

export default class FlowWithInputAndOutput extends LightningElement {
    @api cases; //sent in via a parameter

    @api
    get selectedCase() {
        return this._selectedCase;
    }

    _selectedCase;

    columns = [
        { 
            label: 'Case Number', 
            fieldName: 'CaseNumber', 
            initialWidth: 100,
            hideDefaultActions: true,
            cellAttributes: { alignment: 'center' },
        },
        { 
            label: 'Created', 
            fieldName: 'CreatedDate', 
            type:"date", 
            typeAttributes: { 
                day: "numeric",
                month: "numeric",
                year: "numeric",
                hour: '2-digit', 
                minute: '2-digit'
            }, 
            initialWidth: 130,
            hideDefaultActions: true,
            cellAttributes: { alignment: 'center' },
        },
        { 
            label: 'Status', 
            fieldName: 'Status', 
            initialWidth: 90,
            hideDefaultActions: true,
            cellAttributes: { alignment: 'center' },
        },
        { 
            label: 'Subject', 
            fieldName: 'Subject',
            hideDefaultActions: true,
        },
    ];
    
    handleCaseSelection(event){
        this._selectedCase = event.detail.selectedRows[0];
        console.log(this._selectedCase);
    }



}