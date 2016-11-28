require "sinatra"
require "sinatra/reloader" if development?
#Class called file, method attached called dirname. End bit requires all controllers
#useful if you have loads and loads of controllers
Dir[File.dirname(__FILE__) + "/controllers/*.rb"].each { |file| require file }
require_relative "models/pig_latin"
