var Calendar = function (config) {
    return (typeof(config) === "object" && Array.isArray(config) === false) ? this.__init__(config) : console.log("Error: Invalid config parameter on Calendar initialization.");
};

Calendar.prototype = {

    __init__    : function (config) {
        var self = this;
        self.arcClass       = typeof(config.arcClass)       === "string"    ? config.arcClass       : "arc",
        self.segmentClass   = typeof(config.segmentClass)   === "string"    ? config.segmentClass   : "month",
        self.ringClass      = typeof(config.ringClass)      === "string"    ? config.ringClass      : "day",
        self.outerRadius    = typeof(config.outerRadius)    === "number"    ? config.outerRadius    : 328,
        self.innerRadius    = typeof(config.innerRadius)    === "number"    ? config.innerRadius    : 18,
        self.strokeColor    = typeof(config.strokeColor)    === "string"    ? config.strokeColor    : "transparent",
        self.strokeWidth    = typeof(config.strokeWidth)    === "number"    ? config.strokeWidth    : 2,
        self.colors         = Array.isArray(config.colors)  === true        ? config.colors         : ['#0000FF', '#490E7C', '#7438A8', '#AF1BFA', '#FF0000', '#FF7800', '#FFAE00', '#FFF000', '#CCFF00', '#46A81A', '#0F7B00', '#045910', '#20D382', '#05E5D4', '#09AEDB'],
        // Computed Values
        self.datemodel       = {
            year            : new Date().getFullYear(),
            months          : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            days            : []
        };
        // Get Days in Month
        for (var i = 1; i <= self.datemodel.months.length; i++) {
            self.datemodel.days.push(new Date(self.datemodel.year, i, 0).getDate());
        }
        // Compute Ring Widths
        self.ringWidth      = (self.outerRadius - self.innerRadius) / Math.max(self.datemodel.days),
        self.segmentAngle   = 360 / self.months.length;
        // Generate Arcs
        for (var i = 0; i < self.datemodel.months.length; i++) {
            for (var j = 0; j < self.datemodel.days[i]; j++) {
                var arc = d3.svg.arc()
                    .innerRadius(self.innerRadius + (self.ringWidth * j))
                    .outerRadius(self.innerRadius + (self.ringWidth * j + 1))
                    .startAngle(self.segmentAngle * i * (Math.pi / 180))
                    .endAngle(self.segmentAngle * (i + 1) * (Math.pi / 180));
                calendar.svg.append("path")
                    .attr("d", arc)
                    .attr("class", self.arcClass + " " + self.segmentClass + "_" + i + " " + self.ringClass + "_" + j)
                    .attr("data-arc", '{"day": ' + self.)

            }
        }   
    }

}

var calendar = new Calendar({});

// 328, 18, {top: 20, right: 0, bottom: 20, left: 20}, 2, '#07153D', ['#0000FF', '#490E7C', '#7438A8', '#AF1BFA', '#FF0000', '#FF7800', '#FFAE00', '#FFF000', '#CCFF00', '#46A81A', '#0F7B00', '#045910', '#20D382', '#05E5D4', '#09AEDB'], 15, 18

// calendar.init = function (outer, inner, strokeColor, strokeWidth, segments, rings, colors, sports, days) {
//              var ringWidth = (outer - inner)/rings;
//              var offsetOdd = 0;
//              var offsetEven = calendar.rings/2;
//              for(var i = 0; i < segments; i++) {
//                  for(var j = 0; j < rings; j++) {
//                      if (calendar.mapping[i].day[j] && i%2 == 0) {
//                          var position = i + offsetOdd;
//                          var arc = d3.svg.arc()
//                                  .innerRadius(inner + (ringWidth * j))
//                                  .outerRadius(inner + (ringWidth * (j + 1)))
//                                  .startAngle((360/segments) * (i + offsetOdd) * (pi/180))
//                                  .endAngle((360/segments) * (i + 1 + offsetOdd) * (pi/180));
//                              calendar.svg.append("path")
//                                  .attr("d", arc)
//                                  .attr("class", ("sportArc day" + days[days.length - j] + " " + sports[i]))
//                                  .attr("data-arc", '{"day": ' + days[days.length - j] + ', "sport": "' + sports[i] + '"}')
//                                  .attr("fill", colors[i])
//                                  .attr("stroke", strokeColor)
//                                  .attr("stroke-width", strokeWidth + "px")
//                                  .attr("transform", "translate(" + calendar.width/2 + ", " + calendar.height/2 + ")")
//                                  .on("mouseover", function () {
//                                      var arcData = d3.select(this).attr("data-arc"); 
//                                          calendar.hoverOver(arcData);
//                                  })
//                                  .on("click", function () {
//                                      var arcData = d3.select(this).attr("data-arc"); 
//                                          calendar.selectArc(arcData); 
//                                  })
//                                  .on("touchend", function (d) {
//                                      var arcData = d3.select(this).attr("data-arc");
//                                          calendar.selectArc(arcData);
//                                  })
//                                  .on("mouseleave", function () {
//                                      var arcData = d3.select(this).attr("data-arc"); 
//                                          calendar.hoverOut(arcData);
//                                  });
//                      };
//                      if (calendar.mapping[i].day[j] && i%2 == 1) {
//                          var position = i - offsetEven;
//                          var arc = d3.svg.arc()
//                                  .innerRadius(inner + (ringWidth * j))
//                                  .outerRadius(inner + (ringWidth * (j + 1)))
//                                  .startAngle((360/segments) * (i + offsetEven) * (pi/180))
//                                  .endAngle((360/segments) * (i + 1 + offsetEven) * (pi/180));
//                              calendar.svg.append("path")
//                                  .attr("d", arc)
//                                  .attr("class", ("sportArc day" + days[days.length - j] + " " + sports[i]))
//                                  .attr("data-arc", '{"day": ' + days[days.length - j] + ', "sport": "' + sports[i] + '"}')
//                                  .attr("fill", colors[i])
//                                  .attr("stroke", strokeColor)
//                                  .attr("stroke-width", strokeWidth + "px")
//                                  .attr("transform", "translate(" + calendar.width/2 + ", " + calendar.height/2 + ")")
//                                  .on("mouseover", function () {
//                                      var arcData = d3.select(this).attr("data-arc"); 
//                                          calendar.hoverOver(arcData);
//                                  })
//                                  .on("click", function (d) {
//                                      var arcData = d3.select(this).attr("data-arc"); 
//                                          calendar.selectArc(arcData);
//                                  })
//                                  .on("touchend", function (d) {
//                                      var arcData = d3.select(this).attr("data-arc");
//                                          calendar.selectArc(arcData);
//                                  })
//                                  .on("mouseleave", function (d) {
//                                      var arcData = d3.select(this).attr("data-arc"); 
//                                          calendar.hoverOut(arcData);
//                                  });
//                      };
//                  };
//                  offsetOdd -= .5;
//                  offsetEven -= .5;
//              };
//          };