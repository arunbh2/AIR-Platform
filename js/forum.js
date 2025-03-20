// AIR Platform Forum JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Category Selection
    const categoryItems = document.querySelectorAll('.category-item');
    
    categoryItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all items
            categoryItems.forEach(cat => cat.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // For demo purposes we'd filter topics here
            // In a real implementation with Discourse, this would navigate to the category page
            console.log('Category selected:', this.querySelector('.category-name').textContent);
        });
    });
    
    // Tag Selection
    const tagItems = document.querySelectorAll('.tag');
    
    tagItems.forEach(tag => {
        tag.addEventListener('click', function(e) {
            e.preventDefault();
            
            // For demo purposes we'd filter topics by tag here
            // In a real implementation with Discourse, this would navigate to the tag page
            console.log('Tag selected:', this.textContent);
        });
    });
    
    // Forum Search
    const searchForm = document.querySelector('.forum-search');
    
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const searchInput = this.querySelector('input');
            const searchTerm = searchInput.value.trim();
            
            if (searchTerm) {
                // For demo purposes we'd perform a search here
                // In a real implementation with Discourse, this would navigate to the search results page
                console.log('Search term:', searchTerm);
                
                // Clear search input
                searchInput.value = '';
            }
        });
    }
    
    // Pagination
    const paginationLinks = document.querySelectorAll('.pagination-page, .pagination-prev, .pagination-next');
    
    paginationLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Don't do anything if the link is already active or disabled
            if (this.classList.contains('active') || this.classList.contains('disabled')) {
                return;
            }
            
            // For demo purposes, we'll just toggle active class
            // In a real implementation with Discourse, this would navigate to the appropriate page
            document.querySelectorAll('.pagination-page').forEach(page => {
                page.classList.remove('active');
            });
            
            if (this.classList.contains('pagination-page')) {
                this.classList.add('active');
            }
            
            // Simulate page change (in a real app this would load new content)
            console.log('Page changed to:', this.textContent.trim());
            
            // Scroll to top of forum content
            document.querySelector('.forum-content').scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Responsive handling for sidebar
    const handleResponsiveSidebar = () => {
        const sidebar = document.querySelector('.forum-sidebar');
        const content = document.querySelector('.forum-content');
        
        if (window.innerWidth <= 768) {
            // In mobile view, add toggle functionality for sidebar
            if (!document.querySelector('.sidebar-toggle')) {
                // Create sidebar toggle button
                const sidebarToggle = document.createElement('button');
                sidebarToggle.className = 'btn btn-primary sidebar-toggle';
                sidebarToggle.innerHTML = '<i data-lucide="filter"></i> Filter Options';
                
                // Insert before the first content section
                content.insertBefore(sidebarToggle, content.firstChild);
                
                // Initialize Lucide icon
                lucide.createIcons();
                
                // Add click event
                sidebarToggle.addEventListener('click', function() {
                    sidebar.classList.toggle('active');
                    
                    // Change button text based on state
                    if (sidebar.classList.contains('active')) {
                        sidebarToggle.innerHTML = '<i data-lucide="x"></i> Close Filters';
                    } else {
                        sidebarToggle.innerHTML = '<i data-lucide="filter"></i> Filter Options';
                    }
                    
                    // Initialize Lucide icon again after changing innerHTML
                    lucide.createIcons();
                });
            }
        } else {
            // In desktop view, remove toggle functionality
            const sidebarToggle = document.querySelector('.sidebar-toggle');
            if (sidebarToggle) {
                sidebarToggle.remove();
            }
            
            // Ensure sidebar is visible in desktop view
            sidebar.classList.remove('active');
        }
    };
    
    // Initial call
    handleResponsiveSidebar();
    
    // Call on window resize
    window.addEventListener('resize', handleResponsiveSidebar);
});
