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
    
      
      
    
      var element = document.getElementById("52fc2013-b8f8-4ef5-82ca-bff54690513e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '52fc2013-b8f8-4ef5-82ca-bff54690513e' but no matching script tag was found.")
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
                    
                  var docs_json = '{"5c019446-68ed-44dc-8384-e7d28b738a35":{"roots":{"references":[{"attributes":{"axis_label":"Quantile","formatter":{"id":"35157"},"ticker":{"id":"35063"}},"id":"35062","type":"LinearAxis"},{"attributes":{"text":"mu"},"id":"35151","type":"Title"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"35174"},"selection_policy":{"id":"35175"}},"id":"35148","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"35114","type":"BoxAnnotation"},{"attributes":{"source":{"id":"35139"}},"id":"35143","type":"CDSView"},{"attributes":{},"id":"35076","type":"SaveTool"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"35146","type":"Span"},{"attributes":{"data_source":{"id":"35139"},"glyph":{"id":"35140"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35141"},"selection_glyph":null,"view":{"id":"35143"}},"id":"35142","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2148430013731262},"id":"35144","type":"Span"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"35115","type":"PolyAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35140","type":"Circle"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"35172"},"selection_policy":{"id":"35173"}},"id":"35139","type":"ColumnDataSource"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"35155"},"ticker":{"id":"35067"}},"id":"35066","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"35078","type":"BoxAnnotation"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.15209716424958658},"id":"35145","type":"Span"},{"attributes":{},"id":"35172","type":"Selection"},{"attributes":{},"id":"35173","type":"UnionRenderers"},{"attributes":{"source":{"id":"35134"}},"id":"35136","type":"CDSView"},{"attributes":{"callback":null},"id":"35077","type":"HoverTool"},{"attributes":{},"id":"35160","type":"Selection"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"35079","type":"PolyAnnotation"},{"attributes":{},"id":"35161","type":"UnionRenderers"},{"attributes":{"source":{"id":"35125"}},"id":"35129","type":"CDSView"},{"attributes":{},"id":"35174","type":"Selection"},{"attributes":{},"id":"35175","type":"UnionRenderers"},{"attributes":{},"id":"35162","type":"Selection"},{"attributes":{},"id":"35163","type":"UnionRenderers"},{"attributes":{},"id":"35063","type":"BasicTicker"},{"attributes":{"axis":{"id":"35066"},"dimension":1,"ticker":null},"id":"35069","type":"Grid"},{"attributes":{"children":[{"id":"35179"},{"id":"35177"}]},"id":"35180","type":"Column"},{"attributes":{"data_source":{"id":"35148"},"glyph":{"id":"35147"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"35150"}},"id":"35149","type":"GlyphRenderer"},{"attributes":{"toolbars":[{"id":"35080"},{"id":"35116"}],"tools":[{"id":"35070"},{"id":"35071"},{"id":"35072"},{"id":"35073"},{"id":"35074"},{"id":"35075"},{"id":"35076"},{"id":"35077"},{"id":"35106"},{"id":"35107"},{"id":"35108"},{"id":"35109"},{"id":"35110"},{"id":"35111"},{"id":"35112"},{"id":"35113"}]},"id":"35178","type":"ProxyToolbar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35126","type":"Circle"},{"attributes":{"source":{"id":"35148"}},"id":"35150","type":"CDSView"},{"attributes":{"toolbar":{"id":"35178"},"toolbar_location":"above"},"id":"35179","type":"ToolbarBox"},{"attributes":{"overlay":{"id":"35079"}},"id":"35074","type":"LassoSelectTool"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"35169"},"ticker":{"id":"35099"}},"id":"35098","type":"LinearAxis"},{"attributes":{"end":1,"start":-0.05},"id":"35092","type":"DataRange1d"},{"attributes":{},"id":"35167","type":"BasicTickFormatter"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"35167"},"ticker":{"id":"35103"}},"id":"35102","type":"LinearAxis"},{"attributes":{"below":[{"id":"35098"}],"center":[{"id":"35101"},{"id":"35105"}],"left":[{"id":"35102"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"35142"},{"id":"35144"},{"id":"35145"},{"id":"35146"},{"id":"35149"}],"title":{"id":"35151"},"toolbar":{"id":"35116"},"toolbar_location":null,"x_range":{"id":"35090"},"x_scale":{"id":"35094"},"y_range":{"id":"35092"},"y_scale":{"id":"35096"}},"id":"35089","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"35094","type":"LinearScale"},{"attributes":{},"id":"35096","type":"LinearScale"},{"attributes":{"callback":null},"id":"35113","type":"HoverTool"},{"attributes":{"axis":{"id":"35062"},"ticker":null},"id":"35065","type":"Grid"},{"attributes":{},"id":"35155","type":"BasicTickFormatter"},{"attributes":{},"id":"35099","type":"BasicTicker"},{"attributes":{"below":[{"id":"35062"}],"center":[{"id":"35065"},{"id":"35069"}],"left":[{"id":"35066"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"35128"},{"id":"35130"},{"id":"35131"},{"id":"35132"},{"id":"35135"}],"title":{"id":"35137"},"toolbar":{"id":"35080"},"toolbar_location":null,"x_range":{"id":"35054"},"x_scale":{"id":"35058"},"y_range":{"id":"35056"},"y_scale":{"id":"35060"}},"id":"35053","subtype":"Figure","type":"Plot"},{"attributes":{"axis":{"id":"35098"},"ticker":null},"id":"35101","type":"Grid"},{"attributes":{},"id":"35075","type":"UndoTool"},{"attributes":{},"id":"35060","type":"LinearScale"},{"attributes":{"axis":{"id":"35102"},"dimension":1,"ticker":null},"id":"35105","type":"Grid"},{"attributes":{},"id":"35103","type":"BasicTicker"},{"attributes":{"end":1,"start":-0.05},"id":"35056","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35127","type":"Circle"},{"attributes":{"overlay":{"id":"35114"}},"id":"35108","type":"BoxZoomTool"},{"attributes":{},"id":"35107","type":"PanTool"},{"attributes":{},"id":"35106","type":"ResetTool"},{"attributes":{},"id":"35071","type":"PanTool"},{"attributes":{},"id":"35112","type":"SaveTool"},{"attributes":{},"id":"35109","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"35115"}},"id":"35110","type":"LassoSelectTool"},{"attributes":{},"id":"35090","type":"DataRange1d"},{"attributes":{},"id":"35111","type":"UndoTool"},{"attributes":{"children":[[{"id":"35053"},0,0],[{"id":"35089"},0,1]]},"id":"35177","type":"GridBox"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"35106"},{"id":"35107"},{"id":"35108"},{"id":"35109"},{"id":"35110"},{"id":"35111"},{"id":"35112"},{"id":"35113"}]},"id":"35116","type":"Toolbar"},{"attributes":{},"id":"35070","type":"ResetTool"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"35132","type":"Span"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.1782444431478369},"id":"35131","type":"Span"},{"attributes":{},"id":"35058","type":"LinearScale"},{"attributes":{"overlay":{"id":"35078"}},"id":"35072","type":"BoxZoomTool"},{"attributes":{},"id":"35169","type":"BasicTickFormatter"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"35160"},"selection_policy":{"id":"35161"}},"id":"35125","type":"ColumnDataSource"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"35147","type":"Dash"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"35070"},{"id":"35071"},{"id":"35072"},{"id":"35073"},{"id":"35074"},{"id":"35075"},{"id":"35076"},{"id":"35077"}]},"id":"35080","type":"Toolbar"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238702},"id":"35130","type":"Span"},{"attributes":{},"id":"35073","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"35134"},"glyph":{"id":"35133"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"35136"}},"id":"35135","type":"GlyphRenderer"},{"attributes":{},"id":"35054","type":"DataRange1d"},{"attributes":{"data_source":{"id":"35125"},"glyph":{"id":"35126"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35127"},"selection_glyph":null,"view":{"id":"35129"}},"id":"35128","type":"GlyphRenderer"},{"attributes":{},"id":"35157","type":"BasicTickFormatter"},{"attributes":{"text":"tau"},"id":"35137","type":"Title"},{"attributes":{},"id":"35067","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35141","type":"Circle"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"35133","type":"Dash"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"35162"},"selection_policy":{"id":"35163"}},"id":"35134","type":"ColumnDataSource"}],"root_ids":["35180"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"5c019446-68ed-44dc-8384-e7d28b738a35","root_ids":["35180"],"roots":{"35180":"52fc2013-b8f8-4ef5-82ca-bff54690513e"}}];
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