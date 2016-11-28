class PigLatin
  # workout how many characters to remove from front of word
  def self.chars_to_remove string
    index_of_qu = string.index(/qu/)
    index_of_qu ? index_of_qu + 2 : string.index(/(a|e|i|o|u)/)
  end

  # check if word starts with a vowel
  def self.starts_with_vowel? string
    %w(a e i o u).include? string[0]
  end

  def self.translate string
    # split string into words on the " " character
    string.split.map! do |word|
      if starts_with_vowel? word
        # if word starts with vowel, just add "ay" on the end
        word << "ay"
      else
        # otherwise find the position of the first letter of the substring
        # move the initial characters to the end and add "ay"
        index = chars_to_remove word
        word[index..-1] << word[0..index-1] << "ay"
      end
    end.join(" ")
  end
end
Add Comment Collapse
