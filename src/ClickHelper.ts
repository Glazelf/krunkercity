class ClickHelper {
    public clickEventHandler(): void {
        document.addEventListener('click', (event: MouseEvent) => {
            this.onClick(event);
        });
    };

    private onClick(event: any): void {
        let clickedX = event.X;
        let clickedY = event.X;
        console.log(clickedX);
        console.log(clickedY);
    }
};