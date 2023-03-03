Rails.application.routes.draw do
  namespace :api do
    get '/greetings/random', to: 'greetings#random_greetings'
  end
  root to: 'static_pages#home'
end
