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
    
      
      
    
      var element = document.getElementById("ee5df2b6-6d88-4617-9da2-69b5e22de62e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ee5df2b6-6d88-4617-9da2-69b5e22de62e' but no matching script tag was found.")
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
                    
                  var docs_json = '{"070be603-da20-4069-9f00-33a49b8659f9":{"roots":{"references":[{"attributes":{},"id":"40047","type":"Selection"},{"attributes":{},"id":"39918","type":"PanTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"39960","type":"PolyAnnotation"},{"attributes":{},"id":"40048","type":"UnionRenderers"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40051"},"selection_policy":{"id":"40052"}},"id":"40010","type":"ColumnDataSource"},{"attributes":{},"id":"40038","type":"Selection"},{"attributes":{},"id":"40039","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"39925","type":"BoxAnnotation"},{"attributes":{},"id":"39905","type":"LinearScale"},{"attributes":{"line_dash":[6],"location":2.480769230769231},"id":"40015","type":"Span"},{"attributes":{},"id":"39939","type":"LinearScale"},{"attributes":{"data_source":{"id":"40004"},"glyph":{"id":"40005"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40006"},"selection_glyph":null,"view":{"id":"40008"}},"id":"40007","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"40010"},"glyph":{"id":"40011"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40012"},"selection_glyph":null,"view":{"id":"40014"}},"id":"40013","type":"GlyphRenderer"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"39926","type":"PolyAnnotation"},{"attributes":{},"id":"40049","type":"Selection"},{"attributes":{},"id":"40050","type":"UnionRenderers"},{"attributes":{},"id":"40029","type":"BasicTickFormatter"},{"attributes":{"line_dash":[6],"location":0.41666666666666663},"id":"39975","type":"Span"},{"attributes":{},"id":"40051","type":"Selection"},{"attributes":{},"id":"40052","type":"UnionRenderers"},{"attributes":{"axis":{"id":"39909"},"ticker":null},"id":"39912","type":"Grid"},{"attributes":{"axis_label":"Chain","formatter":{"id":"40027"},"ticker":{"id":"39994"}},"id":"39913","type":"LinearAxis"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40032"},"selection_policy":{"id":"40033"}},"id":"39970","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"39913"},"dimension":1,"ticker":null},"id":"39916","type":"Grid"},{"attributes":{"source":{"id":"39970"}},"id":"39974","type":"CDSView"},{"attributes":{},"id":"40042","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"39972","type":"VBar"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"39978","type":"VBar"},{"attributes":{"ticks":[0,1,2,3]},"id":"40022","type":"FixedTicker"},{"attributes":{"data_source":{"id":"39970"},"glyph":{"id":"39971"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"39972"},"selection_glyph":null,"view":{"id":"39974"}},"id":"39973","type":"GlyphRenderer"},{"attributes":{},"id":"40053","type":"Selection"},{"attributes":{"line_dash":[6],"location":1.4166666666666665},"id":"39981","type":"Span"},{"attributes":{"children":[[{"id":"39900"},0,0],[{"id":"39936"},0,1]]},"id":"40056","type":"GridBox"},{"attributes":{},"id":"40054","type":"UnionRenderers"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40034"},"selection_policy":{"id":"40035"}},"id":"39976","type":"ColumnDataSource"},{"attributes":{},"id":"39922","type":"UndoTool"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"39977","type":"VBar"},{"attributes":{"callback":null},"id":"39924","type":"HoverTool"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"39983","type":"VBar"},{"attributes":{"source":{"id":"39976"}},"id":"39980","type":"CDSView"},{"attributes":{"line_dash":[6],"location":3.4166666666666665},"id":"39993","type":"Span"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"39984","type":"VBar"},{"attributes":{},"id":"39917","type":"ResetTool"},{"attributes":{"line_dash":[6],"location":2.4166666666666665},"id":"39987","type":"Span"},{"attributes":{"axis":{"id":"39943"},"ticker":null},"id":"39946","type":"Grid"},{"attributes":{"callback":null},"id":"39958","type":"HoverTool"},{"attributes":{"data_source":{"id":"39976"},"glyph":{"id":"39977"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"39978"},"selection_glyph":null,"view":{"id":"39980"}},"id":"39979","type":"GlyphRenderer"},{"attributes":{},"id":"39941","type":"LinearScale"},{"attributes":{},"id":"40032","type":"Selection"},{"attributes":{"axis_label":"Chain","formatter":{"id":"40042"},"ticker":{"id":"40022"}},"id":"39947","type":"LinearAxis"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"39989","type":"VBar"},{"attributes":{},"id":"40033","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"39988"},"glyph":{"id":"39989"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"39990"},"selection_glyph":null,"view":{"id":"39992"}},"id":"39991","type":"GlyphRenderer"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"40044"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"39944"}},"id":"39943","type":"LinearAxis"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40036"},"selection_policy":{"id":"40037"}},"id":"39982","type":"ColumnDataSource"},{"attributes":{},"id":"39944","type":"BasicTicker"},{"attributes":{"source":{"id":"39982"}},"id":"39986","type":"CDSView"},{"attributes":{"below":[{"id":"39909"}],"center":[{"id":"39912"},{"id":"39916"},{"id":"39975"},{"id":"39981"},{"id":"39987"},{"id":"39993"}],"left":[{"id":"39913"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"39973"},{"id":"39979"},{"id":"39985"},{"id":"39991"}],"title":{"id":"39996"},"toolbar":{"id":"39927"},"toolbar_location":null,"x_range":{"id":"39901"},"x_scale":{"id":"39905"},"y_range":{"id":"39903"},"y_scale":{"id":"39907"}},"id":"39900","subtype":"Figure","type":"Plot"},{"attributes":{"text":"tau"},"id":"39996","type":"Title"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"39990","type":"VBar"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"40029"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"39910"}},"id":"39909","type":"LinearAxis"},{"attributes":{"source":{"id":"40010"}},"id":"40014","type":"CDSView"},{"attributes":{},"id":"39923","type":"SaveTool"},{"attributes":{"data_source":{"id":"39982"},"glyph":{"id":"39983"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"39984"},"selection_glyph":null,"view":{"id":"39986"}},"id":"39985","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"39947"},"dimension":1,"ticker":null},"id":"39950","type":"Grid"},{"attributes":{"text":"mu"},"id":"40024","type":"Title"},{"attributes":{},"id":"40044","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"39943"}],"center":[{"id":"39946"},{"id":"39950"},{"id":"40003"},{"id":"40009"},{"id":"40015"},{"id":"40021"}],"left":[{"id":"39947"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"40001"},{"id":"40007"},{"id":"40013"},{"id":"40019"}],"title":{"id":"40024"},"toolbar":{"id":"39961"},"toolbar_location":null,"x_range":{"id":"39901"},"x_scale":{"id":"39939"},"y_range":{"id":"39903"},"y_scale":{"id":"39941"}},"id":"39936","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"39971","type":"VBar"},{"attributes":{"overlay":{"id":"39959"}},"id":"39953","type":"BoxZoomTool"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40038"},"selection_policy":{"id":"40039"}},"id":"39988","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"39926"}},"id":"39921","type":"LassoSelectTool"},{"attributes":{},"id":"39952","type":"PanTool"},{"attributes":{},"id":"39951","type":"ResetTool"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"39999","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40053"},"selection_policy":{"id":"40054"}},"id":"40016","type":"ColumnDataSource"},{"attributes":{"line_dash":[6],"location":3.480769230769231},"id":"40021","type":"Span"},{"attributes":{},"id":"40034","type":"Selection"},{"attributes":{},"id":"39957","type":"SaveTool"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40018","type":"VBar"},{"attributes":{},"id":"40035","type":"UnionRenderers"},{"attributes":{},"id":"39954","type":"WheelZoomTool"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40017","type":"VBar"},{"attributes":{"ticks":[0,1,2,3]},"id":"39994","type":"FixedTicker"},{"attributes":{"overlay":{"id":"39960"}},"id":"39955","type":"LassoSelectTool"},{"attributes":{"source":{"id":"40016"}},"id":"40020","type":"CDSView"},{"attributes":{"toolbars":[{"id":"39927"},{"id":"39961"}],"tools":[{"id":"39917"},{"id":"39918"},{"id":"39919"},{"id":"39920"},{"id":"39921"},{"id":"39922"},{"id":"39923"},{"id":"39924"},{"id":"39951"},{"id":"39952"},{"id":"39953"},{"id":"39954"},{"id":"39955"},{"id":"39956"},{"id":"39957"},{"id":"39958"}]},"id":"40057","type":"ProxyToolbar"},{"attributes":{},"id":"39956","type":"UndoTool"},{"attributes":{},"id":"39901","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"39951"},{"id":"39952"},{"id":"39953"},{"id":"39954"},{"id":"39955"},{"id":"39956"},{"id":"39957"},{"id":"39958"}]},"id":"39961","type":"Toolbar"},{"attributes":{"source":{"id":"39988"}},"id":"39992","type":"CDSView"},{"attributes":{"data_source":{"id":"40016"},"glyph":{"id":"40017"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40018"},"selection_glyph":null,"view":{"id":"40020"}},"id":"40019","type":"GlyphRenderer"},{"attributes":{},"id":"39910","type":"BasicTicker"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40005","type":"VBar"},{"attributes":{"children":[{"id":"40058"},{"id":"40056"}]},"id":"40059","type":"Column"},{"attributes":{},"id":"39920","type":"WheelZoomTool"},{"attributes":{},"id":"39907","type":"LinearScale"},{"attributes":{"line_dash":[6],"location":1.4807692307692308},"id":"40009","type":"Span"},{"attributes":{"source":{"id":"39998"}},"id":"40002","type":"CDSView"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40006","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40049"},"selection_policy":{"id":"40050"}},"id":"40004","type":"ColumnDataSource"},{"attributes":{"toolbar":{"id":"40057"},"toolbar_location":"above"},"id":"40058","type":"ToolbarBox"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40011","type":"VBar"},{"attributes":{},"id":"40036","type":"Selection"},{"attributes":{"data_source":{"id":"39998"},"glyph":{"id":"39999"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40000"},"selection_glyph":null,"view":{"id":"40002"}},"id":"40001","type":"GlyphRenderer"},{"attributes":{},"id":"40037","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"39917"},{"id":"39918"},{"id":"39919"},{"id":"39920"},{"id":"39921"},{"id":"39922"},{"id":"39923"},{"id":"39924"}]},"id":"39927","type":"Toolbar"},{"attributes":{"source":{"id":"40004"}},"id":"40008","type":"CDSView"},{"attributes":{},"id":"39903","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40000","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40047"},"selection_policy":{"id":"40048"}},"id":"39998","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"39925"}},"id":"39919","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"39959","type":"BoxAnnotation"},{"attributes":{"line_dash":[6],"location":0.48076923076923067},"id":"40003","type":"Span"},{"attributes":{},"id":"40027","type":"BasicTickFormatter"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40012","type":"VBar"}],"root_ids":["40059"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"070be603-da20-4069-9f00-33a49b8659f9","root_ids":["40059"],"roots":{"40059":"ee5df2b6-6d88-4617-9da2-69b5e22de62e"}}];
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