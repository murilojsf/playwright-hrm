export class DashboardPage{
    constructor(page){
        this.page = page; 
        this.dashboardHeader = page.getByText('Dashboard', { exact: true })
    }

    async checkDashboardPage(){
        await this.dashboardHeader
    }
}