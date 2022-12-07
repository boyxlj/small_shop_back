const getCategory = async () => {
  const { data: res } = await categoryList()
  if (res.code != 200) return message.error("数据获取异常")
  message.success("数据获取成功")
  const categoryData = res.data?.map(item => {
    return { value: 0, name: item.categoryName }
  })
  getInitEcharts(categoryData)
}


const getCategoryPieData = ()=>{
  getCategory()
}

export {getCategoryPieData}