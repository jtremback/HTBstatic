function annoList($scope) {
  $scope.annotations= [
    {
      name:"RLCoolstein", 
      time:"about 3 hours ago", 
      page:"Courageous class battlecruiser - Wikipedia, the free encyclopedia",
      link:"http://en.wikipedia.org/wiki/Courageous_class_battlecruiser", 
      excerpt:"The Courageous class comprised three battlecruisers built for the Royal Navy during World War I. Nominally designed to support Admiral of the Fleet Lord John Fisher's Baltic Project, which was intended to land troops on the German Baltic Coast, ships of this class were fast but very lightly armoured with only a few heavy guns. To maximize their speed, the Courageous-class battlecruisers were the first capital ships of the Royal Navy to use geared steam turbines and small-tube boilers. ",
      text: "<p>I have two separate editions of Brooks, with two difference sets of pagination. In neither edition, on page 170, is there anything to actually confirm, Data from a 15-foot (4.6 m) rangefinder in the armoured hood was input into a Mk IV* Dreyer Fire Control Table located in the Transmitting Station (TS) where it was converted into range and deflection data for use by the guns. I would suggest a closer reading of the pages involved.</p>"
    },
    {
      name:"RLCoolstein", 
      time:"about 3 hours ago", 
      page:"Courageous class battlecruiser - Wikipedia, the free encyclopedia",
      link:"http://en.wikipedia.org/wiki/Courageous_class_battlecruiser", 
      excerpt:"The Courageous class comprised three battlecruisers built for the Royal Navy during World War I. Nominally designed to support Admiral of the Fleet Lord John Fisher's Baltic Project, which was intended to land troops on the German Baltic Coast, ships of this class were fast but very lightly armoured with only a few heavy guns. To maximize their speed, the Courageous-class battlecruisers were the first capital ships of the Royal Navy to use geared steam turbines and small-tube boilers. ",
      text: "<p>I have two separate editions of Brooks, with two difference sets of pagination. In neither edition, on page 170, is there anything to actually confirm, Data from a 15-foot (4.6 m) rangefinder in the armoured hood was input into a Mk IV* Dreyer Fire Control Table located in the Transmitting Station (TS) where it was converted into range and deflection data for use by the guns. I would suggest a closer reading of the pages involved.</p>"
    }
  ];
  $scope.render = function(e) {
  return $(e).html();
  }
}
;
