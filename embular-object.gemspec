# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'embular/object/version'

Gem::Specification.new do |spec|
  spec.name          = "embular-object"
  spec.version       = Embular::Object::VERSION
  spec.authors       = ["Vicente Reig Rincon de Arellano"]
  spec.email         = ["vicente.reig@gmail.com"]
  spec.summary       = %q{Ember Object and Angular playing nice together.}
  spec.description   = %q{Extends AngularJS to talk nicely to Ember Objects.}
  spec.homepage      = ""
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0")
  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ["lib"]

  spec.add_runtime_dependency "rails", ">= 3.1"

  spec.add_development_dependency "bundler", "~> 1.6"
  spec.add_development_dependency "rspec"
  spec.add_development_dependency "jasmine"
  spec.add_development_dependency "jasmine-headless-webkit"
  spec.add_development_dependency "bundler", "~> 1.3"
  spec.add_development_dependency "rake"
end
