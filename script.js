let myMap;
const init = () => {
    myMap= new ymaps.Map("map",{
        center: [59.945418878863656,30.304545094734962],
        zoom: 14,
        controls: ['zoomControl']
    });
    window.addEventListener("resize", function(event) {
        myMap.setCenter([59.94625081592802,30.294350574214313], 13.3);
      }, true);
    const coords = [
        [59.937334122699625,30.315181679600517],
        [59.94543016601725,30.27896112906341],
        [59.95567656773911,30.291835732334906]
    ];
    const myCollection = new ymaps.GeoObjectCollection ( {},
        {
            draggble: false,
            iconLayout: 'default#image',
            iconImageHref: "./mark.png",
            iconImageSize: [45, 45],
            iconImageOffset: [-26, -46]
        }
    );
    coords.forEach(coords => {
        myCollection.add(new ymaps.Placemark(coords));
    })
    myMap.geoObjects.add(myCollection);

    myMap.behaviors.disable('scrollZoom');
}
ymaps.ready(init);