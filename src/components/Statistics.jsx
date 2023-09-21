export const Statistics = (props) => {
    return (
        <div>
        <section class="statistics">
  <h2 class="title">{props.title}</h2>

  <ul class="stat-list">
  {props.stats.map(stat => {
        return (
    <li key ={stat.id} class="item">
      <span class="label">{stat.label}</span>
      <span class="percentage">{stat.percentage}</span>
    </li>
  )})}
  </ul>
</section>
</div>
    )
}