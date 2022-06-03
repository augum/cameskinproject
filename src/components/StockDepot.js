import ArticleCard from './ArticleCard'
const StockDepot = () => {
  const depot = true
  return (
    <div>
      <div className="result">
        <ArticleCard depot={depot} />
      </div>
    </div>
  )
}
export default StockDepot
