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
    
      
      
    
      var element = document.getElementById("a25691a8-81b4-46cc-add2-321406766c3d");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a25691a8-81b4-46cc-add2-321406766c3d' but no matching script tag was found.")
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
                    
                  var docs_json = '{"f4ac1d0e-940e-4eb7-a273-22240c913c6b":{"roots":{"references":[{"attributes":{},"id":"14182","type":"BasicTicker"},{"attributes":{},"id":"14191","type":"SaveTool"},{"attributes":{"callback":null},"id":"14192","type":"HoverTool"},{"attributes":{"below":[{"id":"14177"}],"center":[{"id":"14180"},{"id":"14184"}],"left":[{"id":"14181"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"14206"}],"title":{"id":"14208"},"toolbar":{"id":"14195"},"toolbar_location":null,"x_range":{"id":"14169"},"x_scale":{"id":"14173"},"y_range":{"id":"14171"},"y_scale":{"id":"14175"}},"id":"14168","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"14214"},"ticker":{"id":"14178"}},"id":"14177","type":"LinearAxis"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"14194","type":"PolyAnnotation"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"14193","type":"BoxAnnotation"},{"attributes":{"line_color":{"value":"#2a2eec"},"size":{"field":"sizes","units":"screen"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"14204","type":"Cross"},{"attributes":{},"id":"14188","type":"WheelZoomTool"},{"attributes":{},"id":"14186","type":"PanTool"},{"attributes":{"source":{"id":"14205"}},"id":"14207","type":"CDSView"},{"attributes":{"axis":{"id":"14181"},"dimension":1,"ticker":null},"id":"14184","type":"Grid"},{"attributes":{"overlay":{"id":"14193"}},"id":"14187","type":"BoxZoomTool"},{"attributes":{},"id":"14169","type":"DataRange1d"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"14217"},"selection_policy":{"id":"14218"}},"id":"14205","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"14205"},"glyph":{"id":"14204"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"14207"}},"id":"14206","type":"GlyphRenderer"},{"attributes":{},"id":"14185","type":"ResetTool"},{"attributes":{},"id":"14171","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"14185"},{"id":"14186"},{"id":"14187"},{"id":"14188"},{"id":"14189"},{"id":"14190"},{"id":"14191"},{"id":"14192"}]},"id":"14195","type":"Toolbar"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"14212"},"ticker":{"id":"14182"}},"id":"14181","type":"LinearAxis"},{"attributes":{},"id":"14173","type":"LinearScale"},{"attributes":{"text":"centered model - non centered model"},"id":"14208","type":"Title"},{"attributes":{"axis":{"id":"14177"},"ticker":null},"id":"14180","type":"Grid"},{"attributes":{},"id":"14218","type":"UnionRenderers"},{"attributes":{},"id":"14175","type":"LinearScale"},{"attributes":{},"id":"14214","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"14194"}},"id":"14189","type":"LassoSelectTool"},{"attributes":{},"id":"14178","type":"BasicTicker"},{"attributes":{"toolbars":[{"id":"14195"}],"tools":[{"id":"14185"},{"id":"14186"},{"id":"14187"},{"id":"14188"},{"id":"14189"},{"id":"14190"},{"id":"14191"},{"id":"14192"}]},"id":"14221","type":"ProxyToolbar"},{"attributes":{"toolbar":{"id":"14221"},"toolbar_location":"above"},"id":"14222","type":"ToolbarBox"},{"attributes":{"children":[[{"id":"14168"},0,0]]},"id":"14220","type":"GridBox"},{"attributes":{"children":[{"id":"14222"},{"id":"14220"}]},"id":"14223","type":"Column"},{"attributes":{},"id":"14217","type":"Selection"},{"attributes":{},"id":"14190","type":"UndoTool"},{"attributes":{},"id":"14212","type":"BasicTickFormatter"}],"root_ids":["14223"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"f4ac1d0e-940e-4eb7-a273-22240c913c6b","root_ids":["14223"],"roots":{"14223":"a25691a8-81b4-46cc-add2-321406766c3d"}}];
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