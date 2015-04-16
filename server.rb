require 'sinatra'

set :public_dir, proc { File.join(root) }

post '/temperature_change' do
  p params
  'ok'
end
