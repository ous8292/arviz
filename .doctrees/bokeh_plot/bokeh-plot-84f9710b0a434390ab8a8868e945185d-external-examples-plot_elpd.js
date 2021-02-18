(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("df548098-5945-41c9-a1c8-babd03dc7d65");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'df548098-5945-41c9-a1c8-babd03dc7d65' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js": "T2yuo9Oe71Cz/I4X9Ac5+gpEa5a8PpJCDlqKYO0CfAuEszu1JrXLl8YugMqYe3sM", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js": "98GDGJ0kOMCUMUePhksaQ/GYgB3+NH9h996V88sh3aOiUNX3N+fLXAtry6xctSZ6", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js": "89bArO+nlbP3sgakeHjCo1JYxYR5wufVgA3IbUvDY+K7w4zyxJqssu7wVnfeKCq8"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"02850eca-1a13-40fd-aeee-18d8acfdc0af":{"roots":{"references":[{"attributes":{"axis":{"id":"17080"},"dimension":1,"ticker":null},"id":"17083","type":"Grid"},{"attributes":{},"id":"17113","type":"BasicTickFormatter"},{"attributes":{"text":"Centered eight - Non centered eight"},"id":"17107","type":"Title"},{"attributes":{},"id":"17087","type":"WheelZoomTool"},{"attributes":{"children":[[{"id":"17067"},0,0]]},"id":"17119","type":"GridBox"},{"attributes":{"overlay":{"id":"17092"}},"id":"17086","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"17113"},"ticker":{"id":"17077"}},"id":"17076","type":"LinearAxis"},{"attributes":{"toolbars":[{"id":"17094"}],"tools":[{"id":"17084"},{"id":"17085"},{"id":"17086"},{"id":"17087"},{"id":"17088"},{"id":"17089"},{"id":"17090"},{"id":"17091"}]},"id":"17120","type":"ProxyToolbar"},{"attributes":{},"id":"17117","type":"UnionRenderers"},{"attributes":{},"id":"17085","type":"PanTool"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"17116"},"selection_policy":{"id":"17117"}},"id":"17104","type":"ColumnDataSource"},{"attributes":{},"id":"17089","type":"UndoTool"},{"attributes":{"source":{"id":"17104"}},"id":"17106","type":"CDSView"},{"attributes":{"axis":{"id":"17076"},"ticker":null},"id":"17079","type":"Grid"},{"attributes":{},"id":"17116","type":"Selection"},{"attributes":{},"id":"17077","type":"BasicTicker"},{"attributes":{"below":[{"id":"17076"}],"center":[{"id":"17079"},{"id":"17083"}],"left":[{"id":"17080"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"17105"}],"title":{"id":"17107"},"toolbar":{"id":"17094"},"toolbar_location":null,"x_range":{"id":"17068"},"x_scale":{"id":"17072"},"y_range":{"id":"17070"},"y_scale":{"id":"17074"}},"id":"17067","subtype":"Figure","type":"Plot"},{"attributes":{"toolbar":{"id":"17120"},"toolbar_location":"above"},"id":"17121","type":"ToolbarBox"},{"attributes":{},"id":"17111","type":"BasicTickFormatter"},{"attributes":{},"id":"17081","type":"BasicTicker"},{"attributes":{},"id":"17072","type":"LinearScale"},{"attributes":{"data_source":{"id":"17104"},"glyph":{"id":"17103"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"17106"}},"id":"17105","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"17093"}},"id":"17088","type":"LassoSelectTool"},{"attributes":{"callback":null},"id":"17091","type":"HoverTool"},{"attributes":{},"id":"17074","type":"LinearScale"},{"attributes":{"line_color":{"value":"#2a2eec"},"size":{"field":"sizes","units":"screen"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"17103","type":"Cross"},{"attributes":{},"id":"17084","type":"ResetTool"},{"attributes":{"children":[{"id":"17121"},{"id":"17119"}]},"id":"17122","type":"Column"},{"attributes":{},"id":"17090","type":"SaveTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"17093","type":"PolyAnnotation"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"17092","type":"BoxAnnotation"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"17111"},"ticker":{"id":"17081"}},"id":"17080","type":"LinearAxis"},{"attributes":{},"id":"17070","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17084"},{"id":"17085"},{"id":"17086"},{"id":"17087"},{"id":"17088"},{"id":"17089"},{"id":"17090"},{"id":"17091"}]},"id":"17094","type":"Toolbar"},{"attributes":{},"id":"17068","type":"DataRange1d"}],"root_ids":["17122"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"02850eca-1a13-40fd-aeee-18d8acfdc0af","root_ids":["17122"],"roots":{"17122":"df548098-5945-41c9-a1c8-babd03dc7d65"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();