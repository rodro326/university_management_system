import { FilterQuery, Query } from "mongoose"

class QueryBuilder<T> {
  public modelQuery :Query<T[],T>;
  public query:Record<string,unknown>;
  constructor(modelQuery :Query<T[],T>,query:Record<string,unknown>){
    this.modelQuery = modelQuery;
    this.query = query;
  };


  search(searchableFields: string[]){
    const searchTerm = this?.query?.searchTerm;
    if(searchTerm){
      this.modelQuery = this.modelQuery.find({
        $or: searchableFields.map((field)=>({
          [field]:{$regex: searchTerm, $options: 'i'},
        })as FilterQuery<T>,
        )
      });
    }
    return this;
  }

  filter(){
    const queryObj = {...this.query};

    const includeFields = ['searchTerm','sort','limit','page','fields'];

  includeFields.forEach((el)=> delete queryObj[el]);
  this.modelQuery = this.modelQuery.find(queryObj as FilterQuery<T>);

  return this;
  }

  sort(){
    const sort = this?.query?.sort || '-createdAt';
    this.modelQuery = this.modelQuery.sort(sort as string);
    return this;
  }

  paginate(){
  let page = Number(this.query.page) || 1;
  let limit = Number(this.query.limit) || 10;
  let skip = (page -1) * limit;

  this.modelQuery = this.modelQuery.skip(skip).limit(limit);
  return this;
  }

  field(){
    const field = (this?.query?.field as string).split(',').join(' ') || '-__v';
    this.modelQuery = this.modelQuery.select(field);
    return this;
  }
}