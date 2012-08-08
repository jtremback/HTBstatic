(function() {
  var SimpleBubble, SimpleVis, colors,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  colors = new d3.scale.category10();

  SimpleBubble = (function() {

    SimpleBubble.name = 'SimpleBubble';

    function SimpleBubble(data, id, canvas) {
      this.data = data;
      this.id = id;
      this.canvas = canvas;
      this.hideToolTip = __bind(this.hideToolTip, this);

      this.showToolTip = __bind(this.showToolTip, this);

      this.el = null;
      this.x = 0;
      this.y = 0;
      this.radius = 0;
      this.boxSize = 0;
      this.isDragging = false;
      this.isSelected = false;
      this.tooltip = null;
      this.init();
    }

    SimpleBubble.prototype.init = function() {
      this.el = $("<div class='bubble' id='bubble-" + this.id + "'></div>");
      this.elFill = $("<div class='bubbleFill'></div>");
      this.el.append(this.elFill);
      this.el.on('mouseover', this.showToolTip);
      this.el.on('mouseout', this.hideToolTip);
      this.radius = this.data;
      this.boxSize = this.data * 2;
      return this.elFill.css({
        width: this.boxSize,
        height: this.boxSize,
        left: -this.boxSize / 2,
        top: -this.boxSize / 2,
        "background-color": colors(this.data)
      });
    };

    SimpleBubble.prototype.showToolTip = function() {
      this.tooltip = $("<div class='tooltip'></div>");
      this.tooltip.html("<div class='tooltipFill'><p>" + this.data + "</p></div>");
      this.tooltip.css({
        left: this.x + this.radius * 0.5,
        top: this.y + this.radius * 0.5
      });
      return this.canvas.append(this.tooltip);
    };

    SimpleBubble.prototype.hideToolTip = function() {
      return $(".tooltip").remove();
    };

    SimpleBubble.prototype.move = function() {
      return this.el.css({
        top: this.y,
        left: this.x
      });
    };

    return SimpleBubble;

  })();

  SimpleVis = (function() {

    SimpleVis.name = 'SimpleVis';

    function SimpleVis(canvas, data) {
      this.data = data;
      this.tickHandler = __bind(this.tickHandler, this);

      this.width = 300;
      this.height = 400;
      this.canvas = $(canvas);
      this.force = null;
      this.bubbles = [];
      this.centers = [
        {
          x: 200,
          y: 200
        }, {
          x: 100,
          y: 200
        }, {
          x: 600,
          y: 200
        }
      ];
      this.bin = d3.scale.ordinal().range([0, 1, 2]);
      this.init();
    }

    SimpleVis.prototype.bubbleCharge = function(d) {
      return -Math.pow(d.radius, 1) * 12;
    };

    SimpleVis.prototype.makeBubbles = function(data, i, canvas) {
      var b;
      b = new SimpleBubble(data, i, canvas);
      b.x = b.boxSize + (80 * (i + 1));
      b.y = b.boxSize + (10 * (i + 1));
      this.bubbles.push(b);
      return this.canvas.append(b.el);
    };

    SimpleVis.prototype.setBubbleLocation = function(bubble, alpha) {
      var center;
      center = this.centers[this.bin(bubble.id)];
      bubble.y = bubble.y + (center.y - bubble.y) * 0.115 * alpha;
      bubble.x = bubble.x + (center.x - bubble.x) * 0.115 * alpha;
      return [bubble.x, bubble.y];
    };

    SimpleVis.prototype.updateBubbleLocation = function(bubble, alpha) {
      this.setBubbleLocation(bubble, alpha);
      return bubble.move();
    };

    SimpleVis.prototype.tickHandler = function(event) {
      var bubble, _i, _len, _ref, _results;
      _ref = this.bubbles;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        bubble = _ref[_i];
        _results.push(this.updateBubbleLocation(bubble, event.alpha));
      }
      return _results;
    };

    SimpleVis.prototype.init = function() {
      var d, i, _i, _len, _ref;
      this.canvas.css({
        width: this.width,
        height: this.height,
        "background-color": "#eee",
        position: "relative"
      });
      _ref = this.data;
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        d = _ref[i];
        this.makeBubbles(d, i, this.canvas);
      }
      this.force = d3.layout.force().nodes(this.bubbles).gravity(0).charge(this.bubbleCharge).friction(0.87).size([this.width, this.height]).on('tick', this.tickHandler);
      return this.force.start();
    };

    return SimpleVis;

  })();

  $(document).ready(function() {
    var vis;
    vis = new SimpleVis("#canvas", [12, 33, 20, 10, 60, 10, 25, 44, 10, 10, 14, 25, 8]);
    return $("#move").on("click", function(e) {
      vis.bin.range(vis.bin.range().reverse());
      vis.force.resume();
      return false;
    });
  });

}).call(this);