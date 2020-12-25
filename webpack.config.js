const HtmlWebpackPlugin = require('html-webpack-plugin'); // создает index.html в папке dist с подключением js из входных точек
const path = require('path');// путь к текущей папке
const { CleanWebpackPlugin } = require('clean-webpack-plugin');// очищает папку dist


module.exports = {
    context: path.resolve(__dirname,'src'), //папка с исходными файлами
    mode:'development', //если не указывать режим в команде webpack будет development, а так в package.json пишем команду dev и build и запускаем npm run dev или build
    entry: {
        main: './index.js', //входная точка
        analytics: './analytics.js'// входная точка
    },
    output: {
        filename: '[name].[contenthash].js', //выходной js файл, name - имя входной точки,  contenthash - хэш, каждый раз новый чтобы оличать версии в кэше например
        path: path.resolve(__dirname, 'dist') // dist папка в текущей папке, куда будем складывать бандлы
    },
    devServer: {// server, 
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000
    },
    resolve: {
      extensions: ['.js', '.json'], // теперь эти расширения при импорте можно не указывать
      alias: {
        '@models': path.resolve(__dirname, 'src/models'),
        '@': path.resolve(__dirname, 'src'), 
      },
    }, 
    optimization: {
      splitChunks: {
        chunks: 'all' // создает например для jqwery отдельный файл, вместо того, чтобы дублтровать библиотеку во все 
      }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ //копирует html и подключает  js
         //   title: 'Webpack for Kate', //для хтмл заголовок, не имеет смысла если задан тэмплэйт
            template: './index.html' // исходный без подключенных js
        })
    ],
    //loaders 
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'], //загружает  css через импорт в js файлах
          },
          {
            test: /\.(png|jpe?g|gif)$/i, 
            use: [
              {
                loader: 'file-loader' //загружает картинки через импорт, дает другое имя, ужимает
              },
            ],
          },
          {
            test: /\.(ttf|wof|wo2|eot)$/, 
            use: [
              {
                loader: 'file-loader' //загружает картинки через импорт, дает другое имя, ужимает
              },
            ],
          },
          {
            test: /\.xml$/i,
            use: ['xml-loader'],
          },
          {
            test: /\.(csv|tsv)$/i,
            use: ['csv-loader'],
          },
        ],
      },
} 