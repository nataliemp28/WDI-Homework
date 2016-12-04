class Product < ApplicationRecord
  mount_uploader :product, ImageUploaderUploader
  belongs_to :retailer
end
