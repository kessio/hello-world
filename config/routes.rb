Rails.application.routes.draw do
  namespace :api do
    get '/greetings', to: 'greetings#random_greetings'
  end
end
