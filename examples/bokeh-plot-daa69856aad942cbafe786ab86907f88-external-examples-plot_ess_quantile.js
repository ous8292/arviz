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
    
      
      
    
      var element = document.getElementById("0d5a294c-032c-4698-97ba-b96c5de5ec76");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '0d5a294c-032c-4698-97ba-b96c5de5ec76' but no matching script tag was found.")
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
                    
                  var docs_json = '{"4c41985e-1c03-490c-bb4b-48d8e876b7a0":{"roots":{"references":[{"attributes":{},"id":"17576","type":"PanTool"},{"attributes":{"overlay":{"id":"17584"}},"id":"17579","type":"LassoSelectTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"17584","type":"PolyAnnotation"},{"attributes":{},"id":"17575","type":"ResetTool"},{"attributes":{"axis":{"id":"17567"},"ticker":null},"id":"17570","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17575"},{"id":"17576"},{"id":"17577"},{"id":"17578"},{"id":"17579"},{"id":"17580"},{"id":"17581"},{"id":"17582"}]},"id":"17585","type":"Toolbar"},{"attributes":{},"id":"17578","type":"WheelZoomTool"},{"attributes":{},"id":"17580","type":"UndoTool"},{"attributes":{"children":[{"id":"17614"},{"id":"17612"}]},"id":"17615","type":"Column"},{"attributes":{"data_source":{"id":"17594"},"glyph":{"id":"17595"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17596"},"selection_glyph":null,"view":{"id":"17598"}},"id":"17597","type":"GlyphRenderer"},{"attributes":{"text":"sigma"},"id":"17600","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"17583","type":"BoxAnnotation"},{"attributes":{"axis":{"id":"17571"},"dimension":1,"ticker":null},"id":"17574","type":"Grid"},{"attributes":{"overlay":{"id":"17583"}},"id":"17577","type":"BoxZoomTool"},{"attributes":{"axis_label":"ESS for quantiles","formatter":{"id":"17604"},"ticker":{"id":"17572"}},"id":"17571","type":"LinearAxis"},{"attributes":{},"id":"17610","type":"UnionRenderers"},{"attributes":{},"id":"17561","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17596","type":"Circle"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17595","type":"Circle"},{"attributes":{},"id":"17609","type":"Selection"},{"attributes":{},"id":"17559","type":"DataRange1d"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"17606"},"ticker":{"id":"17568"}},"id":"17567","type":"LinearAxis"},{"attributes":{},"id":"17581","type":"SaveTool"},{"attributes":{},"id":"17572","type":"BasicTicker"},{"attributes":{},"id":"17563","type":"LinearScale"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"R2riOHxslUDJrxt4rb2XQC8UfR7VtJlAMRHUGWndmUBKO3TVSyObQNp1b/0mJp1ASsbCePPwnkB+Du/cq5qgQH8ihBoHoKBAjJ8qLZB5oECYlOwhLnyfQD8CvMP22p1A58Gm42rqnEALInuU09KdQICWYY7d25xA2A/0ZSlsnEBzLBEly1mdQE4F40OedZlAKS7heDC7m0BmB8tcKnmYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17609"},"selection_policy":{"id":"17610"}},"id":"17594","type":"ColumnDataSource"},{"attributes":{},"id":"17568","type":"BasicTicker"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"17599","type":"Span"},{"attributes":{"toolbar":{"id":"17613"},"toolbar_location":"above"},"id":"17614","type":"ToolbarBox"},{"attributes":{},"id":"17565","type":"LinearScale"},{"attributes":{"source":{"id":"17594"}},"id":"17598","type":"CDSView"},{"attributes":{},"id":"17606","type":"BasicTickFormatter"},{"attributes":{},"id":"17604","type":"BasicTickFormatter"},{"attributes":{"children":[[{"id":"17558"},0,0]]},"id":"17612","type":"GridBox"},{"attributes":{"callback":null},"id":"17582","type":"HoverTool"},{"attributes":{"toolbars":[{"id":"17585"}],"tools":[{"id":"17575"},{"id":"17576"},{"id":"17577"},{"id":"17578"},{"id":"17579"},{"id":"17580"},{"id":"17581"},{"id":"17582"}]},"id":"17613","type":"ProxyToolbar"},{"attributes":{"below":[{"id":"17567"}],"center":[{"id":"17570"},{"id":"17574"}],"left":[{"id":"17571"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"17597"},{"id":"17599"}],"title":{"id":"17600"},"toolbar":{"id":"17585"},"toolbar_location":null,"x_range":{"id":"17559"},"x_scale":{"id":"17563"},"y_range":{"id":"17561"},"y_scale":{"id":"17565"}},"id":"17558","subtype":"Figure","type":"Plot"}],"root_ids":["17615"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"4c41985e-1c03-490c-bb4b-48d8e876b7a0","root_ids":["17615"],"roots":{"17615":"0d5a294c-032c-4698-97ba-b96c5de5ec76"}}];
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