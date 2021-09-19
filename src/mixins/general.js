export default {
    data() {
        return {
            pagination: {
                links: '',
                total: '',
                count: '',
                path: '',
                currentPage: '',
                next_page_url: '',
                prev_page_url: ''
            },
        }
    },
  
    methods: {
   
        fillPagination(data) {
            this.pagination.links = data.links;
            this.pagination.total = data.total
            this.pagination.count = data.to;
            this.pagination.path = data.path;
            this.pagination.currentPage = data.current_page
        },
    },
}
