function Render(container){
    this.render = function(template, data){
        container.append(template(data));
    }
}