export class DashboardPage{
    constructor(page){
        this.page = page; 
        this.dashboardHeader = page.getByRole('heading', { name: 'Dashboard' })
    }

    async checkDashboardPage(){
        return this.dashboardHeader
    }
}