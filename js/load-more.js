// Load More Functionality - Universal & Simple
class LoadMoreManager {
    constructor(containerSelector, loadMoreSelector, options = {}) {
        this.container = document.querySelector(containerSelector);
        this.loadMoreBtn = document.querySelector(loadMoreSelector);
        this.options = {
            initialItems: 5,
            itemsPerLoad: 3,
            contentSelector: '.a965_brand_index_list',
            ...options
        };
        
        this.currentIndex = this.options.initialItems;
        this.isLoading = false;
        this.allContent = [];
        
        this.init();
    }
    
    init() {
        if (!this.container || !this.loadMoreBtn) {
            console.error('Container or load more button not found');
            return;
        }
        
        this.extractContentFromHTML();
        
        this.loadMoreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.loadMore();
        });
        
        this.showContent(0, this.options.initialItems);
        
        if (this.options.initialItems >= this.allContent.length) {
            this.hideLoadMoreButton();
        }
    }
    
    extractContentFromHTML() {
        const existingElements = this.container.querySelectorAll(this.options.contentSelector);
        
        existingElements.forEach((element) => {
            element.style.display = 'none';
            this.allContent.push({
                element: element.cloneNode(true)
            });
        });
    }
    
    showContent(startIndex, endIndex) {
        for (let i = startIndex; i < endIndex && i < this.allContent.length; i++) {
            const contentElement = this.allContent[i].element;
            this.container.insertBefore(contentElement, this.loadMoreBtn);
            setTimeout(() => {
                contentElement.style.display = 'flex';
                contentElement.style.opacity = '0';
                contentElement.style.transition = 'opacity 0.5s ease-in-out';
                
                setTimeout(() => {
                    contentElement.style.opacity = '1';
                }, 50);
            }, (i - startIndex) * 200);
        }
    }
    
    loadMore() {
        if (this.isLoading) return;
        
        this.isLoading = true;
        const endIndex = Math.min(this.currentIndex + this.options.itemsPerLoad, this.allContent.length);
        
        if (this.currentIndex < this.allContent.length) {
            this.showContent(this.currentIndex, endIndex);
            this.currentIndex = endIndex;
            
            if (this.currentIndex >= this.allContent.length) {
                this.hideLoadMoreButton();
            }
        }
        
        this.isLoading = false;
    }
    
    hideLoadMoreButton() {
        this.loadMoreBtn.style.display = 'none';
    }
    
    showLoadMoreButton() {
        this.loadMoreBtn.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const brandContainer = document.querySelector('#a965_brand_index');
    const loadMoreBtn = document.querySelector('#a965_load');
    
    if (brandContainer && loadMoreBtn) {
        const contentCount = brandContainer.querySelectorAll('.a965_brand_index_list').length;
        
        let initialItems = 5;
        let itemsPerLoad = 3;
        
        if (contentCount <= 5) {
            initialItems = contentCount;
            itemsPerLoad = 0; // Tidak perlu load more
        } else if (contentCount <= 8) {
            initialItems = 5;
            itemsPerLoad = contentCount - 5;
        }
        
        new LoadMoreManager('#a965_brand_index', '#a965_load', {
            initialItems: initialItems,
            itemsPerLoad: itemsPerLoad
        });
    }
});

if (typeof module !== 'undefined' && module.exports) {
    module.exports = LoadMoreManager;
} 