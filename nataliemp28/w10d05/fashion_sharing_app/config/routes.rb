Rails.application.routes.draw do
  resources :products
  resources :retailers
  root 'sessions#landing'
  get '/register', to: 'users#new'
  post '/register', to: 'users#create'

  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/', to: 'sessions#landing', as: :landing


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
