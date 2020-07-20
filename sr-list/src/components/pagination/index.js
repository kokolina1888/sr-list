import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import Link from "../UI/link";

import styles from "./index.module.css";

class Pagination extends Component {
  componentDidMount() {
    
    this.props.onLoadPagination();
    this.props.setInitKey(this.props.perPage);
    
  }
  handleOnNextPage(event){
    event.preventDefault()
    this.props.onLoadNextPage( this.props.perPage, this.props.prevKey )
  }

  render() {
    const perPage = this.props.perPage;
    let numPages = Math.ceil(
      this.props.total_recipes / (+perPage)
    );
    let page = 1;
    let pagination = [];
    if (numPages > 1) {
      while (page <= numPages) {
        pagination.push(
          <Link
            type="pagination"
            href={"/recipes/" + page}
            key={page}
            onClick={(page, perPage) =>
              this.loadNextPage(page, perPage)
            }
          >
            {page}
          </Link>
        );
        page++;
      }
    }
    return (
      <div className={styles.pagination}>
        <Link type="pagination" href="page1">
          &lt;&lt;
        </Link>
        {pagination}
        <a href="#" onClick={(event) => this.handleOnNextPage(event)}>
          &gt;&gt;
        </a>
      </div>
    );
  }
}

const mapsStateToProps = (state) => {
  return {
    total_recipes: state.pagination.total_recipes,
    error: state.pagination.error,
    recipes_per_page: state.recipes.recipes_per_page,
    prevKey: state.pagination.key
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onLoadPagination: (num) => dispatch(actions.countTotalRecipes()),
    onFetchRecipesList: (num) => dispatch(actions.fetchRecipesList(num)),
    onLoadNextPage: (num, prevKey) => dispatch(actions.loadNextPage(num, prevKey)),
    setInitKey: (num) => dispatch( actions.setInitPaginationKey(num) )
  };
};
export default connect(mapsStateToProps, mapDispatchToProps)(Pagination);
