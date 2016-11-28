
get "/" do
  @header = "Pig Latin Translator"
  erb :home
end

post "/translation" do
  @translation = PigLatin.translate params[:words]
  erb :translation
end
