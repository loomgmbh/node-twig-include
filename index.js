module.exports = class TwigInclude {

  static extend(Twig) {
    Twig.functions.include = function(template, vars) {
      var path = Twig.path.parsePath(this, template);
      var sub_template = Twig.Templates.loadRemote(path, {
        id: this.id,
        method: this.getLoaderMethod(),
        async: false,
        path: path,
        options: this.options,
      });

      return sub_template.renderAsync(vars);
    };

    Twig.functions.modifier = function(name, modifiers) {
      return 'class="' + name + ' ' + name + '--' + modifiers.join(' ' + name + '--') + '"';
    };
  }

}
